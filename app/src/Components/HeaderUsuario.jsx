import { Image, Dropdown} from 'react-bootstrap'
import {useState} from 'react'
import Logo from '../Images/imgg.png'
import foto_tutor from '../Images/foto_tutor.JPG'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';


const NavDeUsuarios = () =>

 {
   
    const styleLogo =  
    {
        display:'inline-flex',
        margin:'1%',
         height:'45px',
         opacity:'0.6' }
    
    //FUNCION ASYNC QUE CONECTA CON API CON EL NOMBRE DE USUARIO.
    const nombre = "Diego Migliorino"
    
 
    
    const foto = 
    {   
        display:'inline-flex',
        width:'70px',
        height:'65px'
        
        
    }
    const estiloNombre={
        backgroundColor:'transparent',
        border:'none'
        
        
    }
         
return(
        <Fragment>
            <div className="header">
                <div style={{width:'150px'}}>
                    <img  src={Logo} style={styleLogo}></img> 
                
                    <h2 style={{display:'inline'}} > ESIC</h2> 
                </div>

                <div style={{display:'inline'}}> 
                    <Dropdown style={{display:'inline'}}>
                        <Dropdown.Toggle style={estiloNombre} id="dropdown-basic">
                          <h6 style={{display:'inline-flex'}} > {nombre}</h6> 
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {/* TODO: COMPLETAR LA PANTALLA DE PERFIL... */}    
                            <Dropdown.Item href="#/action-1">
                                <Link 
                            style={{ textDecoration: 'none'}} to={"/"}>Cerrar sesion</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Image src={foto_tutor} style={foto}  roundedCircle />  
                </div>   
            </div>
            
        </Fragment>

)
}
    
 



export default NavDeUsuarios;