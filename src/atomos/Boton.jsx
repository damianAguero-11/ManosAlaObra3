

function Boton({children,clase,onClick}){

   

    return(
     
  <button className={clase}onClick={onClick}>
    {children}
    </button>
   

    );
}
export default Boton;