class MetodoDePagoConDeposito{
    constructor(nombreDelBanco, numeroCuenta, montoDepositado){
        this.nombreDelBanco=nombreDelBanco;
        this.numeroCuenta=numeroCuenta;
        this.montoDepositado=montoDepositado;
    }

    obtenerPago(){
        let deposito = `FACTURA DE DEPOSITO
                        Banco: ${this.obtenerNombreDelBanco()}
                        Cuenta: ${this.obtenerNumeroDeCuenta()}
                        Monto: ${this.obtenerMontoADepositar()}`;
        return deposito;            
    }

    obtenerNombreDelBanco(){
        return this.nombreDelBanco;
    }

    obtenerNumeroDeCuenta(){
        return this.numeroCuenta;
    }

    obtenerMontoADepositar(){
        return this.montoDepositado.calcularSalario();
    }
}
