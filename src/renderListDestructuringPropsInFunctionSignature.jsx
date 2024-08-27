import * as React from "react";

const RenderListDestructuringPropsInFunctionSignature = ({list}) => (
    //When we destruture props in the function signature we 
    //omit the function block body (meaning the return statement)
        <>
        <h2>Example of Destructuring Props in Function Signature</h2>
        <ul>
          {list.map( (item) => ( 
           <Item key={item.objectID} item={item} />
          ))}
        </ul>
      </>
    );
  
export default RenderListDestructuringPropsInFunctionSignature;


//Again When we destruture props in the function signature we 
//omit the function block body (meaning the return statement)

//Note: item here is also a Javascript object.
//Even though the item object has already been destructured 
//from the props in the Item component's function signature, it isn't 
//directly used in the Item component so we need to destructure it again
// const Item = ({ item }) => (
//   <li>
//     <span>
//       <a href={item.url}>{item.title}</a>
//     </span>
//     <span>{item.author}</span>
//     <span>{item.num_comments}</span>
//     <span>{item.points}</span>
//   </li>
// );

//Another version of Item Component using Nested destructuring
//However, nested destructuring introduces lots of clutter through indentations 
//in the function signature. While here it's not the most readable option, 
//it can be useful in other scenarios though.
const Item = ({
  item: {
    title,
    url,
    author,
    num_comments,
    points,
  },
}) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);