class servicioPestamoDeDinero{
    constructor() {
        this.montoAcumulado=0;
        this.pagoMensual=0;
    }

    calcularMontoDeServicio() {
        return this.calcularMontoDelPrestamo();
    }

    agregarPrestamo(monto) {
        this.montoAcumulado=monto;
    }

    calcularMontoDelPrestamo() {
        let totalMonto = 0;
        totalMonto += this.montoAcumulado;
        return totalMonto;
    }

    obtenerPagoMensual(couta){
        this.pagoMensual=couta;
    }

    calcularPagoMensual(){
       return this.calcularMontoDeServicio()/this.pagoMensual;
    }

}
module.exports=servicioPestamoDeDinero;