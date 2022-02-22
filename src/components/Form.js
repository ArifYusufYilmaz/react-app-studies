
import { useState } from "react";


function MyFormBasic(){
     const [name, setName] = useState("");
     const handleSubmit = (event) =>{
         event.preventDefault(); // Html elementlerinin mevcut eylemlerini engelleme isteği. Mevcut durumda sayfa yeniden yüklenmez.
        alert(`The name you entered was: ${name}`);
    }
     return(
        <form onSubmit={handleSubmit}>
            <label> Enter a text;
                 <input 
                 type="text"
                 value={name}
                 onChange={(e)=> setName(e.target.value) }/>
            </label>
            <input type="submit"/>
        </form>
    )
}
function MyFormUpgraded(){
    const [inputs, setInputs] = useState({})
    const handleChange = (event)=>{
         const name = event.target.name;
         const value = event.target.value;
        setInputs((values) => ({...values, [name]: value})) // buradaki spread operatorü ne iş yapıyor?
        
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(inputs);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label> Enter Your Name
                <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                />
            </label>
            <label> Enter Your Age
            <input
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
                />
            </label>
            <input type="submit"/>
        </form>
    )
}
export {MyFormUpgraded,MyFormBasic};