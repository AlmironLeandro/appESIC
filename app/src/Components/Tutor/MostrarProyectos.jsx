
import { Popover, OverlayTrigger,Button} from 'react-bootstrap'

  const MostrarProyectos =  (props)=>
{

    const popover = (
      <Popover id="popover-basic">
   
        <Popover.Title as="h3">
          {props.proyecto.materia.nombre}

        </Popover.Title>

        <Popover.Content >
       
        <h6>Alumnos:  </h6>
          {props.proyecto.alumnos.map((est)=>
          (
          <p>{est.nombre+" "} {est.apellido+" "} {est.dni+" "}</p>
          )
          )}

{props.proyecto.proyecto.descripcion}

        </Popover.Content>
         
      </Popover>)

      const Example = () => (
          <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>
            <Button  variant="light">Ver mas</Button>
          </OverlayTrigger>
        );
return(

  <div>
<Example></Example>
    
  </div>
  
        )
}

export default MostrarProyectos;