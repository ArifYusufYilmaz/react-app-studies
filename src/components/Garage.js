import Car from './Car.js';

function Garage(){
    
    const carInfo ={carName: "Togg Car", carModel:"2022", carSituation:true, carMaintenance:[2015,2016,2017],cars : ["Togg", "Ford", "Toyota", "Karsan","Tofaş","Tesla"]};
    return (
        <>
        <p>Whic car is in the garage?</p>
        
            <Car brand={carInfo}/>
        </>
    );

    
}
export default Garage;