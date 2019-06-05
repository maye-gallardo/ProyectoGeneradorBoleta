class Empleado{
    constructor(nombre,ci){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadoraDeSalario=null;
        this.calculadoraFechaPago=null;
        this.metodoPago=null;
        this.servicio=null;
    }
    obtenerSalario(){
        if(this.servicio!=null){
            return this.calculadoraDeSalario.calcularSalario()-this.obtenerServicioSindicato();}
        else{
            return this.calculadoraDeSalario.calcularSalario();}
    }

    correspondePagar(fecha){
        let esCorrespondidoElPago=false;
        let fechaDePago = this.obtenerFechaPago();
        if((fechaDePago.getDay()==fecha.getDay())&&(fechaDePago.getMonth()==fecha.getMonth())&&(fechaDePago.getYear()==fecha.getYear())){
            esCorrespondidoElPago=true;
        }
        return esCorrespondidoElPago;
    }
    establecerCalculadorDeSalario(calculadoraDeSalario){
        this.calculadoraDeSalario=calculadoraDeSalario;
    }
    establecerCalculadoraFechaPago(calculadoraFechaPago){
        this.calculadoraFechaPago=calculadoraFechaPago;
    }
    establecerMetodoDePago(metodoPago){
        this.metodoPago=metodoPago;
    }
    establecerServicio(servicio){
        this.servicio=servicio;
    }
    obtenerFechaPago(){
        return this.calculadoraFechaPago.calcularFechaDePago();
    }
    obtenerNombre(){
        return this.nombre;
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
