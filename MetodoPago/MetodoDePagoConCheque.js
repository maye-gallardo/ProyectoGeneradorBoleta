
class MetodoDePagoConCheque{
    constructor(receptor, fechaDeEmision, monto){
        this.receptor=receptor;
        this.fechaDeEmision=fechaDeEmision;
        this.lugarDeEmision="cochabamba";
        this.monto=monto;
    }

    obtenerPago(){
        let cheque = `CHEQUE DE PAGO
                        Empleado: ${this.obtenerReceptor()}
                        Monto: ${this.obtenerMonto()}
                        Tipo de moneda: Bs
                        Lugar de pago: ${this.obtenerlugarDeEmision()}
                        Fecha de pago: ${this.obtenerFechaDeEmision().toString()}`;
        return cheque;            
    }

    obtenerReceptor(){
        return this.receptor.obtenerNombre();
    }

    obtenerFechaDeEmision(){
        let fecha = new Date();
        return fecha.getDate();
    }

    obtenerlugarDeEmision(){
        return this.lugarDeEmision;
    }

    obtenerMonto(){
        return this.receptor.obtenerSalario();
    }

}
module.exports=MetodoDePagoConCheque;

