/* eslint-disable no-unused-vars */
import * as React from 'react';

//Destucturing props object right away in the function signature
//and omitting the function's block body of the component:

//By destructuring the props object right away in the component's 
//function signature, we can conveniently access all information 
//without dealing with its props container.
const Search2 = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch}
    />
  </div>
 );

 export default Search2