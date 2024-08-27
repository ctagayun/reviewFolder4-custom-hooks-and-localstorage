/* eslint-disable no-unused-vars */
import * as React from 'react';


//Create a search component using arrow function expression

const Search = (props) => {
    
    // Basic Destructuring props within the function body
    //destructure props using "object destructuring"
    const {search, onSearch} = props;
    //function block
    return(
        <div>
        <label htmlFor="search">SearchMe: </label>
        {/* <input id="search" type="text" value={props.search} onChange={props.onSearch} />  */}
        <input id="search" 
               type="text" 
               value={search} 
               onChange={onSearch} /> 
      </div>
    );
   };

export default Search;