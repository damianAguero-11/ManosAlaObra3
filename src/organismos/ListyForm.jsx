import { useState } from "react";
import Formulario from "../moleculas/Formulario";
import ListItem from "../moleculas/LisItem";
import Subtitulo from "../atomos/Subtitulo";
import UnorderList from "./UnorderList";

function ListyForm(){

    const[indice,setIndice]=useState(0);
    const[valor,setValor]=useState('');
    const[tareas,setTareas]=useState([]);

    const handleChange=(event)=>{
        setValor(event.target.value);
    }
//...tareas contiene todos los elementos ya insertados del array tareas
//la funcion.trim() elimina todos los espacios en blanco
    const handleClick=()=>{

       if(valor.trim().length!=0){
        setIndice(indice+1);
        setTareas([
            
            { indice: indice, valor: valor },

            ...tareas


        ])
        setValor('');
      }
        
    }

    const handleFilter=(tarea)=>{
      setTareas(tareas.filter(
        tareita=>tareita.indice!==tarea.indice
    ))
    }
   //filter hace un mapeo pero verifica que todos los elementos del array cumplan una condicion especifica
  //y devuelve ese nuevo array tareita con los resultados
  
    const tareasItems=tareas.map(
        tarea=>  <ListItem  key={tarea.indice} contenido={tarea.valor} 
        onClick={() => {handleFilter(tarea)}} />
    )
    //hago una funcion flecha para que cuando se produce el clik en el boton basura este retorna 
    //la funcion handleFilter y de esta manera puedo enviarle un argumento y que no se active antes de que se produzca el click
    
 
    
    return(
  <div>

    <Formulario valor={valor}onClick={handleClick} onChange={handleChange}/>

   
  
   {tareasItems.length==0 ? <Subtitulo contenido='no hay tareas disponibles en su lista'/>:''}

   
    <UnorderList tareas={tareasItems} />

  

  </div>
    );
}
export default ListyForm;