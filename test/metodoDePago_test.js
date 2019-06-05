var expect = require('chai').expect;
import MetodoDePagoConCheque from '../src/metodoPago/metodoDePagoConCheque.js';
import MetodoDePagoConDeposito from '../src/metodoPago/metodoDePagoConDeposito.js';
import MetodoDePagoConEfectivo from '../src/metodoPago/metodoDePagoConEfectivo.js';
describe('Metodo de pago', function(){
    it('recibir un empleado fijo y generar su cheque de pago', function(){
        let chequeDePago = new MetodoDePagoConCheque();
        let fechaDePago = new Date();
        fechaDePago.toString();
        let boletaEsperada={tipo: 'CHEQUE DE PAGO',
                      Empleado: 'Erick',
                      Monto: 78,
                      Tipo_de_moneda: 'Bs',
                      Lugar_de_pago: 'cochabamba',
                      Fecha_de_pago: fechaDePago.getDate()};
        let boletaResultante=chequeDePago.obtenerPago('Erick', 78);
        expect(boletaResultante).eql(boletaEsperada);
    });

    it('recibir un empleado fijo y generar su deposito de pago', function(){
        let depositoDePago = new MetodoDePagoConDeposito("2019-05-12", "mercantil", 4342);
        let fechaDePago = new Date();
        fechaDePago.toString();
        let boletaEsperada={tipo: 'FACTURA DE DEPOSITO',
                        Empleado: 'Erick',
                        Banco: 'mercantil',
                        Monto: 78,
                        Tipo_de_moneda: 'Bs',
                        Cuenta: 4342,
                        Fecha_de_pago: fechaDePago.getDate()};
        let boletaResultante=depositoDePago.obtenerPago('Erick', 78);
        expect(boletaResultante).eql(boletaEsperada);
    });


    it('recibir un empleado fijo y generar su factura de pago por efectivo', function(){
        let factura = new MetodoDePagoConEfectivo("compras","cochabamba", "2019-05-12");
        let fechaDePago = new Date();
        fechaDePago.toString();
        let boletaEsperada={tipo: 'FACTURA DE PAGO POR EFECTIVO',
                        Empleado: 'Erick',
                        Concepto: 'compras',
                        Monto: 78,
                        Tipo_de_moneda: 'Bs',
                        Lugar_de_pago: 'cochabamba',
                        Fecha_de_pago: fechaDePago.getDate()};
        let boletaResultante=factura.obtenerPago('Erick', 78);
        expect(boletaResultante).eql(boletaEsperada);
    });    
});