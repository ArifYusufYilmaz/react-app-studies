function Car(props){
    const isStarted = props.brand.carSituation;
    const carMaintenance = props.brand.carMaintenance;
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
             {carMaintenance.length > 2 &&
                <h2>
                    The count of maintenance is {carMaintenance.length}
                </h2>
             }
            </>
        )
    }
    else{
            return(
            <>
             <h1>Hi, This is a component for a {props.brand.carName} - {props.brand.carModel}</h1>
             <button onClick={(event)=>startCar("Car is starting!!", event)}> Start Car </button>
             {carMaintenance.length > 4 &&
                <h2>
                    The count of maintenance is {carMaintenance.length}
                </h2>
             }
              </>
            )
    }
    
}
export default Car;