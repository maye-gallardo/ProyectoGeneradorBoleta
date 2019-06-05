class metodoDePagoConDeposito{
    constructor(fechaDeEmision, nombreDelBanco, numeroCuenta){
        this.fechaDeEmision=fechaDeEmision;
        this.nombreDelBanco=nombreDelBanco;
        this.numeroCuenta=numeroCuenta;
    }

    obtenerPago(nombre,salario){
        let deposito = {tipo: 'FACTURA DE DEPOSITO',
                        Empleado: nombre,
                        Banco: this.obtenerNombreDelBanco(),
                        Monto: salario,
                        Tipo_de_moneda: 'Bs',
                        Cuenta: this.obtenerNumeroDeCuenta(),
                        Fecha_de_pago: this.obtenerFechaDeEmision()};
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
