import React, {useState, Fragment} from 'react' 
import { BsFillTrashFill } from "react-icons/bs";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EliminarTutor from './EliminarTutor';
import {buscarUsuario} from '../../Servicios/UsuariosServicio'


const TablaTutor = ({ tutores, setCallback}) => {
  
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();
    const [eliminarTutor, setEliminarTutor] = useState(null)

    const eliminarUsuario = async (id) => {
        
            const res = await buscarUsuario(id) 
            setEliminarTutor(res)
            console.log(res)
            setCallback(true)
    }
       

    return (

        <Fragment>
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

                                    <BsFillTrashFill  onClick={()=> eliminarUsuario(tutor.id)}/>
                                </TableCell>
                            </TableRow>
                        ))};
                    </TableBody>
                </Table>
            }


        </TableContainer>
        {eliminarTutor === null || eliminarTutor===undefined? '':
        <EliminarTutor
        eliminarTutor={eliminarTutor}
        setEliminarTutor={setEliminarTutor}
        setCallback = {setCallback}
        />  
        
        }
        </Fragment>

    );
}

export default TablaTutor