import { useState } from "react";
function Input({valor,onChange}){
   
//el parametro event hace referencia al evento y se puede utilizar para extraer informacion del mismo

//onchange se utiliza para indicar algun cambio en el input que desencadena un evento
        //value contiene ese valor del input lo utilizo para recuperar el valor actual ingresado por el usuario
return(
    
        
    <input type='text' className='entrada' value={valor} onChange={onChange} >
    
    </input>

);
}

export default Input;