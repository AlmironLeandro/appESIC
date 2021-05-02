import NavDeUsuarios from '../HeaderUsuario'
import {useState} from 'react'
import { Dropdown, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const InicioTutor = () =>
{
    const [state, setstate] = useState(false)

    const tablaEstilo =
    {
        
        width:'50%'
        
    }

    return(
        <div >
            {/* HEADER-->  */}
            <NavDeUsuarios>  
            </NavDeUsuarios>

            <div className="menuOpciones">
                    <Dropdown>
                                <Dropdown.Toggle style={ {}} id="menu">
                                    Boton
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {/* TODO: COMPLETAR LA PANTALLA DE PERFIL... */}
                                    
                                    <Dropdown.Item href="#/action-1">
                                        <Link 
                                    style={{ textDecoration: 'none' }} to={"/"}>Ver perfil</Link>
                                    </Dropdown.Item>
        
                                    <Dropdown.Item href="#/action-1">
                                        <Link 
                                    style={{ textDecoration: 'none' }} to={"/"}>Editar perfil</Link>
                                    </Dropdown.Item>
        
                                    <Dropdown.Item href="#/action-1">
                                        <Link 
                                    style={{ textDecoration: 'none' }} to={"/"}>Crear proyecto</Link>
                                    </Dropdown.Item>
        
                                    <Dropdown.Item href="#/action-1">
                                        <Link 
                                    style={{ textDecoration: 'none' }} to={"/"}>Editar proyecto</Link>
                                    </Dropdown.Item>
        
                                    <Dropdown.Item href="#/action-1">
                                        <Link 
                                    style={{ textDecoration: 'none' }} to={"/CargarEstudiante"}>Cargar estudiante</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </div>
                    <div style={{ display:'flex',justifyContent:'center'}}>
                    <Table style={tablaEstilo} striped bordered hover size="sm">
                        <thead >
                            <tr >
                                <th>Id</th>
                                <th>Nombre de proyecto</th>
                                <th>Seleccionar</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Proyecto ESIC</td>
                                    <input type="checkbox"></input>
                                </tr> 
                                <tr>
                                    <td>2</td>
                                    <td>Proyecto ISS</td>
                                </tr>  
                            </tbody>
                        </Table>
                    </div>
        
        </div>
        )

}



export default InicioTutor;