class prestamoDeOtros{
    constructor(nombreDeObjetoPrestado,montoDelObjeto, fechaDePrestamo, cuotas){
        this.cuotas=cuotas;
        this.fechaDePrestamo=fechaDePrestamo;
        this.nombreDeObjetoPrestado=nombreDeObjetoPrestado;
        this.montoPorCuota=calcularMontoPorCuota();
        this.montoDelObjeto=montoDelObjeto;
    }

    obtenerNombreObjetoPrestado(){
        return this.nombreDeObjetoPrestado;
    }

    calcularMontoPorCuota(){
        this.montoPorCuota=this.montoDelProducto/this.cuotas;
    }

    pagarPrestamo(){
        this.restarMontoDeUnaCuota();
        this.restarUnaCuotaRestante();
        this.obtenerNombreObjetoPrestado();
        return this.montoPorCuota;
    }
    
    restarUnaCuotaRestante(){
        this.cuotas-=1;
    }

    restarMontoDeUnaCuota(){
        this.montoTotal-=this.montoPorCuota;
    }
}