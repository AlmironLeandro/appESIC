import React, { useState, useEffect } from 'react';

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
import EntregarHito from './EntregarHito';

//Íconos
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BuildIcon from '@material-ui/icons/Build';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { pasarFecha } from '../../function/pasarFecha';
import { Button } from 'react-bootstrap';
import { ultimoEntregable } from '../../Servicios/Entregables'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


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
    <Timeline align="alternate">
      {/* Hito 1 */}

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

            <Typography>

              <EntregarHito id={hitos[0].id}
              />
              {
              comentarios[0] === null || comentarios[0] === undefined || comentarios[0].devolucion ===  ""   ? '': <Button onClick={() => alert(comentarios[0].devolucion)}>
                  Ver comentario
                </Button>
              }

            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {/* Hito 2 */}
      {hitos[1] === undefined ? '' :

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {pasarFecha(hitos[1].fechaEntrega)}
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
                {hitos[1].tipoHito.nombre}


              </Typography>

              <Typography>Descripción: {hitos[1].descripcion}</Typography>
              <Typography><EntregarHito id={hitos[1].id}
              >Entregar</EntregarHito>
                {
                comentarios[1] === null ||  comentarios[1] === undefined || comentarios[1].devolucion ===  ""  ? '': <Button onClick={() => alert(comentarios[1].devolucion)}>
                    Ver comentario
                  </Button>
                }
              </Typography>
            </Paper>

          </TimelineContent>
        </TimelineItem>
      }
      {/* Hito 3 */}

      {hitos[2] === undefined ? '' :
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {pasarFecha(hitos[2].fechaEntrega)}
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
                {hitos[2].tipoHito.nombre}

              </Typography>
              <Typography>Descripción: {hitos[2].descripcion}</Typography>
              <Typography><EntregarHito id={hitos[2].id}
              >Entregar</EntregarHito>
              {console.log(comentarios)}
                {
                 comentarios[2] === null || comentarios[2] === undefined || comentarios[2].devolucion === "" ? '' : <Button onClick={() => alert(comentarios[2].devolucion)}>
                    Ver comentario
                  </Button>
                }
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      }
      {/* Hito 4 */}

      {hitos[3] === undefined ? '' :
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {pasarFecha(hitos[1].fechaEntrega)}
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
                {hitos[3].tipoHito.nombre}

              </Typography>
              <Typography>Descripción: {hitos[3].descripcion}</Typography>
              <Typography>
                <EntregarHito id={hitos[3].id}
                >Entregar</EntregarHito>
                {
                 comentarios[3] === null || comentarios[3] === undefined || comentarios[3].devolucion ===  ""  ? '': <Button onClick={() => alert(comentarios[3].devolucion)}>
                    Ver comentario
                  </Button>
                }
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      }
    </Timeline>
  );
}