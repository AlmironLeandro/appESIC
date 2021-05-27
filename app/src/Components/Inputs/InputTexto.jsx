import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'

const InputTexto=  (nombre, {onChange})=> {
    
    return (
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">{nombre}:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
            type="text" 
            placeholder="nombre"
            name="{nombre}" 
            onChange={onChange}
            value={nombre}
        />
    </InputGroup>                 
    )
}

export default InputTexto
