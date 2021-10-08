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
import { ultimoEntregable, insertarDevolucion } from '../../../Servicios/Entregables'
import { useEffect, useState } from 'react';
import pasarAPdf from '../../../function/pasarAPdf'
import { pasarFecha } from '../../../function/pasarFecha';
import DescriptionIcon from '@material-ui/icons/Description';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Checkbox } from '@material-ui/core';
import { Button } from 'react-bootstrap'


const TablaDeHitos = (props) => {

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
  const [relevamiento, setRelevamiento] = useState()
  const [mejora, setMejora] = useState()
  const [evaluacion, setEvaluacion] = useState()
  const [trabajoFinal, setTrabajoFinal] = useState()

  const handleChange0 = (e) => {
    setRelevamiento(e.target.value)
  };
  const handleChange1 = (e) => {
    setMejora(e.target.value)
  };

  const handleChange2 = (e) => {
    setEvaluacion(e.target.value)
  };
  const handleChange3 = (e) => {
    setTrabajoFinal(e.target.value)
  };
  const enviarComentario = async (id, nombre) => {
    console.log(id)
    await insertarDevolucion(id, nombre)
  }

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

              {hitosDeProyecto.map((hito, i) => (

                <TableRow key={i}>
                  <TableCell >
                    {hito.tipoHito.nombre}
                  </TableCell>
                  <TableCell >{hito.descripcion} </TableCell>
                  <TableCell >{pasarFecha(hito.fechaEntrega)}</TableCell>
                  {documento[i] === null || documento[i] === undefined ? '' :
                    <TableCell style={{ display: 'flex', alignItems: 'center' }}>
                      {i === 0 ?
                        <Fragment>
                          <TextareaAutosize
                            type="text"
                            defaultValue={documento[i].devolucion}
                            name="relevamiento"
                            value={relevamiento}
                            onChange={handleChange0}

                          >

                          </TextareaAutosize>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => enviarComentario(documento[i].id, relevamiento)}
                          >
                            Enviar
                          </Button>
                        </Fragment> :
                        i === 1 ?
                          <Fragment>
                            <TextareaAutosize
                              type="text"
                              defaultValue={documento[i].devolucion}
                              name="mejora"
                              value={mejora}
                              onChange={handleChange1}

                            >

                            </TextareaAutosize>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => enviarComentario(documento[i].id, mejora)}
                            >
                              Enviar
                            </Button>
                          </Fragment> :
                          i === 2 ? 
                      <Fragment>
                        <TextareaAutosize
                          type="text"
                          defaultValue={documento[i].devolucion}
                          name="evaluacion"
                          value={evaluacion}
                          onChange={handleChange2}

                        >

                        </TextareaAutosize>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => enviarComentario(documento[i].id, evaluacion)}
                        >
                          Enviar
                        </Button>
                      </Fragment> :

                      <Fragment>
                        <TextareaAutosize
                          type="text"
                          defaultValue={documento[i].devolucion}
                          name="trabajoFinal"
                          value={trabajoFinal}
                          onChange={handleChange3}

                        >

                        </TextareaAutosize>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => enviarComentario(documento[i].id, trabajoFinal)}
                        >
                          Enviar
                        </Button>
                      </Fragment>
                      }


                    </TableCell>
                  }
                  <TableCell >
                    {/* */}
                    {documento[i] === null || documento[i] === undefined ? '' :
                      <DescriptionIcon onClick={() => pasarAPdf(documento[i].documento)} />}


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
