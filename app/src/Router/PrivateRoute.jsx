import { Route , Redirect} from "react-router";


export default function PrivateRoute({component:Component,rol, ...rest}) {
    return (
        <Route {...rest}>
         {parseInt(localStorage.getItem("idRol"))  === parseInt(rol)  ? <Component/> : <Redirect to="/login"/> }     
        </Route>
    )
}
