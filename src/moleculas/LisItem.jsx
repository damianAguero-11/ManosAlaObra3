import Etiqueta from "../atomos/Etiqueta";
import Imagen from "../atomos/Imagen";
import Checkbox from "../atomos/Checkbox";
import Boton from "../atomos/Boton";
import { useState } from "react";
function ListItem({contenido,onClick}){

    const[checkeado,setCheckeado]=useState(false);

//uso un atributo event.target para hacer referencia al elemento checkbox y uso el .checked para obtener el estado del checked, el cual es el mismo que el del chekbox
    const handleState=(e)=>{
        setCheckeado(e.target.checked);
    }

   
    let estado;
    let completado='';

  if(checkeado==true){
    estado='compleat';
    completado='completada';
  }else{
      estado='';
      completado='';
  }

   
    return(
        <li >
       <Checkbox onChange={handleState} checked={checkeado}/>
        <Etiqueta clase={estado}>
            <p>
           { contenido }  {completado}
           </p>
        </Etiqueta>
        <Boton clase="boton-basura" onClick={onClick}>
        <Imagen />
        </Boton>
        </li>

      
    )
}
export default ListItem;