class MetodoDePagoConEfectivo{
    constructor(nombreReceptor, CiReceptor,conceptoDelPago, lugarDeEmision, fechaDeEmision, montoTotal){
        this.nombreReceptor=nombreReceptor;
        this.CiReceptor=CiReceptor;
        this.conceptoDelPago=conceptoDelPago;
        this.fechaDeEmision=fechaDeEmision;
        this.lugarDeEmision=lugarDeEmision;
        this.montoTotal=montoTotal;
    }

    obtenerPago(){
        let cheque = `Factura de pago en efectivo
                        Empleado: ${this.obtenerNombreDelReceptor()}
                        Ci: ${this.obtenerCiReceptor()}
                        Concepto: ${this.obtenerconceptoDelPago()}
                        Tipo de moneda: Bs
                        Monto: ${this.obtenerMontoTotal()}
                        Lugar de pago: ${this.obtenerlugarDeEmision()}
                        Fecha de pago: ${this.obtenerFechaDeEmision().toString()}`;
        return cheque;            
    }

    obtenerNombreDelReceptor(){
        return this.nombreReceptor.obtenerNombre();
    }

    obtenerconceptoDelPago(){
        return this.CiReceptor.obtenerCi();
    }

    obtenerCiReceptor(){
        return this.conceptoDelPago;
    }

    obtenerFechaDeEmision(){
        return this.fechaPagoConCheque.getDay();
    }

    obtenerlugarDeEmision(){
        return this.lugarDeEmision;
    }

    obtenerMontoTotal(){
        return this.montoTotal.calcularSalario();
    }

}
