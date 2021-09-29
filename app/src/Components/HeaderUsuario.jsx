import { Dropdown } from 'react-bootstrap'
import Logo from '../Images/imgg.png'
import { Fragment, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { logout } from '../function/pantallaLogin'
import { buscarUsuario } from '../Servicios/UsuariosServicio'


const NavDeUsuarios = () => {

    const styles =
    {
        styleLogo:
        {
            display: 'inline-flex',
            margin: '1%',
            height: '45px',
            opacity: '0.6'
        },
        foto:
        {
            width: '70px',
            height: '65px'
        }
    }
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    useEffect( () => {
        const traerUsuario = async ()=>{
        const res = await buscarUsuario(localStorage.getItem("id"))
        setNombre(res.usuario.nombre)
        setApellido(res.usuario.apellido)
        }
        traerUsuario()
    }, [])
    const history = useHistory();
    const redirigir = async () => {
        await logout()
        history.push("/login")
    }
    return (
        <Fragment>
            <div className="header">
                <div style={{ width: '150px' }}>
                    <img alt='' src={Logo} style={styles.styleLogo}></img>
                    <h2 style={{ display: 'inline', fontSize: '25px' }} > ESIC</h2>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Dropdown  >
                        <Dropdown.Toggle bsPrefix='dropdown' as="Button" id="dropdown-basic">
                            {nombre && apellido ? nombre + ' ' + apellido : ''}
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            {/* TODO: COMPLETAR LA PANTALLA DE PERFIL... */}
                            <Dropdown.Item href="#/action-1">
                                <Link style={{ textDecoration: 'none' }} to={"/InicioTutor"}>Ver perfil</Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <Link style={{ textDecoration: 'none' }} to={"/EditarPerfil"}>Editar perfil</Link>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={redirigir}>
                                Cerrar sesion
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div>
                        {nombre && apellido ? <Avatar style={styles.foto}>{nombre[0] + apellido[0]}</Avatar> : ''}
                    </div>
                </div>
            </div>

        </Fragment>

    )
}





export default NavDeUsuarios;