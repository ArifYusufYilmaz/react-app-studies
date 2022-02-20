function Car(props){
        return(
            <>
             <ul>
             {props.carInfo.map((car)=> <li>{car.brand} - {car.carModel}</li>)}
            
            </ul>
            </>
        )
}
export default Car;