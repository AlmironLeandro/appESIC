import HeaderUsuario from '../HeaderUsuario'
import {Form, Row, Button} from 'react-bootstrap'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

//Como usar Radium ---> etiqueta <StyleRoot> <ETIQUETA DONDE ESTA APLICADO EL STYLE> </StyleRoot>
//import Radium from 'radium';  import { StyleRoot } from 'radium';
// @media (max-width: 600px)' 


const CargarEstudiantes = ()=>
{
    const  styles ={
        estiloForm: {
                background:'white',
                border: '3px solid green',
                background: '#fdfdfdf5',
                boxShadow:' 0px 2px 10px rgb(136, 136, 136)',
                width: '500px',
                height: '380px',
                margin:'auto',
                border: '1px solid rgb(119, 184, 184)',
                boxSizing: 'border-box',
                borderRadius: '20px',
                margin:'auto',
        },
        styleFormGroup:{
            margin:'1% auto'
        },

        styleButtom:{
            margin:'1%',
            width:'100px',
            background:'#00a0d0',
            color:'white'
        },

        styleContentButton:{
            display:'flex',
            justifyContent:'center',
        }

    };
    return(
        <Fragment>
        <HeaderUsuario/>
        
    <div style={ styles.estiloForm }>
        
    <Form >
        <Form.Group style={styles.styleFormGroup} as={Row} >
            <Form.Label  column sm="3">
            Nombre/s:
            </Form.Label>
                <Row >
                    <Form.Control placeholder="Nombre/s" />
                </Row>
        </Form.Group>

        <Form.Group style={styles.styleFormGroup} as={Row} >
            <Form.Label column sm="3">
            Apellido:
            </Form.Label>
            <Row >
                <Form.Control  placeholder="Apellido" />
            </Row>
        </Form.Group>

        <Form.Group style={styles.styleFormGroup} as={Row} >
            <Form.Label column sm="3">
            Dni:
            </Form.Label>
            <Row >
                <Form.Control  placeholder="Dni" />
            </Row>
        </Form.Group>

        <Form.Group style={styles.styleFormGroup} as={Row} >
            <Form.Label column sm="3">
            Mail:
            </Form.Label>
            <Row>
                <Form.Control  placeholder="Mail" />
            </Row>
        </Form.Group>
    </Form>
    <div style={styles.styleContentButton} >
        <Button style={styles.styleButtom}  type="submit"  > 
             <Link  style={{ textDecoration: 'none', color:'white' }} to={"/InicioTutor"}>Volver</Link>
        </Button>
        <Button  style={styles.styleButtom}type="submit"  > 
            Guardar
        </Button>
    </div>
    
        </div>
        
    </Fragment>
    )
}

export default CargarEstudiantes;