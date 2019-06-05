class Empleado{
    constructor(nombre,ci,calculadoraDeSalario,calculadoraFechaPago,metodoPago, servicio, perteneceASindicato =false){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadoraDeSalario=calculadoraDeSalario;
        this.calculadoraFechaPago=calculadoraFechaPago;
        this.metodoPago=metodoPago;
        this.servicio=servicio;
        this.perteneceASindicato=perteneceASindicato;
    }
    obtenerSalario(){
        return this.calculadoraDeSalario.calcularSalario();
    }

    correspondePagar(fecha){
        let esCorrespondidoElPago=false;
        let fechaDePago = this.obtenerFechaPago();
        if((fechaDePago.getDay()==fecha.getDay())&&(fechaDePago.getMonth()==fecha.getMonth())&&(fechaDePago.getYear()==fecha.getYear())){
            esCorrespondidoElPago=true;
        }
        return esCorrespondidoElPago;
    }
    obtenerFechaPago(){
        return this.calculadoraFechaPago.calcularFechaDePago();
    }
    obtenerNombre(){
        return this.nombre;
    }

    obtenerSalarioSiPerteneceASindicato(){
        if(this.perteneceASindicato==true)
            return this.obtenerSalario()-this.obtenerServicioSindicato();
    }

    obtenerCi(){
        return this.ci;
    }

    obtenerPago(){
        return this.metodoPago.obtenerPago(this.nombre,this.obtenerSalario());
    }

    obtenerServicioSindicato(){
        return this.servicio.calcularMontoDeServicio();
    }

    obtenerDescuentoDePrestamo(){
        return this.servicio.calcularPagoMensual();
    }

}


module.exports=Empleado;
