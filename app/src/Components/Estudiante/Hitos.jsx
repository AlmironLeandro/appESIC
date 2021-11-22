import React, { useState, useEffect, Fragment } from 'react';

//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//Componentes propios
import EntregarHito from './EntregarHito';

//Servicios y funciones
import pasarAPdf from '../../function/pasarAPdf'
import { ultimoEntregable } from '../../Servicios/Entregables'
import { pasarFecha } from '../../function/pasarFecha';

//Íconos---> Material-ui/bootstrap 
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BuildIcon from '@material-ui/icons/Build';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

//Vunerabilidad, la desactivacion de enviar un nuevo documento se hizo en base a 
//hitos={hitos[0].entregado} de esta forma si esta aprobado ya este hito se cierra, pero puede editarse en el 
//browser


export default function CustomizedTimeline({ hitos }) {
  const classes = useStyles();

  const [comentarios, setComentarios] = useState([])

  useEffect(
    () => {
      const traerComentarios = async () => {
        const respuestasUltimoEntregable = await Promise.all(hitos.map(hito => ultimoEntregable(hito.id)));
        setComentarios(respuestasUltimoEntregable.map(hito => hito.data));

      }
      traerComentarios()
    }, [])


  return (
    <Timeline align="alternate" >
      {/* Hito Documento  */}

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {pasarFecha(hitos[0].fechaEntrega)}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="#9c9c9c">
            < HowToRegIcon style={{ color: 'black' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {hitos[0].tipoHito.nombre}

            </Typography>
            <Typography>Descripción: {hitos[0].descripcion}</Typography>

            <Typography >
              {/* Si el hito esta aprobado/cerrado, este no muestra para entregar el hito, solo 
              comentario */}
              {hitos[0].entregado ? <p>Estado del hito: <strong style={{ color: 'green' }}>Muy bien, aprobado.</strong></p> : <EntregarHito id={hitos[0].id} />}


              {
                comentarios[0] === null || comentarios[0] === undefined || comentarios[0].devolucion === "" ? '' : <Button onClick={() => alert(comentarios[0].devolucion)}>
                  {console.log(comentarios[0])}
                  Ver comentario
                </Button>
              }
              {
                comentarios[0] === null || comentarios[0] === undefined || comentarios[0].documento === null || comentarios[0].documento === undefined ? '' :
                  <Fragment>
                    <hr></hr>
                    <code>Ultimo entregable:</code><DescriptionIcon onClick={() => pasarAPdf(comentarios[0].documento)} />
                  </Fragment>
              }



            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>




      {/* Hito  Relevamiento */}

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {pasarFecha(hitos[1].fechaEntrega)}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="#9c9c9c">
            < HowToRegIcon style={{ color: 'black' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {hitos[1].tipoHito.nombre}

            </Typography>
            <Typography>Descripción: {hitos[1].descripcion}</Typography>

            <Typography>

              {hitos[1].entregado ? <p>Estado del hito: <strong style={{ color: 'green' }}>Muy bien, aprobado.</strong></p> : <EntregarHito id={hitos[1].id} />}

              {
                comentarios[1] === null || comentarios[1] === undefined || comentarios[1].devolucion === "" ? '' : <Button onClick={() => alert(comentarios[1].devolucion)}>
                  Ver comentario
                </Button>
              }
              {
                comentarios[1] === null || comentarios[1] === undefined || comentarios[1].documento === null || comentarios[1].documento === undefined ? '' :
                  <Fragment>
                    <hr></hr>
                    <code>Ultimo entregable:</code><DescriptionIcon onClick={() => pasarAPdf(comentarios[1].documento)} />
                  </Fragment>
              }

            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {/* Hito Mejora*/}
      {hitos[2] === undefined ? '' :

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {pasarFecha(hitos[2].fechaEntrega)}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="#9c9c9c">
              <BuildIcon style={{ color: 'black' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>

            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {hitos[2].tipoHito.nombre}


              </Typography>

              <Typography>Descripción: {hitos[2].descripcion}</Typography>
              <Typography>
                {hitos[2].entregado ? <p>Estado del hito: <strong style={{ color: 'green' }}>Muy bien, aprobado.</strong></p> : <EntregarHito id={hitos[2].id} />}
                {
                  comentarios[2] === null || comentarios[2] === undefined || comentarios[2].devolucion === "" ? '' : <Button onClick={() => alert(comentarios[2].devolucion)}>
                    Ver comentario
                  </Button>
                }
                {
                  comentarios[2] === null || comentarios[2] === undefined || comentarios[2].documento === null || comentarios[2].documento === undefined ? '' :
                    <Fragment>
                      <hr></hr>
                      <code>Ultimo entregable:</code><DescriptionIcon onClick={() => pasarAPdf(comentarios[2].documento)} />
                    </Fragment>
                }
              </Typography>
            </Paper>

          </TimelineContent>
        </TimelineItem>
      }
      {/* Hito Evaluacion */}

      {hitos[3] === undefined ? '' :
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {pasarFecha(hitos[3].fechaEntrega)}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="#9c9c9c">
              <AssignmentTurnedInIcon style={{ color: 'black' }} />
            </TimelineDot>

            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {hitos[3].tipoHito.nombre}

              </Typography>
              <Typography>Descripción: {hitos[3].descripcion}</Typography>
              <Typography>
                {hitos[3].entregado ? <p>Estado del hito: <strong style={{ color: 'green' }}>Muy bien, aprobado.</strong></p> : <EntregarHito id={hitos[3].id} />}

                {
                  comentarios[3] === null || comentarios[3] === undefined || comentarios[3].devolucion === "" ? '' : <Button onClick={() => alert(comentarios[3].devolucion)}>
                    Ver comentario
                  </Button>
                }
                {
                  comentarios[3] === null || comentarios[3] === undefined || comentarios[3].documento === null || comentarios[3].documento === undefined ? '' :
                    <Fragment>
                      <hr></hr>
                      <code>Ultimo entregable:</code><DescriptionIcon onClick={() => pasarAPdf(comentarios[3].documento)} />
                    </Fragment>
                }
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      }
      {/* Hito Entrega final */}

      {hitos[4] === undefined ? '' :
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {pasarFecha(hitos[4].fechaEntrega)}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="#9c9c9c">
              <AccountBalanceIcon style={{ color: 'black' }} />
            </TimelineDot>

          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {hitos[4].tipoHito.nombre}

              </Typography>
              <Typography>Descripción: {hitos[4].descripcion}</Typography>
              <Typography>

                {hitos[4].entregado ? <p>Estado del hito: <strong style={{ color: 'green' }}>Muy bien, aprobado.</strong></p> : <EntregarHito id={hitos[4].id} />}

                {
                  comentarios[4] === null || comentarios[4] === undefined || comentarios[4].devolucion === "" ? '' : <Button onClick={() => alert(comentarios[4].devolucion)}>
                    Ver comentario
                  </Button>
                }
                {
                  comentarios[4] === null || comentarios[4] === undefined || comentarios[4].documento === null || comentarios[4].documento === undefined ? '' :
                    <Fragment>
                      <hr></hr>
                      <code>Ultimo entregable:</code><DescriptionIcon onClick={() => pasarAPdf(comentarios[4].documento)} />
                    </Fragment>
                }
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      }
    </Timeline>
  );
}