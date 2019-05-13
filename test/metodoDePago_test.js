var expect = require('chai').expect;
import Empleado from '../empleado/empleado.js';
import CalculadoraPorFijo from '../calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraSalario/calculadoraPorComision';
import TarjetaHora from '../tarjetas/tarjetaHora';
import TarjetaVenta from '../tarjetas/tarjetaVenta';
import TarjetaAsistencia from '../tarjetas/tarjetaAsistencia';
import CalculadoraDeFechaDePagoPorHora from '../calculadoraFechaDePago/calculadoraDeFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../calculadoraFechaDePago/CalculadoraDeFechaDePagoPorComision';
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
        expect(boletaEsperada).eql(boletaResultante);
    });
});