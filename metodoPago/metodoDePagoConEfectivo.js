class metodoDePagoConEfectivo{
    constructor(conceptoDelPago, lugarDeEmision, fechaDeEmision){
        this.conceptoDelPago=conceptoDelPago;
        this.fechaDeEmision=fechaDeEmision;
        this.lugarDeEmision=lugarDeEmision;
    }

    obtenerPago(nombre,salario){
        let cheque = `FACTURA DE PAGO POR EFECTIVO
                        Empleado: ${nombre}
                        Concepto: ${this.obtenerconceptoDelPago()}
                        Monto: ${salario}
                        Tipo de moneda: Bs
                        Lugar de pago: ${this.obtenerlugarDeEmision()}
                        Fecha de pago: ${this.obtenerFechaDeEmision().toString()}`;
        return cheque;            
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
}
module.exports=metodoDePagoConEfectivo;
