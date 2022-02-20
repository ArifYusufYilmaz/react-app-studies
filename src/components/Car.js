function Car(props){
        return(
            <>
            
             <li>
                 <p>Car Brand is : {props.brand}</p>
                 <p>Car Model is : {props.carModel}</p>
                 <p>Car Maintenance is : {props.carMaintenance}</p>
             </li>
            
            
            </>
        )
}
export default Car;