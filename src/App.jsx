// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Search2 from './searchDestructuringPropsRightAway.jsx';
import Search from './searchBasicDestructuring.jsx';

import './App.css'

import RenderListDestructuringPropsInFunctionSignature from "./renderListDestructuringPropsInFunctionSignature.jsx";
import RenderListUsingRestDestructuring from "./renderListUsingRestDestructuring.jsx";
import RenderListUsingSpreadDotDotOperatorVariation1 from "./renderListUsingSpreadDotDotOperatorVariation1.jsx";
import RenderListUsingSpreadDotDotOperatorVariation2 from "./renderListUsingSpreadDotDotOperatorVariation2.jsx";

//Create a custom hook called "useStorageState". We will use two hooks 
  //to create it:
  //    1. useState
  //    2. useEffect 

  const useStorageState = (searchKeyParam, deafaultStateParam) => {

    const [theState, stateSetter] = React.useState(
       localStorage.getItem(searchKeyParam) || deafaultStateParam //provides an initial value to the hook.
    );

    //https://react.dev/reference/react/useEffect#useeffect
    //Since the key comes from outside, the custom hook assumes that it could change,
    //so it needs to be included in the dependency array of the useEffect hook as well.
    React.useEffect(() => {
        localStorage.setItem(searchKeyParam, theState);
       },
       [theState, stateSetter] );

    //Custom hooks return values are returned as an array
    return [theState, stateSetter]; 

 } //EOF create custom hook



//Declaration of App component
function App() {

  const welcome = {
     greeting: 'Hey',
     title: "Chito",
  };
  
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
 
  //now call our custom hook
  let searchKey= 'search';
  let defaultState = 'React'

  //now call our custom hook. The actual return value of our custom hook is:
  // return [theState, stateSetter]. But we can rename it. In this case
  //searchTerm, setSearchTerm respectively
  const [searchTerm, setSearchTerm] = useStorageState(searchKey, defaultState)

  const handleSearch = (event) => {
    //event in this case contains the state
    setSearchTerm(event.target.value); 
}

  //Now filter the search output based on what has been inputted in the search box.
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
       <h1> 
          {welcome.greeting} {welcome.title}
      </h1>
       
       {/* // B - Pass in a callback handler as prop to search component*/}
       <Search search={searchTerm} onSearch={handleSearch} />; 

       <hr/>

        {/* <RenderListDestructuringPropsInFunctionSignature list={searchedStories} /> */}
       {/* <RenderListUsingRestDestructuring list={searchedStories} /> */}
       {/* <RenderListUsingSpreadDotDotOperatorVariation1 list={searchedStories}/> */}
       <RenderListUsingSpreadDotDotOperatorVariation2 list={searchedStories}/>

    </div>
  )
}

export default App
