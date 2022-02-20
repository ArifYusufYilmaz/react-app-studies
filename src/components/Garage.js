import Car from './Car.js';

function Garage(){
    const carName = "Togg Car";
    return (
        <>
        <p>Whic car is in the garage?</p>
        <Car brand={carName}></Car>
        </>
    );

    
}
export default Garage;