import * as React from "react";

const RenderListUsingSpreadDotDotOperatorVariation1 = ({list}) => (
    //When we destruture props in the function signature we 
    //omit the function block body (meaning the return statement)

    //Javascript spread operator allows us to sprread all key/value pairs on an
    //object to another object. So instead of passing the properties of 
    //an object via props one by one from list to item component, we can use 
    //javascript spread ... operator to pass all the objects "key/value" pairs
    //as attribute/value pairs. Example "...item"
        <>
        <h2>Example of Destructuring Props Using Spread Dot Dot Dot Operator Variation 2 </h2>
        <ul>
           {list.map ((item) => (
             <Item
               key={item.objectID} {...item}
             />
           ))}

        </ul>
      </>
    );
  
export default RenderListUsingSpreadDotDotOperatorVariation1;

//Notice the props are destructured using Javascript rest destructuring
const Item = ({title, url, author, num_comments, points}) =>(
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);