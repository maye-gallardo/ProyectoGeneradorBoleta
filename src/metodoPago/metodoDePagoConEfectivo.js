class metodoDePagoConEfectivo{
    constructor(conceptoDelPago, lugarDeEmision, fechaDeEmision){
        this.conceptoDelPago=conceptoDelPago;
        this.fechaDeEmision=fechaDeEmision;
        this.lugarDeEmision=lugarDeEmision;
    }

    obtenerPago(nombre,salario){
        let cheque = {tipo: 'FACTURA DE PAGO POR EFECTIVO',
                        Empleado: nombre,
                        Concepto: this.obtenerconceptoDelPago(),
                        Monto: salario,
                        Tipo_de_moneda: 'Bs',
                        Lugar_de_pago: this.obtenerlugarDeEmision(),
                        Fecha_de_pago: this.obtenerFechaDeEmision()};
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
