import {Col,Button,Modal} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import { Fragment } from 'react'
import uuid from 'uuid/dist/v4';
import {formulario} from '../../../function/enviar_formulario';
import {style} from '../../../styles/style_Form_proyect';
import {traerCarreras}  from '../../../Servicios/Carrera';
import HeaderUsuario from '../../HeaderUsuario';
import VolverMenuTutor from '../VolverMenuTutor';
import {buscarAlumno} from '../../../function/buscarAlumno'
import AgregarAlumno from './AlumnoAgregado'
import {traerUsuarios as traerAlumnos}  from '../../../Servicios/UsuariosServicio';

const FormularioProyecto = () =>
{
    const [lista, setLista]=useState([]) 

    const [alumnosJSON, setAlumnosJSON]=useState([])

    useEffect(() => {
        traerAlumnos().then(res => setAlumnosJSON(res))
    }, [])
    
    //Setea la carrera actual, la cual se desea filtrar.
    const [carrera, setCarrera]=useState() 

    //Obtiene el valor de la carrera, para luego setearlaen carrera
    const cambiaCarrera= e=> {e.preventDefault(); setCarrera(e.target.value); console.log(e.target.value)}

    const [alumnoPorAgregar, setAlumnoPorAgregar]=useState([])

    const compararInputAlumConLista = (list,alum)=> { const alumSplit = alum.split(" ");  list.map((estudiante)=> 
    {if (estudiante.nombre == alumSplit[0] && estudiante.dni == alumSplit[1]){
            setAlumnoPorAgregar([...alumnoPorAgregar, estudiante])   
    }}
    )}

    const [inputAlumno, setInputAlumno]=useState() 

    const onClickAlumno = e => {
        e.preventDefault();
        compararInputAlumConLista(lista, inputAlumno);
        setInputAlumno('');
        
    }
    
    useEffect(() => {
        setLista(buscarAlumno(alumnosJSON, inputAlumno).filter((alum)=> alum.idCarrera == carrera));
       
    }, [carrera])
   
    //Consumiendo servicio carrera
    const [carreras, setCarreras]=useState([])
    
    useEffect(() => {
        traerCarreras().then(res => setCarreras(res) )
    }, [])
 

       
    //ARRAY DE PROYECTOS
    const [proyectos, guardarProyectos] = useState({});

    // useEffect ( () => {
    //     if (todosLosProyectos) {
    //         localStorage.setItem('proyectos', JSON.stringify(proyectos))
    //     }else{
    //         localStorage.setItem('proyectos', JSON.stringify([]));
    //     }
    //     }, [proyectos]);


const handleChangeAlumno = e => {
    e.preventDefault();
    setInputAlumno(e.target.value)
}



const [proyecto, actualizarProyecto]=useState({
nombre:'',
detalle:'',
alumno:[]
})
const [error, actualizarError] = useState (false);



const handleChange = e => {
actualizarProyecto( proyecto =>
    ({ ...proyecto,
        [e.target.name] : e.target.value}));
        console.log(proyecto.detalle,proyecto.nombre)
    
}

 const actualizarTodo= ()=> {
    actualizarProyecto({...proyecto, alumno:alumnoPorAgregar }) }

const idTutor = 3
const idMateria= 2

const submitProyecto = e => {
    e.preventDefault();
    actualizarTodo()
        formulario(proyecto.nombre,proyecto.detalle,
            actualizarError,crearProyecto,actualizarProyecto,
            proyecto,uuid, proyecto.alumno,idMateria,idTutor);
}

const crearProyecto = (proyecto) => {
guardarProyectos([...proyectos, proyecto]);

}

return(
    <Fragment>
      
    <HeaderUsuario></HeaderUsuario>    
    <Modal.Header >
        <Modal.Title style={{fontSize:'25px'}}>Datos del proyecto nuevo</Modal.Title>
        <VolverMenuTutor></VolverMenuTutor>
    </Modal.Header>
   
    
   
    <div style={style.contenedor}>
        <div style={style.contenido}>
        { error ? <p style={{color:'red',textAlign:'center',fontSize:'15px'}}> Tenés que completar todos los campos </p> : null }
            <Col > 
                <form onSubmit={submitProyecto}>
                    
                        <div style={{marginBottom:'3%'}}>
                            <p style={style.nombre}>Nombre:</p>
                            <input style={style.nombreInput} type='text' placeholder=" Asignar nombre" 
                            value={proyecto.nombre} name="nombre" onChange={handleChange}/>   
                        </div>
                
                        <div style={{marginBottom:'3%'}}>
                            <p style={style.detalleProyec}>Detalle del proyecto</p>
                            <textarea style={{width:'100%',marginBottom:'3%',resize:'none'}} id="" resize="none" 
                            placeholder="Detalles.." value={proyecto.detalle} name="detalle" onChange={handleChange}/>
                        </div>
                   
                        <div style={{marginBottom:'3%'}}>
                            <p style={style.detalleProyec}>Asignar alumnos a proyecto</p>
                        </div>
                        
                            <div style={style.divSearch}>

                                <input style={style.inputSearch} value={inputAlumno}  type="search" list="lista_alumnos" 
                                    id="listaAlumnos" name="lista_alumnos" placeholder="Buscar alumno" onChange={handleChangeAlumno}/>
                                <Button style={style.botonAgregar} onClick={onClickAlumno}>Agregar</Button>
                                    <datalist id="lista_alumnos"  >
                                        {lista.map((alumno)=> 
                                        <option key={alumno.id}  value={alumno.nombre + " " +  alumno.dni} >  </option  >) }
                                    </datalist>              
                            </div>
                        
                        <div >
                            
                            <select name="carreras" id="carreras" value={carrera} onChange={cambiaCarrera}  >
                                <option value="">¿Que carrera?</option>
                                {carreras.map((carrera)=> <option key={carrera.id} value={carrera.id}> {carrera.nombre} </option> )}
                            </select>
                        </div>
                        
                        <div style={{display:'flex',justifyContent:'center',margin:'3%'}}>
                            <Button  type="sumbit" style={{background:'#6c757d',border:'none'}}>Guardar</Button>
                        </div>
                    </form>
            </Col>  
    </div>   
                <div style={{width:'67%', margin:'1%'}}>
                    <div style={{display:'flex',justifyContent:'start', flexWrap: 'wrap', itemAlign:'center'}}>
                        {alumnoPorAgregar.length == 0  ?   '' : alumnoPorAgregar.map((estudiante)=> 
                        < AgregarAlumno     estudiante={estudiante} lista={alumnoPorAgregar} setAlumnoPorAgregar={setAlumnoPorAgregar}  />  ) }   
                        
                    </div>
                </div>
                
</div>



</Fragment>
)

}

export default FormularioProyecto;