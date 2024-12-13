
import Boton from "../atomos/Boton";
import Input from "../atomos/Input";


function Formulario({valor,onChange,onClick}){

//hacer sin form porque form resetea el valor de mi indice
//si voy a usar un form tengo que usar un event.preventdefault()


    return(
        <div className="formulario">
            
            <Input valor={valor} onChange={onChange}/>
            <Boton clase='boton' onClick={onClick}>
                add
            </Boton>
            
        </div>
    )
}
export default Formulario;