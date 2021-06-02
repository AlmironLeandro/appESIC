
import { GoX } from "react-icons/go"
import Radium, { StyleRoot } from 'radium'

const style = 
{
"contenedor" : {
display:'flex',width:'30%', height:'15vh',margin:'1%',borderRadius: '5px 5px 5px 5px',
border:'1px solid #ced4da',background:'#e9ecef', justifyContent:'center'},
"columna":{display:'flex',flexDirection: 'column',height:'100%', justifyContent:'start' , width:'90%'},
"fila":{margin:'2%'},
"cruzColumna":{ color:'white',display:'flex',flexDirection: 'column',width:'10%', alignItems:'center',height:'5vh',justifyContent:'center',
  },
  "goX":{
    background:'red',width:'25px', height:'25px',border:'1px solid #ced4da', borderRadius: '20px',':hover':{color:'black'}
  }
}








const AlumnoAgregado = () =>
{
    
    return(
       
    <div style={style.contenedor}>
       <div style={style.columna}>
            <div style={style.fila} > Nombre:Leandro Almiron</div> 
            <div style={style.fila}> Dni: 40463933</div>
       </div>
       
        <div style={style.cruzColumna}>
        
        <StyleRoot>
        
         <div  > <GoX style={style.goX}></GoX> </div>
         </StyleRoot>

        </div>
       
         
    </div>
    )

}

export default AlumnoAgregado;