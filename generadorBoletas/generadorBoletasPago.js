class GeneradorBoletasDePago{
    constructor(empleados){
        this.empleados=empleados;
        this.boletasGeneradas=[];
    }
   
    generarBoletasDePagoParaTodosLosEmpleados(fechaActual){
        for (let empleado of this.empleados) {
            if(empleado.correspondePagar(fechaActual)){
                this.boletasGeneradas.push(empleado.obtenerPago());
            }
        }
        
    }
}


module.exports=GeneradorBoletasDePago;