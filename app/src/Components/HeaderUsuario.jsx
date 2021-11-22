import { Dropdown } from 'react-bootstrap'
import Logo from '../Images/imgg.png'
import { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { logout } from '../function/pantallaLogin'
import { buscarUsuario } from '../Servicios/UsuariosServicio'
import EditarPerfil from './EditarPerfil'


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
    const [estudiante, setEstudiante] = useState()
    const [cargaEstudiante, setCargaEstudiante] = useState(false)


    useEffect(() => {
        const traerUsuario = async () => {
            const res = await buscarUsuario(localStorage.getItem("id"))

            setEstudiante(res)
        }
        traerUsuario()
    }, [cargaEstudiante])
    const history = useHistory();
    const redirigir = async () => {
        logout()
        history.push("/login")
    }
    const editar = () => setCargaEstudiante(true)
    const cambiarContraseña = ()=>
    {
        history.push('/CambiarContraseña')
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
                            {estudiante ? estudiante.usuario.nombre + ' ' + estudiante.usuario.apellido : ''}
                        </Dropdown.Toggle>
                        <Dropdown.Menu >

                            <Dropdown.Item onClick={editar} >
                                Editar perfil
                            </Dropdown.Item>
                            <Dropdown.Item onClick={cambiarContraseña}>
                                Cambiar contraseña
                            </Dropdown.Item>
                            <Dropdown.Item onClick={redirigir}>
                                Cerrar sesion
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div>
                        {estudiante ? <Avatar style={styles.foto}>{estudiante.usuario.nombre[0] + estudiante.usuario.apellido[0]}</Avatar> : ''}
                    </div>
                </div>
            </div>
            {cargaEstudiante ?
                <EditarPerfil
                    setCargaEstudiante={setCargaEstudiante}
                    estudiante={estudiante}
                /> :
                ''
            }

        </Fragment>

    )
}





export default NavDeUsuarios;