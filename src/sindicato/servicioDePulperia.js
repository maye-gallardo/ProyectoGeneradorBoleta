class servicioDePulperia{
    constructor() {
        this.listaPulperia = [];
    }

    calcularMontoDeServicio() {
        return this.calcularMontoDeLaLista();;
    }

    agregarPedido(pedido, monto) {
        this.listaPulperia.push({ pedido, monto });
    }

    calcularMontoDeLaLista() {
        let totalMonto = 0;
        for (let producto of this.listaPulperia) {
            totalMonto += producto.monto;
        }
        return totalMonto;
    }

}
module.exports=servicioDePulperia;