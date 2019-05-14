class MetodoDePagoConEfectivo{
    constructor(receptor,conceptoDelPago, lugarDeEmision, fechaDeEmision, montoTotal){
        this.receptor=receptor;
        this.conceptoDelPago=conceptoDelPago;
        this.fechaDeEmision=fechaDeEmision;
        this.lugarDeEmision=lugarDeEmision;
        this.montoTotal=montoTotal;
    }

    obtenerPago(){
        let cheque = `FACTURA DE PAGO POR EFECTIVO
                        Empleado: ${this.obtenerNombreDelReceptor()}
                        Concepto: ${this.obtenerconceptoDelPago()}
                        Monto: ${this.obtenerMontoTotal()}
                        Tipo de moneda: Bs
                        Lugar de pago: ${this.obtenerlugarDeEmision()}
                        Fecha de pago: ${this.obtenerFechaDeEmision().toString()}`;
        return cheque;            
    }

    obtenerNombreDelReceptor(){
        return this.receptor.obtenerNombre();
    }

    obtenerconceptoDelPago(){
        return this.conceptoDelPago;
    }

    obtenerFechaDeEmision(){
        let fechaPagoEfectivo = new Date();
        return fechaPagoEfectivo.getDate();

    }

    obtenerlugarDeEmision(){
        return this.lugarDeEmision;
    }

    obtenerMontoTotal(){
        return this.receptor.obtenerSalario();
    }
}
module.exports=MetodoDePagoConEfectivo;
