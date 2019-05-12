
class MetodoDePagoConCheque{
    constructor(receptor, fechaDeEmision, monto){
        this.receptor=receptor;
        this.fechaDeEmision=fechaDeEmision;
        this.lugarDeEmision="cochabamba";
        this.monto=monto;
    }

    obtenerPago(){
        let cheque = `Cheque DE PAGO
                        Empleado: ${this.obtenerReceptor()}
                        Monto: ${this.obtenerMonto()}
                        Tipo de moneda: Bs
                        Lugar de pago: ${this.obtenerlugarDeEmision()}
                        Fecha de pago: ${this.fechaDeEmision().toString()}`;
        return cheque;            
    }

    obtenerReceptor(){
        return this.receptor.obtenerNombre();
    }

    obtenerFechaDeEmision(){
        return this.fechaPagoConCheque.getDay();
    }

    obtenerlugarDeEmision(){
        return this.lugarDeEmision;
    }

    obtenerMonto(){
        return this.monto.calcularSalario();
    }

}

