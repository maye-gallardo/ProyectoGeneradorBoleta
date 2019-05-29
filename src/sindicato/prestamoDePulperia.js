class prestamoDePulperia{
    constructor(nombreDeProductoPrestado,montoDelProducto, fechaDePrestamo, cuotas){
        this.cuotas=cuotas;
        this.fechaDePrestamo=fechaDePrestamo;
        this.nombreDeProductoPrestado=nombreDeProductoPrestado;
        this.montoPorCuota=calcularMontoPorCuota();
        this.montoDelProducto=montoDelProducto;
    }

    calcularMontoPorCuota(){
        this.montoPorCuota=this.montoDelProducto/this.cuotas;
    }

    obtenerProductoPrestado(){
        return this.nombreDeProductoPrestado;
    }

    pagarPrestamo(){
        this.restarMontoDeUnaCuota();
        this.restarUnaCuotaRestante();
        this.obtenerProductosPrestado();
        return this.montoPorCuota;
    }
    
    restarUnaCuotaRestante(){
        this.cuotas-=1;
    }

    restarMontoDeUnaCuota(){
        this.montoTotal-=this.montoPorCuota;
    }
}