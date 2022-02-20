function Car(props){
    const startCar=(displayingMessage, event)=>{
        alert(event.type);
    }
    return(
        <>
         <h1>Hi, This is a component for a {props.brand.carName} - {props.brand.carModel}</h1>
         <button onClick={(event)=>startCar("Car is going slowly!!", event)}> Start Car </button>
        </>
    )
}
export default Car;