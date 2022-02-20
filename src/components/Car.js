function Car(props){
    const startCar=(displayingMessage, event)=>{
        alert(event.type);
    }
    const stopCar=()=>{
        alert("Stopped!!");
    }
    return(
        <>
         <h1>Hi, This is a component for a {props.brand.carName} - {props.brand.carModel}</h1>
         <button onClick={(event)=>startCar("Car is going slowly!!", event)}> Start Car </button>
         <button onClick={stopCar}>To Stop the Car</button>
        {/* there is a difference between using stopCar and stopCar().  */}
        </>
    )
}
export default Car;