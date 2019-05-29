var expect = require('chai').expect
import Sindicato from '../src/sindicato/sindicato'
import servicioPestamoDeDinero from '../src/sindicato/servicioPestamoDeDinero'
import servicioDePulperia from '../src/sindicato/servicioDePulperia'

describe ('sindicato' , function (){
    it('calcular pago del sindicato', function () {
        let sindicato = new Sindicato();
        expect(sindicato.calcularMontoDeServicio()).equal();

    });

    it('calcular pago del sindicato con Servicio de Prestamo', function () {
        let prestamo = new servicioPestamoDeDinero();
        prestamo.agregarPrestamo(100);
        expect(prestamo.calcularMontoDeServicio()).equal(100);
    });

    it('calcular pago del sindicato con Servicio de Pulperia', function () {
        let pulperia = new servicioDePulperia();
        pulperia.agregarPedido("Fideo", 200);
        expect(pulperia.calcularMontoDeServicio()).equal(200);
    });

    it('calcular pago del sindicato con Servicio de Pulperia', function () {
        let pulperia = new servicioDePulperia();
        pulperia.agregarPedido("Fideo", 200);
        pulperia.agregarPedido("Arroz", 200);
        expect(pulperia.calcularMontoDeServicio()).equal(400);
    });

    it('calcular pago del sindicato con Servicio de Pulperia', function () {
        let pulperia = new servicioDePulperia();
        pulperia.agregarPedido("Fideo", 200);
        pulperia.agregarPedido("Arroz", 200);
        pulperia.agregarPedido("Aceite", 150);
        pulperia.agregarPedido("Harina", 220);
        expect(pulperia.calcularMontoDeServicio()).equal(770);
    });

    it('calcular pago Mensual con Servicio de Prestamo', function () {
        let prestamo = new servicioPestamoDeDinero();
        prestamo.agregarPrestamo(300);
        prestamo.obtenerPagoMensual(3);
        expect(prestamo.calcularPagoMensual()).equal(100);
    });


});