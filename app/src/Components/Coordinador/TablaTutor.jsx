import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const TablaTutor = ({ tutores, traerUsuario, eliminaUsuario }) => {
  
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();
       

    return (

        <TableContainer component={Paper}>
            {tutores === undefined || tutores.length === 0 ? '' :
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Apellido</TableCell>
                            <TableCell >Nombre</TableCell>
                            <TableCell >DNI</TableCell>
                            <TableCell >mail</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tutores.map(tutor => (
                            <TableRow >
                                <TableCell > {tutor.apellido}</TableCell>
                                <TableCell >{tutor.nombre} </TableCell>
                                <TableCell >{tutor.dni}</TableCell>
                                <TableCell>{tutor.email}</TableCell>
                                <TableCell>

                                    <BsPencil
                                        onClick={() => alert("hola")}
                                    />
                                    <BsFillTrashFill 
                                        onClick={() => alert("hola")}
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

export default TablaTutor