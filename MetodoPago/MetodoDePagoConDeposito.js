class metodoDePagoConDeposito{
    constructor(fechaDeEmision, nombreDelBanco, numeroCuenta){
        this.fechaDeEmision=fechaDeEmision;
        this.nombreDelBanco=nombreDelBanco;
        this.numeroCuenta=numeroCuenta;
    }

    obtenerPago(nombre,salario){
        let deposito = `FACTURA DE DEPOSITO
                        Empleado: ${nombre}
                        Banco: ${this.obtenerNombreDelBanco()}
                        Monto: ${salario}
                        Tipo de moneda: Bs
                        Cuenta: ${this.obtenerNumeroDeCuenta()}
                        Fecha de pago: ${this.obtenerFechaDeEmision().toString()}`;
        return deposito;            
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
}
module.exports=metodoDePagoConDeposito;
