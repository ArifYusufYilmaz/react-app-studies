function Car(props){
    const startCar=(displayingMessage)=>{
        alert(displayingMessage);
    }
    return(
        <>
         <h1>Hi, This is a component for a {props.brand.carName} - {props.brand.carModel}</h1>
         <button onClick={()=>startCar("Car is going fast!!")}> Start Car </button>
        </>
    )
}
export default Car;