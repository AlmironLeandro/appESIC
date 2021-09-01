//Imports de react
import {Col,Button} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import { Fragment } from 'react'

//Estilos que voy a utilizar
import {style} from '../../../styles/style_Form_proyect';
import AgregarAlumno from './AgregarAlumno'
import Selector from './Selector';
import CabezaTitulo from './CabezeraTitulo'

//Funciones
import {formulario} from '../../../function/enviar_formulario';
import {buscarAlumno} from '../../../function/funcionesAlumno'

//Servicios
import {traerMaterias}  from '../../../Servicios/Materia';
import {traerCarreras}  from '../../../Servicios/Carrera';
import {traerUsuarios as traerAlumnos}  from '../../../Servicios/UsuariosServicio';
import NombreDetalleBuscar from './NombreDetalleBuscar';


const FormularioProyecto = () =>
{
    // Aca comienza todo sobre carrera/s
    const [carrera, setCarrera]=useState([]) 
    const cambiarCarrera= e=> {e.preventDefault(); setCarrera(e.target.value); console.log(e.target.value)}
    const [carreras, setCarreras]=useState([]) 
   

    // Aca comienza todo sobre materia/s
    const [materia, setMateria]=useState() 
    const cambiarMateria= e=> {e.preventDefault(); setMateria(e.target.value); console.log(e.target.value)}
    const [materias, setMaterias]=useState([])  


    //Lista de alumnos agregado con el boton
    const [listaAlumnoAgregado, setAlumnoAgregado]=useState([])
    //Lista nueva de alumnos por carrera seleccionada
    const [listaPorCarrera, setListaPorCarrera]=useState([]) 
    //Lista de get a la base de datos ---> Alumnos
    const [getAlumnos, setAlumnos]=useState([])
    useEffect(() => {
        traerAlumnos().then(res => setAlumnos(res))
    }, [])
    //Input alumno y su cambiador
    const [inputAlumno, setInputAlumno]=useState() 
    const handleChangeAlumno = e => {
        e.preventDefault();
        setInputAlumno(e.target.value)
    }
    //Actualiza el buscador por carrera.
    useEffect(() => {
        traerCarreras().then(res => setCarreras(res) )
        setListaPorCarrera(buscarAlumno(getAlumnos, inputAlumno).filter((alum)=> parseInt(alum.idCarrera) ===  parseInt(carrera)));
    }, [carrera])

    useEffect(() => {
        traerMaterias().then(res => 
        setMaterias(res.filter(  mat => parseInt(mat.idCarrera) === parseInt(carrera ))) )
    }, [carrera])
   
    const [proyecto, actualizarProyecto]=useState({
    nombre:'',
    detalle:''
    })

    const handleChange = e => {
        actualizarProyecto( proyecto =>
            ({ ...proyecto,
                [e.target.name] : e.target.value}));   
        }
        
const [error, actualizarError] = useState (false);

const submitProyecto =  e => {
        e.preventDefault();
            formulario(proyecto,actualizarError,actualizarProyecto,listaAlumnoAgregado,setAlumnoAgregado,materia);
}

return(
    <Fragment>
         
   <CabezaTitulo texto={"Datos del proyecto nuevo"}/>
  
    <div style={style.contenedor}>
        <div style={style.contenido}>
        { error ? <p style={{color:'red',textAlign:'center',fontSize:'15px'}}> Tenés que completar todos los campos </p> : null }
            <Col > 
                <form onSubmit={submitProyecto}>  
                    <NombreDetalleBuscar
                    proyecto={proyecto} handleChange={handleChange} handleChangeAlumno={handleChangeAlumno} setInputAlumno={setInputAlumno}  lista={listaPorCarrera}
                    inputAlumno={inputAlumno}  alumnoPorAgregar={listaAlumnoAgregado} setAlumnoPorAgregar={setAlumnoAgregado}/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div ><Selector name={"carreras"} values={carreras} value={carrera} onclick={cambiarCarrera} /></div>
                        <div ><Selector name={"materias"} values={materias} value={materia} onclick={cambiarMateria}  /></div>
                        
                        
                    </div>
                        <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:'10vh'}}>
                            <Button  type="sumbit" style={{background:'#6c757d',border:'none'}}>Guardar</Button>
                        </div>
                    </form>    
            </Col>  
        </div>   
                <div style={{width:'67%', margin:'1%'}}>
                    <div style={{display:'flex',justifyContent:'start', flexWrap: 'wrap', itemAlign:'center'}}>
                        {listaAlumnoAgregado.length === 0  ?   '' : listaAlumnoAgregado.map((estudiante)=> 
                        < AgregarAlumno     estudiante={estudiante} lista={listaAlumnoAgregado} setAlumnoPorAgregar={setAlumnoAgregado}  />  ) }    
                    </div>
                </div> 
    </div>

</Fragment>)}

export default FormularioProyecto;