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
import { entregablesPorHito, ultimoEntregable } from '../../../Servicios/Entregables'
import { useEffect, useState } from 'react';
import pasarAPdf from '../../../function/pasarAPdf'
import { pasarFecha } from '../../../function/pasarFecha';
import DescriptionIcon from '@material-ui/icons/Description';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Checkbox } from '@material-ui/core';



const TablaDeHitos = (props) => {
  // const response = await traerHitosPorProyecto(props.id)
  // setHitosDeProyecto(response)
  // response.forEach((Hito) =>
  //   ultimoEntregable(Hito.id).then(
  //     res => setDocumento((old) => [...old, res.data]))
  // )
  const [hitosDeProyecto, setHitosDeProyecto] = useState([])
  const [documento, setDocumento] = useState([])
  useEffect(() => {
    const traerHitos = async () => {
      try {
        const response = await traerHitosPorProyecto(props.id)
        setHitosDeProyecto(response)
        const respuestasUltimoEntregable = await Promise.all(response.map(hito => ultimoEntregable(hito.id)));
        setDocumento(respuestasUltimoEntregable.map(res => res.data));
        console.log(documento)
      }
      catch (e) {
        console.error(e)
      }

    }
    traerHitos()
  }, [props.callBack])

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
              <TableCell >Comentario</TableCell>
              <TableCell >Archivo</TableCell>
              <TableCell >Aprobado</TableCell>
            </TableRow>
          </TableHead>
          {documento === undefined ? '' : 
          <TableBody>
            
            {hitosDeProyecto.map((hito,i) => (

              <TableRow key={i}>
                <TableCell >
                  {hito.tipoHito.nombre}
                </TableCell>
                <TableCell >{hito.descripcion} </TableCell>
                <TableCell >{pasarFecha(hito.fechaEntrega)}</TableCell>
                <TableCell>
                <TextareaAutosize/>
                </TableCell>
                <TableCell >
                {/* */}
                {documento[i] === null || documento[i] === undefined   ? '':
                <DescriptionIcon onClick={()=>pasarAPdf(documento[i].documento)} />  }
                  

                </TableCell>
                <TableCell ><Checkbox></Checkbox></TableCell>
              </TableRow>
            ))}
            
          </TableBody>
          }
        </Table>
      </TableContainer>
    </Fragment>
  );
}



export default TablaDeHitos;
