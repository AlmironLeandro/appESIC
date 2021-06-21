const Selector = (props)=> 
{ 
    return(
        <div >                      
            <select name={props.name} id={props.name} value={props.value} onChange={props.onclick}  >
                <option >¿Que {props.name}?</option>
                {props.values.map((value)=> <option key={value.id} value={value.id}> {value.nombre} </option> )}
            </select>
        </div>

    )
    
}

export default Selector;