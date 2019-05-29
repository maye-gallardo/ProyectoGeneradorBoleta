class Empleado{
    constructor(nombre,ci,calculadoraDeSalario,calculadoraFechaPago,metodoPago, sindicato){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadoraDeSalario=calculadoraDeSalario;
        this.calculadoraFechaPago=calculadoraFechaPago;
        this.metodoPago=metodoPago;
        this.sindicato=sindicato;
    }
    obtenerSalario(){
        return this.calculadoraDeSalario.calcularSalario();
    }

    obtenerSindicato(){
        
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
    obtenerCi(){
        return this.ci;
    }
    obtenerPago(){
        return this.metodoPago.obtenerPago(this.nombre,this.obtenerSalario());
    }
    establecerNombre(nombre){
        this.nombre=nombre;
    }
}


module.exports=Empleado;
