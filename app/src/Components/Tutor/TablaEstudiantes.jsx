
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const TablaEstudiantes = ({ estudiantes, traerUsuario, eliminaUsuario }) => {
  
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();
       

    return (

        <TableContainer component={Paper}>
            {estudiantes === undefined || estudiantes.length === 0 ? '' :
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Nombre</TableCell>
                            <TableCell >Apellido</TableCell>
                            <TableCell >DNI</TableCell>
                            <TableCell >mail</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {estudiantes.map(estudiante => (
                            <TableRow >
                                <TableCell >{estudiante.nombre} </TableCell>
                                <TableCell > {estudiante.apellido}</TableCell>
                                <TableCell >{estudiante.dni}</TableCell>
                                <TableCell>{estudiante.email}</TableCell>
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

