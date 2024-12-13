function Etiqueta({children,clase}){
    return(
        <label className={clase}>
            {children}
        </label>
    )
}
export default Etiqueta;