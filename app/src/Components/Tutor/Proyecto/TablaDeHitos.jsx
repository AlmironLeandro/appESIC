import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { traerHitosPorProyecto } from '../../../Servicios/Hito'
import { entregablesPorHito } from '../../../Servicios/Entregables'
import { useEffect, useState } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const TablaDeHitos = (props) => {
  const [hitosDeProyecto, setHitosDeProyecto] = useState([])
  const [documento, setDocumento] = useState([])


  useEffect(async () => {

    try {
      const response = await traerHitosPorProyecto(props.id)
      setHitosDeProyecto(response)
      response.map((r) =>
        entregablesPorHito(r.id).then(res => setDocumento([...documento, res]))
      )

    }
    catch (e) {
      console.error(e)
    }

  }, [])

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Nombre</TableCell>
              <TableCell >Descripción</TableCell>
              <TableCell >Fecha de entrega</TableCell>
              <TableCell >Entregado</TableCell>
              <TableCell >Pdf</TableCell>
            </TableRow>
          </TableHead>
     
          <TableBody>
         
            {hitosDeProyecto.map((hito) => (
              <TableRow >
                <TableCell >
                  {hito.tipoHito.nombre}
                </TableCell>
                <TableCell >{hito.descripcion} </TableCell>
                <TableCell >{`${new Date(hito.fechaEntrega).getDate()} / ${new Date(hito.fechaEntrega).getDay()} / ${new Date(hito.fechaEntrega).getFullYear()}`
                }</TableCell>
                <TableCell>
                
                </TableCell>
                <TableCell >
                  <PictureAsPdfIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}



export default TablaDeHitos;
