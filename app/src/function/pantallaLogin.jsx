export const login  = (token,idRol,id,nombre) => {
    localStorage.setItem('token', token)
    localStorage.setItem('nombre',nombre);
    localStorage.setItem('id',id);
    localStorage.setItem('idRol',idRol);
  }
export const logout = (token,idRol,id,nombre) => {
    localStorage.removeItem('token', JSON.stringify(token) )
    localStorage.removeItem('nombre',JSON.stringify(nombre));
    localStorage.removeItem('id',    JSON.stringify(id));
    localStorage.removeItem('idRol', JSON.stringify(idRol));
  }
  export const getUsuario = () => {
    const user = {
      token: localStorage.getItem('token' ),
      nombre: localStorage.getItem('nombre'),id:localStorage.getItem('id'),
      idRol:localStorage.getItem('idRol')}   
      return user; 
    
  }
  