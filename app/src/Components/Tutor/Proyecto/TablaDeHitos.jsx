import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { traerHitosPorProyecto } from '../../../Servicios/Hito'
import { useEffect, useState } from 'react';

const TablaDeHitos = (props) => {

  const [hitosDeProyecto, setHitosDeProyecto] = useState([])
  useEffect(async () => {
    await traerHitosPorProyecto(props.id).then(
      res => setHitosDeProyecto(res))


  }, [])

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


  const classes = useStyles();


  return (

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Nombre</TableCell>
            <TableCell >Descripción</TableCell>
            <TableCell >Fecha de entrega</TableCell>
            <TableCell >Entregado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hitosDeProyecto.map((hito) => (
            <TableRow >
              <TableCell >
                {hito.tipoHito.nombre}
              </TableCell>
              <TableCell >{hito.descripcion} </TableCell>
              <TableCell >{hito.fechaEntrega}</TableCell>
              <TableCell>{hito.entregado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default TablaDeHitos;
