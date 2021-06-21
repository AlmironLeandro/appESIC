import {style} from '../../../styles/style_Form_proyect';
import {Button} from 'react-bootstrap'
import {validarAlumno} from '../../../function/funcionesAlumno'

const NombreDetalleBuscar = (props)=>
{
    
    const compararInputAlumConLista = (list,alum)=> { const alumSplit = alum.split(" ");  list.map((estudiante)=> 
    {if (estudiante.nombre == alumSplit[0] && estudiante.dni == alumSplit[1] && !validarAlumno(props.alumnoPorAgregar,estudiante)){
            props.setAlumnoPorAgregar([...props.alumnoPorAgregar, estudiante])   
    }}
    )}

    const onClickAlumno = e => {
        e.preventDefault();
        compararInputAlumConLista(props.lista, props.inputAlumno);
        props.setInputAlumno('');
    }
return(
    <div>

        
            <div style={{marginBottom:'3%'}}>
                <p style={style.nombre}>Nombre:</p>
                <input style={style.nombreInput} type='text' placeholder=" Asignar nombre" 
                value={props.proyecto.nombre} name="nombre" onChange={props.handleChange}/>   
             </div>

            <div style={{marginBottom:'3%'}}>
                <p style={style.detalleProyec}>Detalle del proyecto</p>
                <textarea style={{width:'100%',marginBottom:'3%',resize:'none'}} id="" resize="none" 
                placeholder="Detalles.." value={props.proyecto.detalle} name="detalle" onChange={props.handleChange}/>
            </div>

            <div style={{marginBottom:'3%'}}>
                <p style={style.detalleProyec}>Asignar alumnos a proyecto</p>
            </div>

            <div style={style.divSearch}>
            <input style={style.inputSearch} value={props.inputAlumno}  type="search" list="lista_alumnos" 
                id="listaAlumnos" name="lista_alumnos" placeholder="Buscar alumno" onChange={props.handleChangeAlumno}/>
                <Button style={style.botonAgregar} onClick={onClickAlumno}>Agregar</Button>
                    <datalist id="lista_alumnos"  >
                        {props.lista.map((alumno)=> 
                        <option key={alumno.id}  value={alumno.nombre + " " +  alumno.dni} >  </option  >) }
                    </datalist>              
            </div>
    </div>
)
  
}

export default NombreDetalleBuscar;