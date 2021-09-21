

export const pasarFecha = (dato)=>{
    const fecha = []
    fecha[0]=dato[8]
    fecha[1]=dato[9]
    fecha[2]='/'
    fecha[3]=dato[5]
    fecha[4]=dato[6]
    fecha[5]='/'
    fecha[6]=dato[0]
    fecha[7]=dato[1]
    fecha[8]=dato[2]
    fecha[9]=dato[3]
    


    return fecha
}
