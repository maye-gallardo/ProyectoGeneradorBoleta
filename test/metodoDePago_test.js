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
import MetodoDePagoConCheque from '../metodoPago/metodoDePagoConCheque.js';
import MetodoDePagoConDeposito from '../metodoPago/metodoDePagoConDeposito.js';
import MetodoDePagoConEfectivo from '../metodoPago/metodoDePagoConEfectivo.js';
describe('Metodo de pago', function(){
    it('recibir un empleado fijo y generar su cheque de pago', function(){
        let chequeDePago = new MetodoDePagoConCheque();
        let fechaDePago = new Date();
        fechaDePago.toString();
        let boletaEsperada=`CHEQUE DE PAGO
                      Empleado: Erick
                      Monto: 78
                      Tipo de moneda: Bs
                      Lugar de pago: cochabamba
                      Fecha de pago: ${fechaDePago.getDate()}`;
        let boletaResultante=chequeDePago.obtenerPago('Erick', 78);
        expect(boletaResultante).equal(boletaEsperada);
    });

    it('recibir un empleado fijo y generar su deposito de pago', function(){
        let depositoDePago = new MetodoDePagoConDeposito("2019-05-12", "mercantil", 4342);
        let fechaDePago = new Date();
        fechaDePago.toString();
        let boletaEsperada=`FACTURA DE DEPOSITO
                        Empleado: Erick
                        Banco: mercantil
                        Monto: 78
                        Tipo de moneda: Bs
                        Cuenta: 4342
                        Fecha de pago: ${fechaDePago.getDate()}`;
        let boletaResultante=depositoDePago.obtenerPago('Erick', 78);
        expect(boletaResultante).equal(boletaEsperada);
    });


    it('recibir un empleado fijo y generar su factura de pago por efectivo', function(){
        let factura = new MetodoDePagoConEfectivo("compras","cochabamba", "2019-05-12");
        let fechaDePago = new Date();
        fechaDePago.toString();
        let boletaEsperada=`FACTURA DE PAGO POR EFECTIVO
                        Empleado: Erick
                        Concepto: compras
                        Monto: 78
                        Tipo de moneda: Bs
                        Lugar de pago: cochabamba
                        Fecha de pago: ${fechaDePago.getDate()}`;
        let boletaResultante=factura.obtenerPago('Erick', 78);
        expect(boletaResultante).equal(boletaEsperada);
    });    
});