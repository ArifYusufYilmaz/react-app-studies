import {useState} from 'react';
function TextAreaForm(){
    const [textarea, setTextarea] = useState("We'll see what will happen");

    const handleChange=(event)=>{
        setTextarea(event.target.value);
    }
    return(
        <form>
           <textarea value={textarea} onChange={handleChange}></textarea>
        </form>
    )
}
function SelectForm(){
    const [myCar, setMyCar] = useState()
    const handleChange=(event)=>{
        setMyCar(event.target.value)
    }
    return(
        <form>
            <select value={myCar} onChange={handleChange}>
                 <option>first</option>
               <option>second</option>
              <option>third</option>
            </select>
        </form>
    )
}
export {TextAreaForm,SelectForm};