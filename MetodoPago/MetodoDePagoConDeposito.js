class MetodoDePagoConDeposito{
    constructor(receptor, fechaDeEmision, nombreDelBanco, numeroCuenta, montoDepositado){
        this.receptor=receptor;
        this.fechaDeEmision=fechaDeEmision;
        this.nombreDelBanco=nombreDelBanco;
        this.numeroCuenta=numeroCuenta;
        this.montoDepositado=montoDepositado;
    }

    obtenerPago(){
        let deposito = `FACTURA DE DEPOSITO
                        Empleado: ${this.obtenerReceptor()}
                        Banco: ${this.obtenerNombreDelBanco()}
                        Monto: ${this.obtenerMontoADepositar()}
                        Tipo de moneda: Bs
                        Cuenta: ${this.obtenerNumeroDeCuenta()}
                        Fecha de pago: ${this.obtenerFechaDeEmision().toString()}`;
        return deposito;            
    }

    obtenerReceptor(){
        return this.receptor.obtenerNombre();
    }

    obtenerFechaDeEmision(){
        let fecha = new Date();
        return fecha.getDate();
    }

    obtenerNombreDelBanco(){
        return this.nombreDelBanco;
    }

    obtenerNumeroDeCuenta(){
        return this.numeroCuenta;
    }

    obtenerMontoADepositar(){
        return this.receptor.obtenerSalario();
    }
}
module.exports=MetodoDePagoConDeposito;
