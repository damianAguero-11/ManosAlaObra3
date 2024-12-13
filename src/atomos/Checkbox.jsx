
function Checkbox({onChange,checked}){
    

    
    
    return(
  
        <input type="checkbox" onChange={onChange} className='checkboton' checked={checked}></input>
    )
}

export default Checkbox;