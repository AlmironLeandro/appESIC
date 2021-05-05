import Logo from '../Images/imgg.png'
// import {Dropdown} from 'react-bootstrap'


const styleHeader= {
    justifyContent:'center',
    alignitems: 'center',
    fontFamily: 'Mukta, sans-serif',
    boxShadow: '0px 2px 10px #888',
    position:'relative',
    color:'rgba(51, 51, 51, 0.658)',
    backgroundColor:'#4db6ad'
}

const styleH2 = {
    fontSize:'25px',
    display:'inline-flex'
}

const Nav = () =>
(
        <div style={styleHeader}>
            <img src={Logo} style={{margin:'5px', height:'45px',opacity:'0.6',textAlign:'justify', display:'inline-flex' }}></img>
            <h2 style={styleH2} >| ESIC  Proyecto integrador</h2>
            {/* <Dropdown className="desplegable ">
             <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> */}
            
            
        </div>
   
  
)
 



export default Nav;