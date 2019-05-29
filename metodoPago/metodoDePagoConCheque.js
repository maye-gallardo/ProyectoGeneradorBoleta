
class metodoDePagoConCheque{
    constructor(){
        this.lugarDeEmision="cochabamba";
    }

    obtenerPago(nombre,salario){
        let cheque = `CHEQUE DE PAGO
                      Empleado: ${nombre}
                      Monto: ${salario}
                      Tipo de moneda: Bs
                      Lugar de pago: ${this.obtenerlugarDeEmision()}
                      Fecha de pago: ${this.obtenerFechaDeEmision().toString()}`;
        return cheque;
    }

    obtenerFechaDeEmision(){
        let fecha = new Date();
        return fecha.getDate();
    }

    obtenerlugarDeEmision(){
        return this.lugarDeEmision;
    }

}
module.exports=metodoDePagoConCheque;

