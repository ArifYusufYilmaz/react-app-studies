
import { useState } from "react";

function MyForm(){
     const [name, setName] = useState("");
     return(
        <form>
            <label> Enter a text;
                 <input 
                 type="text"
                 value={name}
                 onChange={(e)=> setName(e.target.value) }/>
            </label>
        </form>
    )
}
export default MyForm;