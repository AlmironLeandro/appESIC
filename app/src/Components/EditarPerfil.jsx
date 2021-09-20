import React, {useEffect, useState} from 'react'
import { buscarUsuario } from '../Servicios/UsuariosServicio'

const EditarPerfil = ()=> {
    
    const [usuario, setUsuario] =  useState(null);
    useEffect( () => {
        const user =  buscarUsuario(localStorage.getItem('id'))
        setUsuario(user)
    }, [])


    return (
        <div>
            <h1>hola</h1>
            {usuario===null ? '':
            console.log(usuario.usuario.nombre)
        }
        </div>
    )
}

export default EditarPerfil