import {Col,Button,Modal} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import { Fragment } from 'react'
import uuid from 'uuid/dist/v4';
import {formulario} from '../../function/enviar_formulario'
import {style} from '../../styles/style_Form_proyect'
import {traerCarreras}  from '../../Servicios/carrera'
// import {traerAlumnos} from '../../services/alumnos'
import HeaderUsuario from '../HeaderUsuario'
import AlumnoAgregado from './AlumnoAgregado';
import alumnosJSON from '../../MOCK_DATA.json';
import VolverMenuTutor from '../Tutor/VolverMenuTutor';



const FormularioProyecto = () =>
{
    //Setea la carrera actual, la cual se desea filtrar.
    const [carrera, setCarrera]=useState() 

    //Obtiene el valor de la carrera, para luego setearlaen carrera
    const cambiaCarrera= e=> {e.preventDefault(); setCarrera(e.target.value)}


    const [alumnoPorAgregar, setAlumnoPorAgregar]=useState()

    const elegirAlumno = e=> {e.preventDefault(); setAlumnoPorAgregar(e.target.value); console.log(alumnoPorAgregar)}



    //Lista de alumnos que aparece en el dropdown
    const [lista, setLista]=useState([])

    //Filtro de lo que voy escribiendo en el input search "buscar alumno"
    const buscarAlumno = ()=> {

      return  alumnosJSON.filter((alumno)=>
        {
        if(inputAlumno ==='' || inputAlumno == null){return alumno }
        else if (alumno.first_name.toLowerCase().includes(inputAlumno.toLowerCase()))
        {
        return inputAlumno
        }
    })

}
    useEffect(() => {
        buscarAlumno();
        setLista(buscarAlumno().filter((alum)=> alum.materia == carrera));
    }, [carrera])
   
    //Consumiendo servicio carrera
    const [carreras, setCarreras]=useState([])
    useEffect(() => {
        traerCarreras().then(res => setCarreras(res) )
    }, [])
 

    //Proyectos en el localstorage

    let todosLosProyectos = JSON.parse(localStorage.getItem("proyectos")); 
    if (!todosLosProyectos) {
        todosLosProyectos = [];}
       
    //ARRAY DE PROYECTOS
    let [proyectos, guardarProyectos] = useState(todosLosProyectos);

    useEffect ( () => {
        if (todosLosProyectos) {
            localStorage.setItem('proyectos', JSON.stringify(proyectos))
        }else{
            localStorage.setItem('proyectos', JSON.stringify([]));
        }
        }, [proyectos]);

const [inputAlumno, setInputAlumno]=useState() 

const [idATraer,setIdATraer]=useState({})

const [listaDeAlumnosAgregadoAlProyecto, setListaAlmAgregados]=useState([{}])

const [estudiante, setEstudiante]=useState({
    nombre:'',
    apellido:'',
    dni:''
})

const handleChangeAlumno = e => {
    e.preventDefault();
    setInputAlumno(e.target.value)
}

const onClickAlumno = e => {
    e.preventDefault();
    setListaAlmAgregados([...listaDeAlumnosAgregadoAlProyecto, estudiante]);
    setInputAlumno('');
    
}

const [proyecto, actualizarProyecto]=useState({
nombre:'',
detalle:'',
alumno:[]
})
const [error, actualizarError] = useState (false);

const {nombre,detalle,alumno} = proyecto;

const handleChange = e => {
actualizarProyecto( proyecto =>
    ({ ...proyecto,
        [e.target.name] : e.target.value}));
    
}

// const actualizarTodo= ()=> {
//     actualizarProyecto({...proyecto, alumno:alumnos })   } 



const submitProyecto = e => {
    e.preventDefault();
        formulario(nombre,detalle,actualizarError,crearProyecto,actualizarProyecto,proyecto,uuid);
}

const crearProyecto = (proyecto) => {
guardarProyectos([...proyectos, proyecto]);

}



return(
    <Fragment>
    <HeaderUsuario></HeaderUsuario>    
    <Modal.Header >
        <Modal.Title style={{fontSize:'25px'}}>Datos del proyecto nuevo</Modal.Title>
    </Modal.Header>
   
    <div style={style.contenedor}>
        <div style={style.contenido}>
        { error ? <p style={{color:'red',textAlign:'center',fontSize:'15px'}}> Tenés que completar todos los campos </p> : null }
            <Col > 
                <form onSubmit={submitProyecto}>
                    
                        <div style={{marginBottom:'3%'}}>
                            <p style={style.nombre}>Nombre:</p>
                            <input style={style.nombreInput} type='text' placeholder=" Asignar nombre" 
                            value={nombre} name="nombre" onChange={handleChange}/>   
                        </div>
                
                        <div style={{marginBottom:'3%'}}>
                            <p style={style.detalleProyec}>Detalle del proyecto</p>
                            <textarea style={{width:'100%',marginBottom:'3%',resize:'none'}} id="" resize="none" 
                            placeholder="Detalles.." value={detalle} name="detalle" onChange={handleChange}/>
                        </div>
                   
                        <div style={{marginBottom:'3%'}}>
                            <p style={style.detalleProyec}>Asignar alumnos a proyecto</p>
                        </div>
                        
                        <div style={style.divSearch}>

                            <input style={style.inputSearch} value={inputAlumno}  type="search" list="lista_alumnos" 
                                id="listaAlumnos" name="lista_alumnos" placeholder="Buscar alumno" onChange={handleChangeAlumno}/>
                            <Button style={style.botonAgregar} onClick={onClickAlumno}>Agregar</Button>


                            
                            <datalist id="lista_alumnos"  >

                           <select name="opcionesAlumno" id="alumnoAgregado" value={alumnoPorAgregar} onChange={elegirAlumno}>

                            {lista.map((alumno)=> 
                            <option key={alumno.id} > 
                             {alumno.first_name} , {alumno.dni}</option  >) }
                      
                             </select>
                    
                   
                            
                           </datalist> 
                            </div>
                        <div >
                            
                            <select name="carreras" id="carreras" value={carrera} onChange={cambiaCarrera}  >
                                <option value="">¿Que carrera?</option>
                                {carreras.map((carrera)=> <option key={carrera.id}value={carrera.nombre}>{carrera.nombre}</option> )}
                            </select>


                        </div>
                        <div style={{display:'flex',justifyContent:'center',margin:'3%'}}>
                            <Button  type="sumbit" style={{background:'#6c757d',border:'none'}}>Guardar</Button>
                        </div>
                    </form>
            </Col>  
    </div>   
    <AlumnoAgregado></AlumnoAgregado>                        
</div>
<VolverMenuTutor></VolverMenuTutor>

</Fragment>
)

}

export default FormularioProyecto;



