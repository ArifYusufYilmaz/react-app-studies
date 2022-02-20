function Car(props){
    const isStarted = props.brand.carSituation;
    const startCar=(displayingMessage, event)=>{
        alert(event.type);
    }
    const stopCar=()=>{
        alert("The Car is stopping!!");
    }
    if(isStarted){
        return(
            <>
             <h1>Hi, This is a component for a {props.brand.carName} - {props.brand.carModel}</h1>
             <button onClick={stopCar}>To Stop the Car</button>
            </>
        )
    }
    else{
            return(
            <>
             <h1>Hi, This is a component for a {props.brand.carName} - {props.brand.carModel}</h1>
             <button onClick={(event)=>startCar("Car is starting!!", event)}> Start Car </button>
              </>
            )
    }
    
}
export default Car;