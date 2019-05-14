var expect = require('chai').expect;
import Empleado from '../empleado/empleado.js';
import CalculadoraPorFijo from '../calculadoras/calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoras/calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../calculadoras/calculadoraSalario/calculadoraPorComision';
import TarjetaHora from '../tarjetas/tarjetaHora';
import TarjetaVenta from '../tarjetas/tarjetaVenta';
import TarjetaAsistencia from '../tarjetas/tarjetaAsistencia';
import CalculadoraDeFechaDePagoPorHora from '../calculadoras/calculadoraFechaDePago/calculadoraDeFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../calculadoras/calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../calculadoras/calculadoraFechaDePago/CalculadoraDeFechaDePagoPorComision';
import MetodoDePagoConCheque from '../MetodoPago/MetodoDePagoConCheque.js';

describe('Metodo de pago', function(){
    it('recibir un empleado fijo y generar su cheque de pago', function(){
        let tarjetaAsistencia = new TarjetaAsistencia("2019-03-02");
        let calculadora = new CalculadoraPorFijo(1800,[tarjetaAsistencia]);
        let fechaIncioLaboral = new Date(2019, 3, 2);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Deposito");
        let chequeDePago = new MetodoDePagoConCheque(empleado, "2019-05-12",1800);
        let fechaDePago = new Date();
        fechaDePago.toString();
        let boletaEsperada=`CHEQUE DE PAGO
                      Empleado: Erick
                      Monto: 78
                      Tipo de moneda: Bs
                      Lugar de pago: cochabamba
                      Fecha de pago: ${fechaDePago.getDate()}`;
        let boletaResultante=chequeDePago.obtenerPago();
        expect(boletaResultante).equal(boletaEsperada);
    });

    it('recibir un empleado parcial y generar su cheque de pago', function(){
        let tarjetaHora1 = new TarjetaHora("2019-03-02", "08:00:00", "12:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora1]);
        expect(calculadora.calcularSalario()).equal(800);
        let fechaIncioLaboral = new Date(2019, 3, 2);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Efectivo");
        let chequeDePago = new MetodoDePagoConCheque(empleado, "2019-05-12",1800);
        let fechaDePago = new Date(2019,3,13);
        fechaDePago.toString();
        let boletaEsperada=`CHEQUE DE PAGO
                      Empleado: Erick
                      Monto: 800
                      Tipo de moneda: Bs
                      Lugar de pago: cochabamba
                      Fecha de pago: ${fechaDePago.getDate()}`;
        let boletaResultante=chequeDePago.obtenerPago();
        expect(boletaEsperada).equal(boletaResultante);
    });
});