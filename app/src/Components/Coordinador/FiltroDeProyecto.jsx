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

    const [carrera, setCarrera] = useState()

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
            setProyectosConHitos(respuesta)


        }

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
                        style={{ color: '#4bc257' }} /></Col>
                <Col style={{ textAlign: 'center' }}>
                    Hito en progreso
                    <LensIcon
                        style={{ color: '#efef69' }} /> </Col>
                <Col style={{ textAlign: 'left' }}>
                    Hito no creado
                    <LensIcon
                        style={{ color: '#ea6565' }} /> </Col>
            </Row>
            <hr></hr>
            <TableContainer component={Paper}>

                {proyectosConHitos === undefined || proyectosConHitos.length === 0 ? '' :
                    <Table className={classes.table} aria-label="simple table">
                        {console.log(proyectosConHitos)}
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

                                    <TableCell style={{ textAlign: 'center' }}> {proyecto.hitos[0] === undefined ? <LensIcon style={{ color: '#ea6565' }} /> :
                                        proyecto.hitos[0].entregado === null ?
                                            <LensIcon style={{ color: '#efef69' }} /> :
                                            <LensIcon style={{ color: '#4bc257' }} />
                                    }
                                    </TableCell>
                                    <TableCell style={{ textAlign: 'center' }} > {proyecto.hitos[1] === undefined ? <LensIcon style={{ color: '#ea6565' }} /> :
                                        proyecto.hitos[1].entregado === null ?
                                            <LensIcon
                                                style={{ color: '#efef69' }} /> :

                                            <LensIcon
                                                style={{ color: "#4bc257" }} />

                                    }

                                    </TableCell>
                                    <TableCell style={{ textAlign: 'center' }}> {proyecto.hitos[2] === undefined ? <LensIcon style={{ color: '#ea6565' }} /> :
                                        proyecto.hitos[2].entregado === null ?
                                            <LensIcon
                                                style={{ color: '#efef69' }} /> :

                                            <LensIcon
                                                style={{ color: "#4bc257" }} />

                                    }</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}> {proyecto.hitos[3] === undefined ? <LensIcon style={{ color: '#ea6565' }} /> :
                                        proyecto.hitos[3].entregado === null ?
                                            <LensIcon
                                                style={{ color: '#efef69' }} /> :

                                            <LensIcon />

                                    } </TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>
                                        {proyecto.hitos[4] === undefined ?
                                            <LensIcon style={{ color: '#ea6565' }} /> :
                                            proyecto.hitos[4].entregado === null ?
                                                <LensIcon
                                                    style={{ color: '#efef69' }} />

                                                :

                                                <LensIcon
                                                    style={{ color: " #4bc257" }} />

                                        }</TableCell>
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