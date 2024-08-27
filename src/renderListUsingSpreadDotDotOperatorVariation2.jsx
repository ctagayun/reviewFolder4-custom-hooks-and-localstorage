import * as React from "react";

const RenderListUsingSpreadDotDotOperatorVariation2 = ({list}) => (
    //When we destruture props in the function signature we 
    //omit the function block body (meaning the return statement)

    //Javascript spread operator allows us to sprread all key/value pairs on an
    //object to another object. So instead of passing the properties of 
    //an object via props one by one from list to item component, we can use 
    //javascript spread ... operator to pass all the objects "key/value" pairs
    //as attribute/value pairs. Example "...item"

    //Variation2: In this final variation, the rest operator is used to destructure 
    //the objectID from the rest of the item object. Afterward, the item is spread 
    //with its key/value pairs into the Item component. 
        <>
        <h2>Example of Destructuring Props Using Spread Dot Dot Dot Operator Variation 2 </h2>
        <ul>
           {list.map (({objectID, ...item} ) => (
             <Item
               key={item.objectID} {...item}
             />
           ))}

        </ul>
      </>
    );
  
export default RenderListUsingSpreadDotDotOperatorVariation2;

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