class Empleado{
    constructor(nombre,ci,calculadoraDeSalario,calculadoraFechaPago,metodoPago){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadoraDeSalario=calculadoraDeSalario;
        this.calculadoraFechaPago=calculadoraFechaPago;
        this.metodoPago=metodoPago;
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
    obtenerCi(){
        return this.ci;
    }
    obtenerPago(){
        return this.metodoPago.obtenerPago(this.nombre,this.obtenerSalario());
    }
}


module.exports=Empleado;
