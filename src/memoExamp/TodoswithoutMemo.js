const Todos=({todos})=>{
    console.log("child render without memo");
    return(
        <>
        <h2>My Todo without memo</h2>
            {todos.map((todo, index) => { 
                return <p key={index}>todo</p>
              })}
        </>
    )
};
export default Todos;