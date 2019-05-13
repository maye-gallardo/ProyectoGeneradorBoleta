class MetodoDePagoConDeposito{
    constructor(nombreDelBanco, numeroCuenta, montoDepositado){
        this.nombreDelBanco=nombreDelBanco;
        this.numeroCuenta=numeroCuenta;
        this.montoDepositado=montoDepositado;
    }

    obtenerPago(){
        let cheque = `Cheque DE PAGO
                        Banco: ${this.obtenerNombreDelBanco()}
                        Cuenta: ${this.obtenerNumeroDeCuenta()}
                        Monto: ${this.obtenerMontoADepositar()}`;
        return cheque;            
    }

    obtenerNombreDelBanco(){
        return this.nombreDelBanco;
    }

    obtenerNumeroDeCuenta(){
        return this.numeroCuenta;
    }

    obtenerMontoADepositar(){
        return this.montoDepositado;
    }
}
