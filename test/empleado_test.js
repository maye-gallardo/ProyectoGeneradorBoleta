var expect = require('chai').expect;

import Empleado from '../src/empleado.js';
import CalculadoraPorFijo from '../src/calculadoras/calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../src/calculadoras/calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../src/calculadoras/calculadoraSalario/calculadoraPorComision';
import TarjetaHora from '../src/tarjetas/tarjetaHora';
import TarjetaVenta from '../src/tarjetas/tarjetaVenta';
import TarjetaAsistencia from '../src/tarjetas/tarjetaAsistencia';
import CalculadoraDeFechaDePagoPorHora from '../src/calculadoras/calculadoraFechaDePago/calculadoraDeFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../src/calculadoras/calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../src/calculadoras/calculadoraFechaDePago/CalculadoraDeFechaDePagoPorComision';
import servicioPestamoDeDinero from '../src/sindicato/servicioPestamoDeDinero'
describe('calcular el salario para empleados y su fecha de paga', function () {
    
    /*it('obtener salario para un empleado fijo', function () {
        let tarjetaAsistencia = new TarjetaAsistencia("2019-03-22");
        let calculadora = new CalculadoraPorFijo(1800,[tarjetaAsistencia]);;
        let fechaIncioLaboral = new Date(2019, 3, 22);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,"Deposito");
        expect(empleado.obtenerSalario()).equal(78);
    });

    it('obtener la fecha de paga para un empleado fijo', function () {
        let tarjetaHora = new TarjetaHora("2019-05-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 22);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1,calculadora, calculadoraDeFecha,"Cheque");
        let fechaResultante = empleado.obtenerFechaPago().toString();
        let fechaEsperada = new Date(2019, 5, 28).toString();
        
        expect(fechaEsperada).equal(fechaResultante);
    });

    it('corresponde la fecha de paga para un empleado fijo', function () {
        let tarjetaHora = new TarjetaHora("2019-05-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 22);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1,calculadora, calculadoraDeFecha,"Cheque");
        let fechaDePaga = new Date(2019, 5, 28);
        expect(empleado.correspondePagar(fechaDePaga)).equal(true);
    });

    it('obtener el salario para un empleado por hora con 1 tarjeta de venta', function () {
        let tarjetaHora = new TarjetaHora("2019-03-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 3, 22);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,"Efectivo");
        expect(empleado.obtenerSalario()).equal(800);
    });

    it('obtener la fecha de paga para un empleado por hora', function () {
        let tarjetaHora = new TarjetaHora("2019-05-03", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Deposito");
        let fechaResultante = empleado.obtenerFechaPago().toString();
        let fechaEsperada = new Date(2019, 5, 7).toString();
        expect(fechaEsperada).equal(fechaResultante);
    });

    it('corresponde la fecha de paga para un empleado por hora', function () {
        let tarjetaHora = new TarjetaHora("2019-05-03", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Deposito");
        let fechaDePaga = new Date(2019, 5, 7);
        expect(empleado.correspondePagar(fechaDePaga)).equal(true);
    });
    
    
    it('obtener el salario para un empleado por hora con mas de 1 tarjeta de venta', function () {
        let tarjetaHoras = new TarjetaHora("2019-03-22", "16:00:00", "20:00:00");
        let tarjetaHoras1 = new TarjetaHora("2019-03-23", "16:00:00", "20:00:00");
        let tarjetaHoras2 = new TarjetaHora("2019-03-24", "16:00:00", "20:00:00");
        
        let lista = [tarjetaHoras, tarjetaHoras1, tarjetaHoras2];
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let calculadora = new CalculadoraPorHora(200, lista);
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,"Efectivo");

        expect(empleado.obtenerSalario()).equal(2400);
    });

    it('obtener salario para un empleado por comision con 1 tarjeta de venta', function () {
        let tarjetaVentas = new TarjetaVenta(500, "2019-03-22");
        let calculadora = new CalculadoraPorComision(200, 0.05, [tarjetaVentas]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,"Cheque");
        expect(empleado.obtenerSalario()).equal(225);
    });

    it('obtener salario para un empleado por comision con 3 tarjetas de venta', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-03-22");
        let tarjetaVenta2 = new TarjetaVenta(300, "2019-03-22");
        let tarjetaVenta3 = new TarjetaVenta(100, "2019-03-22");

        let lista = [tarjetaVenta1, tarjetaVenta2, tarjetaVenta3];
    
        let calculadora = new CalculadoraPorComision(700,0.07,lista);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,"Deposito");

        expect(empleado.obtenerSalario()).equal(763);
    });

    it('obtener la fecha de paga para un empleado por comision', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-05-03");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Efectivo");
        let fechaResultante = empleado.obtenerFechaPago().toString();
        let fechaEsperada = new Date(2019, 5, 14).toString();
        expect(fechaEsperada).equal(fechaResultante);
    }); 

    it('corresponde la fecha de paga para un empleado por comision', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-05-03");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Efectivo");
        let fechaDePaga = new Date(2019, 5, 14);
        expect(empleado.correspondePagar(fechaDePaga)).equal(true);
    }); */

    it('obtener el monto de prestamo de Dinero de un empleado', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-05-03");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
        let prestamo = new servicioPestamoDeDinero();
        prestamo.agregarPrestamo(100);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Efectivo",prestamo, false);
        expect(empleado.obtenerServicioSindicato()).equal(100);
    });

    it('obtener el monto mensual que un empleado  deberia pagar por su Prestamo de Dinero', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-05-03");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
        let prestamo = new servicioPestamoDeDinero();
        prestamo.agregarPrestamo(600);
        prestamo.obtenerPagoMensual(3);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Efectivo",prestamo, false);
        expect(empleado.obtenerDescuentoDePrestamo()).equal(200);
    });

    it('obtener salario para un empleado fijo que pertenece a un sindicato e hizo un prestamo de dinero', function () {
        let tarjetaAsistencia = new TarjetaAsistencia("2019-03-22");
        let calculadora = new CalculadoraPorFijo(1800,[tarjetaAsistencia]);;
        let fechaIncioLaboral = new Date(2019, 3, 22);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let prestamo = new servicioPestamoDeDinero();
        prestamo.agregarPrestamo(10);
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,"Deposito",prestamo, true);
        expect(empleado.obtenerSalarioSiPerteneceASindicato()).equal(80);
    });
});
