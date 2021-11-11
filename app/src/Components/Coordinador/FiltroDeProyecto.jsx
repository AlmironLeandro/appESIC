import { Fragment, useEffect, useState } from "react";
import { InputGroup, Row, Col, Button as BotonBootstrap } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//Material ui
import Button from '@material-ui/core/Button';
import LensIcon from '@material-ui/icons/Lens';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//Componentes propios
import HeaderUsuario from '../HeaderUsuario'
import DetalleProyecto from './DetalleProyecto'


//Servicios
import { traerCarreras } from '../../Servicios/Carrera'
import { traerProyectosPorCarrera, buscarProyecto } from '../../Servicios/ProyectoServicio'


const FiltroDeProyecto = () => {
    const [carreras, setCarreras] = useState([])
    const [hitos, setHitos] = useState([])
    const [carrera, setCarrera] = useState()
    const [hitosOrdenados, setHitosOrdenados] = useState()


    const [detalle, setDetalle] = useState(false)

    const [proyecto, setProyecto] = useState({})

    //Proyectos completos
    const [proyectosConHitos, setProyectosConHitos] = useState([])
    //proyectos por carrera
    const [proyectos, setProyectos] = useState([])

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();

    useEffect(() => {

        const traerTutorYCarreras = async () => {
            try {
                const getCarreras = await traerCarreras()
                setCarreras(getCarreras)
            }
            catch (e) {
                console.error(e)
            }

        }
        traerTutorYCarreras()
    }, [])

    const handleChange = async (event) => {
        if (event.target.value === "default") {
            setCarrera(event.target.value)
            setProyectos()

        }
        else {
            setCarrera(event.target.value)
            const res = await traerProyectosPorCarrera(event.target.value)

            const respuesta = await Promise.all(res.proyectosResponse.map(proyecto =>
                buscarProyecto(proyecto.id)))

            respuesta.map((proyecto) =>
                console.log(ordenar(proyecto)))


            setProyectosConHitos(respuesta)
        }
    }
    const ordenar = (lista) => {

        const ordenadas = [...lista.hitos].sort((a, b) => (a.idTipo > b.idTipo ? 1 : a.idTipo < b.idTipo ? -1 : 0))
        return ordenadas

    }
    const traerProyecto = async (id) => {
        const response = await buscarProyecto(id)
        setProyecto(response)

        setDetalle(true)
    }


    const styles =
    {
        input:
        {
            display: 'flex', justifyContent: 'center', margin: '10px'
        }
    }

    return (
        <Fragment>
            <HeaderUsuario></HeaderUsuario>

            <InputGroup size="sm" className="mb-3" style={styles.input} >
                <select name="carrera" value={carrera} onChange={handleChange}>

                    <option value="default">Seleccionar carrera</option>
                    {carreras.map((carrera) =>
                        <option key={carrera.id} value={carrera.id}>   {carrera.nombre}</option>)}
                </select>
            </InputGroup>
            <div style={{ display: 'flex', justifyContent: "flex-end", marginRight: '20px' }}>
                <BotonBootstrap
                    style={{ background: '#ffffff' }} >
                    <Link
                        style={{ textDecoration: 'none' }} to={"/Usuario/3"}>
                        Volver
                    </Link>
                </BotonBootstrap>
            </div>

            <Row>

                <Col style={{ textAlign: 'right' }}>
                    Hito cerrado
                    <LensIcon
                        style={{ color: 'green' }} /></Col>
                <Col style={{ textAlign: 'center' }}>
                    Hito en progreso
                    <LensIcon
                        style={{ color: 'orange' }} /> </Col>
                <Col style={{ textAlign: 'left' }}>
                    Hito no creado
                    <LensIcon
                        style={{ color: 'red' }} /> </Col>
            </Row>
            <hr></hr>
            <TableContainer component={Paper}>

                {proyectosConHitos === undefined || proyectosConHitos.length === 0 ? '' :
                    <Table className={classes.table} aria-label="simple table">

                        <TableHead>
                            <TableRow>
                                <TableCell >Nombre</TableCell>
                                <TableCell style={{ textAlign: 'center' }} >Documento</TableCell>
                                <TableCell style={{ textAlign: 'center' }}>Relevamiento</TableCell>
                                <TableCell style={{ textAlign: 'center' }}>Mejora</TableCell>
                                <TableCell style={{ textAlign: 'center' }}>Evaluación </TableCell>
                                <TableCell style={{ textAlign: 'center' }}>Trabajo final </TableCell>
                                <TableCell style={{ textAlign: 'center' }}> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {proyectosConHitos.map(proyecto =>
                            (

                                <TableRow >
                                    <TableCell >{proyecto.proyecto.nombre} </TableCell>
                                    {/* <LensIcon style={{ color: 'green' }}/> 
                                        <LensIcon style={{ color: 'red' }} /> 
                                        <LensIcon style={{ color: 'orange' }} /> */}

                                    {/* HITO 1 */}
                                    <TableCell style={{ textAlign: 'center' }}>
                                        {ordenar(proyecto)[0] !== undefined ?
                                            (
                                                ordenar(proyecto)[0].idTipo === 1 && ordenar(proyecto)[0].entregado === true ?
                                                    <LensIcon style={{ color: 'green' }} /> :
                                                    ordenar(proyecto)[0].idTipo === 1 && ordenar(proyecto)[0].entregado === null ?
                                                        <LensIcon style={{ color: 'orange' }} /> :
                                                        <LensIcon style={{ color: 'red' }} />
                                            )
                                            :
                                            <LensIcon style={{ color: 'red' }} />
                                        }

                                    </TableCell>

                                    {/* HITO 2 */}
                                    <TableCell style={{ textAlign: 'center' }} >

                                        {ordenar(proyecto)[1] !== undefined ?
                                            (
                                                ordenar(proyecto)[1].idTipo === 2 && ordenar(proyecto)[1].entregado === true ?
                                                    <LensIcon style={{ color: 'green' }} /> :
                                                    ordenar(proyecto)[1].idTipo === 2 && ordenar(proyecto)[1].entregado === null ?
                                                        <LensIcon style={{ color: 'orange' }} /> :
                                                        <LensIcon style={{ color: 'red' }} />
                                            )
                                            :
                                            <LensIcon style={{ color: 'red' }} />
                                        }


                                    </TableCell>

                                    {/* HITO 3 */}
                                    <TableCell style={{ textAlign: 'center' }}>

                                        {ordenar(proyecto)[2] !== undefined ?
                                            (
                                                ordenar(proyecto)[2].idTipo === 3 && ordenar(proyecto)[2].entregado === true ?
                                                    <LensIcon style={{ color: 'green' }} /> :
                                                    ordenar(proyecto)[2].idTipo === 3 && ordenar(proyecto)[2].entregado === null ?
                                                        <LensIcon style={{ color: 'orange' }} /> :
                                                        <LensIcon style={{ color: 'red' }} />
                                            )
                                            :
                                            <LensIcon style={{ color: 'red' }} />
                                        }
                                    </TableCell>

                                    {/* HITO 4 */}
                                    <TableCell style={{ textAlign: 'center' }}>
                                        {ordenar(proyecto)[3] !== undefined ?
                                            (
                                                ordenar(proyecto)[3].idTipo === 4 && ordenar(proyecto)[3].entregado === true ?
                                                    <LensIcon style={{ color: 'green' }} /> :
                                                    ordenar(proyecto)[3].idTipo === 4 && ordenar(proyecto)[3].entregado === null ?
                                                        <LensIcon style={{ color: 'orange' }} /> :
                                                        <LensIcon style={{ color: 'red' }} />
                                            )
                                            :
                                            <LensIcon style={{ color: 'red' }} />
                                        }
                                    </TableCell>

                                    {/* HITO 5 */}
                                    <TableCell style={{ textAlign: 'center' }}>
                                        {ordenar(proyecto)[4] !== undefined ?
                                            (
                                                ordenar(proyecto)[4].idTipo === 5 && ordenar(proyecto)[4].entregado === true ?
                                                    <LensIcon style={{ color: 'green' }} /> :
                                                    ordenar(proyecto)[4].idTipo === 5 && ordenar(proyecto)[4].entregado === null ?
                                                        <LensIcon style={{ color: 'orange' }} /> :
                                                        <LensIcon style={{ color: 'red' }} />
                                            )
                                            :
                                            <LensIcon style={{ color: 'red' }} />
                                        }
                                    </TableCell>

                                    <TableCell style={{ textAlign: 'center' }}>
                                        <Button variant="contained" onClick={() => traerProyecto(proyecto.proyecto.id)}>+ Info</Button>
                                    </TableCell>
                                </TableRow>
                            ))}


                        </TableBody>
                    </Table>

                }

            </TableContainer>
            {detalle ?
                <DetalleProyecto
                    proyecto={proyecto}
                    setDetalle={setDetalle}
                    detalle={detalle}
                /> : ''
            }

        </Fragment>

    )
}


export default FiltroDeProyecto