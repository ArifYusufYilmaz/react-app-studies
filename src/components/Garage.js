import Car from './Car.js';

function Garage(){
    
    const carInfo ={carName: "Togg Car", carModel:"2022", carSituation:true, carMaintenance:[2015,2016,2017]};
    return (
        <>
        <p>Whic car is in the garage?</p>
        <Car brand={carInfo}></Car>
        </>
    );

    
}
export default Garage;