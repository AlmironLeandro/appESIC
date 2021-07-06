import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            20/07/2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="#9c9c9c">
            < HowToRegIcon   style={{color:'black'}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Relevamiento
              
            </Typography>
            <Typography>Descripción ..........................................</Typography>
              <Typography>
                <EntregarHito>Entregar</EntregarHito>
              </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            20/06/2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="#9c9c9c">
            <BuildIcon style={{color:'black'}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>

          <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
              Mejora
              
            </Typography>
            <Typography>Descripción ..........................................</Typography>
            <Typography><EntregarHito>Entregar</EntregarHito></Typography>
          </Paper>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>

        <TimelineDot color="#9c9c9c">
            <AssignmentTurnedInIcon  style={{color:'black'}} />
          </TimelineDot>

          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
              Evaluación
              
            </Typography>
            <Typography>Descripción ..........................................</Typography>
            <Typography><EntregarHito>Entregar</EntregarHito></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>

           <TimelineDot color="#9c9c9c">
            <AccountBalanceIcon  style={{color:'black'}} />
          </TimelineDot>

        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
              Entrega final
              
            </Typography>
            <Typography>Descripción ..........................................</Typography>
            <Typography><EntregarHito>Entregar</EntregarHito></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}