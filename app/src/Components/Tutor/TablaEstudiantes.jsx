import React, { Fragment, useState, useEffect } from 'react'
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { editarUsuario } from '../../function/editarUsuario';
import { buscarUsuario } from '../../Servicios/UsuariosServicio';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const TablaEstudiantes = ({ estudiantes }) => {

  
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
                                        onClick={() => alert("editar")}
                                    />
                                    {console.log(estudiante.id)}
                                    <BsFillTrashFill
                                        onClick={() => alert("Está seguro de eliminar a " + (estudiante.nombre) + " " + (estudiante.apellido))}
                                    //onClick={()=>eliminarUsuario(estudiante.id)} para cuando esté implementado
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

