var expect = require('chai').expect
import TarjetaVenta from '../src/tarjetas/tarjetaVenta';

describe('',function(){
    it('calcular monto vendido de una Tarjeta de venta', function () {
        let tarjetaVenta = new TarjetaVenta(600, "2018-03-22");
        expect(tarjetaVenta.obtenerMontoVendido()).equal(600);
    });
});