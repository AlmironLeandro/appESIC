import { Dropdown } from 'react-bootstrap'
import Logo from '../Images/imgg.png'
import { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { Button } from 'bootstrap';
import { logout } from '../function/pantallaLogin'


const NavDeUsuarios = () => {

    const styleLogo =
    {
        display: 'inline-flex',
        margin: '1%',
        height: '45px',
        opacity: '0.6'
    }

    //FUNCION ASYNC QUE CONECTA CON API CON EL NOMBRE DE USUARIO.
    const nombre = "Diego Migliorino"

    const foto =
    {
        width: '70px',
        height: '65px'


    }
    const history = useHistory();
    const redirigir = async ()=>{
        await logout()
        history.push("/login") 
 }
    return (
        <Fragment>
            <div className="header">
                <div style={{ width: '150px' }}>
                    <img alt='' src={Logo} style={styleLogo}></img>
                    <h2 style={{ display: 'inline', fontSize: '25px' }} > ESIC</h2>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Dropdown  >
                        <Dropdown.Toggle bsPrefix='dropdown' as="Button" id="dropdown-basic">
                            {nombre}
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            {/* TODO: COMPLETAR LA PANTALLA DE PERFIL... */}
                            <Dropdown.Item href="#/action-1">
                                <Link style={{ textDecoration: 'none' }} to={"/InicioTutor"}>Ver perfil</Link>
                            </Dropdown.Item>

                            <Dropdown.Item href="#/action-2">
                                <Link style={{ textDecoration: 'none' }} to={"/EditarPerfil"}>Editar perfil</Link>
                            </Dropdown.Item>

                            <Dropdown.Item onClick={ redirigir}>
                                Cerrar sesion
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                    <div>
                        <Avatar style={foto}>{nombre[0] + nombre[6]}</Avatar>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}





export default NavDeUsuarios;