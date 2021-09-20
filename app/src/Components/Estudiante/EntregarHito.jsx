import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { subirDocumento } from '../../Servicios/Entregables';
import {Button} from 'react-bootstrap'
import PasarABase64 from '../PasarABase64'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons( props) {
  const classes = useStyles();
  const guardarDocumento = async()=>{
   await subirDocumento(
      props.id,
      "Entregado",
      localStorage.getItem("baseUrl")
      
      )
    // localStorage.removeItem("baseUrl")

  }
  return (
    <div className={classes.root}>
      <input
        accept=".pdf/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <PasarABase64 >
          
        </PasarABase64>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
      <Button onClick={guardarDocumento}>Guardar</Button>
      </label>
      
    </div>
  );
}