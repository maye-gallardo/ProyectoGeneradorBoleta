class GeneradorBoletasDePago{
    constructor(empleados, repositorio){
        this.repositorio=repositorio;
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

    obtenerRepositorio(){
        repositorio.obtenerEmpleados();
    }
}


module.exports=GeneradorBoletasDePago;