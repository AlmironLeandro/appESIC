import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { InputGroup } from 'react-bootstrap'
import { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Button  from '@material-ui/core/Button';
 import { Button as boton} from 'react-bootstrap'
import HeaderUsuario from '../HeaderUsuario'

//Servicios
import { traerCarreras } from '../../Servicios/Carrera'
import { traerProyectosPorCarrera } from '../../Servicios/ProyectoServicio'


const FiltroDeProyecto = () => {
    const [carreras, setCarreras] = useState([])
    const [carrera, setCarrera] = useState()
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
            setProyectos(res.proyectosResponse)
        }

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
            <boton style={{ background: '#ffffff', display:'flex', justifyContent:"flex-end" }} >
                <Link
                    style={{ textDecoration: 'none', borderColor:"blue" }} to={"/Usuario/3"}>Volver
                </Link>
            </boton>

            <TableContainer component={Paper}>
                {proyectos === undefined || proyectos.length === 0 ? '' :
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Nombre</TableCell>
                                <TableCell >Descripcion</TableCell>
                                <TableCell > </TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {proyectos.map(proyecto =>
                            (
                                <TableRow >
                                    <TableCell >{proyecto.nombre} </TableCell>
                                    <TableCell >{proyecto.descripcion} </TableCell>
                                    <TableCell >
                                        <Button variant="contained">+ Info</Button>
                                    </TableCell>
                                </TableRow>
                            ))}


                        </TableBody>
                    </Table>

                }

            </TableContainer>

        </Fragment>

    )
}


export default FiltroDeProyecto