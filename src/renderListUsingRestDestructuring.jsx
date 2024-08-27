import * as React from "react";

const RenderListUsingRestDestructuring = ({list}) => (
    //When we destruture props in the function signature we 
    //omit the function block body (meaning the return statement)
    //Instead of passing item as an object every property is passed 
    //to the Item component individually thereby creating clutter.
        <>
        <h2>Example of Destructuring Props Using Spread and Rest Operator  </h2>
        <ul>
           {list.map ((item) => (
             <Item
               key={item.objectID}
               title={item.title}
               url={item.url}
               author={item.author}
               num_comments={item.num_comments}
               points={item.points}
             />
           ))}

        </ul>
      </>
    );
  
export default RenderListUsingRestDestructuring;

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