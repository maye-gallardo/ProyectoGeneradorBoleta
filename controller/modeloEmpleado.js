class modeloEmpleado{
    obtenerModelo(){
        let Empleado={
            nombre: "",
            apellido: "",
            ci: 0,
            tipo: "",
            servicio: "",
            metodoDePago: "" 
        }
        return Empleado;
    }
}

module.exports = modeloEmpleado;