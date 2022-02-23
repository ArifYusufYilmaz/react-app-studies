import {memo} from 'react';
const TodoswithMemo=({todos})=>{
 console.log("child render with memo");
 
 return(
     <>
     <h2>My Todos with memo</h2>
     {todos.map((todo,index)=>{
         return <p key={index}> todo </p>
     })}
     </>
 )
}
export default memo(TodoswithMemo);