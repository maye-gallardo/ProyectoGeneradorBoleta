
class metodoDePagoConCheque{
    constructor(){
        this.lugarDeEmision="cochabamba";
    }

    obtenerPago(nombre,salario){
        let cheque = {tipo: 'CHEQUE DE PAGO',
                      Empleado: nombre,
                      Monto: salario,
                      Tipo_de_moneda: 'Bs',
                      Lugar_de_pago: this.obtenerlugarDeEmision(),
                      Fecha_de_pago: this.obtenerFechaDeEmision()};
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

