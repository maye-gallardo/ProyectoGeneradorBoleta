class prestamoDeDinero{
    constructor(montoTotal, fechaDePrestamo, cuotas){
        this.cuotas=cuotas;
        this.fechaDePrestamo=fechaDePrestamo;
        this.montoTotal=montoTotal;
        this.montoPorCuota=calcularMontoPorCuota();
    }

    calcularMontoPorCuota(){
        this.montoPorCuota=this.montoTotal/this.cuotas;
    }

    pagarPrestamo(){
        this.restarMontoDeUnaCuota();
        this.restarUnaCuotaRestante();
        return this.montoPorCuota;
    }
    
    restarUnaCuotaRestante(){
        this.cuotas-=1;
    }

    restarMontoDeUnaCuota(){
        this.montoTotal-=this.montoPorCuota;
    }
}
module.exports=prestamoDeDinero;