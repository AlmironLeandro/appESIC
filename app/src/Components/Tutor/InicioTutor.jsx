import NavDeUsuarios from '../HeaderUsuario'
// import {useState} from 'react'
import {  Table,Breadcrumb} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const InicioTutor = () =>
{
    // const [state, setstate] = useState(false)

    const tablaEstilo =
    {
        
        width:'50%'
        
    }

    const styleItem =
    {
        margin:'1%',
        marginLeft:'7%',
        textDecoration:'none'
        
    }

    return(
        <div >
            {/* HEADER-->  */}
            <NavDeUsuarios>  
            </NavDeUsuarios>
            <Breadcrumb  style={{marginTop:'1%'}}>
                <Breadcrumb.Item active='false' style={styleItem}>
                    <Link style={{ textDecoration: 'none' }} to={"/"}>Ver perfil</Link>
                </Breadcrumb.Item>
            
                <Breadcrumb.Item active='false' style={styleItem}>
                    <Link  style={{ textDecoration: 'none' }} to={"/"}>Editar perfil</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item active='false' style={styleItem}>
                    <Link  style={{ textDecoration: 'none' }}  to={"/NuevoProyecto"}>Crear proyecto</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item active='false' style={styleItem}>
                    <Link  style={{ textDecoration: 'none' }} to={"/"}>Editar proyecto</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item active='false' style={styleItem}>
                    <Link  style={{ textDecoration: 'none' }} to={"/CargarEstudiante"}>Cargar estudiante</Link>
                </Breadcrumb.Item>
                
                </Breadcrumb>
            {/* <div className="menuOpciones">
                    <Dropdown>
                                <Dropdown.Toggle style={ {}} id="menu">
                                    Boton
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                
                                    
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
                                    style={{ textDecoration: 'none' }} to={"/NuevoProyecto"}>Crear proyecto</Link>
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
                     */}
                    <div style={{ display:'flex',justifyContent:'center'}}>
                    <Table style={tablaEstilo} striped bordered hover size="sm">
                        <thead >
                            <tr >
                                <th>Id</th>
                                <th>Nombre de proyecto</th>
                                <th></th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Proyecto ESIC</td>
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