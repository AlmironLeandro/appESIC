import { Fragment } from 'react'
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Spinner } from 'react-bootstrap'




const TablaEstudiantes = ({ estudiantes, traerUsuario, eliminaUsuario, carreras }) => {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();


    return (

        <TableContainer component={Paper}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {estudiantes[0] === undefined ?
                    <Fragment>
                        <strong>Cargando</strong>
                        <Spinner style={{ width: '60px', height: '60px' }} animation="border" />
                    </Fragment>
                    : ''}
            </div>
            {estudiantes === undefined || estudiantes.length === 0 ? '' :

                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Apellido</TableCell>
                            <TableCell >Nombre</TableCell>
                            <TableCell >DNI</TableCell>
                            <TableCell >Mail</TableCell>
                            <TableCell>Carrera</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {estudiantes.map((estudiante, i) => (
                            <TableRow >
                                <TableCell >{estudiante.apellido} </TableCell>
                                <TableCell > {estudiante.nombre}</TableCell>
                                <TableCell >{estudiante.dni}</TableCell>
                                <TableCell>{estudiante.email}</TableCell>
                                <TableCell>{carreras[i]}</TableCell>
                                <TableCell>

                                    <BsPencil
                                        onClick={() => traerUsuario(estudiante.id)}
                                    />
                                    <BsFillTrashFill
                                        onClick={() => eliminaUsuario(estudiante.id)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))};
                    </TableBody>
                </Table>
            }


        </TableContainer>

    );
}

export default TablaEstudiantes

