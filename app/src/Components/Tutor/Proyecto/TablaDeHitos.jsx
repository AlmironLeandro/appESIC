//React
import React, { Fragment ,useEffect, useState } from 'react'

//Material ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DescriptionIcon from '@material-ui/icons/Description';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Checkbox } from '@material-ui/core';

//Funciones
import pasarAPdf from '../../../function/pasarAPdf'
import { pasarFecha } from '../../../function/pasarFecha';

//Bootstrap
import { Button } from 'react-bootstrap'

//Servicios
import { cerrarHito, traerHitosPorProyecto } from '../../../Servicios/Hito'
import { ultimoEntregable, insertarDevolucion } from '../../../Servicios/Entregables'

const TablaDeHitos = (props) => {

  const [hitosDeProyecto, setHitosDeProyecto] = useState([])
  const [documento, setDocumento] = useState([])
  useEffect(() => {
    const traerHitos = async () => {
      try {
        props.setCallBack(false)
        const response = await traerHitosPorProyecto(props.id)
        const nuevaListaOrdenadaPorId = [...response].sort((a, b) => (a.idTipo > b.idTipo ? 1 : a.idTipo < b.idTipo ? -1 : 0))
        setHitosDeProyecto(nuevaListaOrdenadaPorId)
        const respuestasUltimoEntregable = await Promise.all(nuevaListaOrdenadaPorId.map(hito => ultimoEntregable(hito.id)));
        setDocumento(respuestasUltimoEntregable.map(res => res.data));
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
  const [documentoInicial, setDocumentoInicial] = useState()
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
  const handleChange4 = (e) => {
    setDocumentoInicial(e.target.value)
  };
  const enviarComentario = async (id, nombre) => {
    await insertarDevolucion(id, nombre)
    props.setCallBack(true)

  }

  const classes = useStyles();

  const aprobarHito = async (id) => {
    await cerrarHito(id)
    props.setCallBack(true)
  }
  return (
    <Fragment>

      <TableContainer component={Paper}>


        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Nombre</TableCell>
              <TableCell >Descripci??n</TableCell>
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
                      {
                        i === 0 ?
                          <Fragment>
                            <TextareaAutosize
                              type="text"
                              defaultValue={documento[i].devolucion}
                              name="documentoInicial"
                              value={documentoInicial}
                              onChange={handleChange4}

                            >

                            </TextareaAutosize>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => enviarComentario(documento[i].id, documentoInicial)}
                            >
                              Enviar
                            </Button>
                          </Fragment> :

                          i === 1 ?
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
                            i === 2 ?
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
                              i === 3 ?
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
                  {documento[i] === null || documento[i] === undefined ? '' :
                    <TableCell >

                      {

                        hito.entregado ? 'Aprobado' :
                          documento[i].devolucion === '' ? '' :
                            <Checkbox onClick={() => aprobarHito(hito.id)} />
                      }

                    </TableCell>
                  }
                </TableRow>
              ))}

            </TableBody>
          }
        </Table>
      </TableContainer >
    </Fragment >
  );
}



export default TablaDeHitos;
