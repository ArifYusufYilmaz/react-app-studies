function Car(props){
    const startCar=()=>{
        alert("Car is going!!");
    }
    return(
        <>
         <h1>Hi, This is a component for a {props.brand.carName} - {props.brand.carModel}</h1>
         <button onClick={startCar}> Start Car </button>
        </>
    )
}
export default Car;