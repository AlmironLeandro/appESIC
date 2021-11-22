export const login  = (token,idRol,id,nombre) => {
    localStorage.setItem('token', token)
    localStorage.setItem('nombre',nombre);
    localStorage.setItem('id',id);
    localStorage.setItem('idRol',idRol);
  }
export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('nombre');
    localStorage.removeItem('id');
    localStorage.removeItem('idRol');
    localStorage.removeItem('baseUrl');

  }
  export const getUsuario = () => {
    const user = {
      token: localStorage.getItem('token' ),
      nombre: localStorage.getItem('nombre'),
      id:localStorage.getItem('id'),
      idRol:localStorage.getItem('idRol')}   
      return user; 
    
  }
  