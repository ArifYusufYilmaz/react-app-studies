import Car from './Car.js';

function Garage(){
    const cars = [
        {id:1, brand:"Togg"  ,carModel:"2023",carSituation:true,carMaintenance:[]},
        {id:2, brand:"Ford"  ,carModel:"2018",carSituation:true,carMaintenance:[2019]},
        {id:3, brand:"Toyota",carModel:"2013",carSituation:true,carMaintenance:[2015,2017,2018,2019]},
        {id:4, brand:"Karsan",carModel:"2011",carSituation:true,carMaintenance:[2013,2014,2018]},
        {id:5, brand:"Tofaş" ,carModel:"1999",carSituation:true,carMaintenance:[2002,2005,2007,2015,2016,2018]},
        {id:6, brand:"Tesla" ,carModel:"2022",carSituation:true,carMaintenance:[2023]}
    ];
    return (
        <>
        <p>Whic car is in the garage?</p>
           <ul>
               {cars.map((car)=> <Car key={car.id} brand={car.brand} carModel={car.carModel} carMaintenance={car.carMaintenance}/>)}
           </ul>
        </>
    );

    
}
export default Garage;