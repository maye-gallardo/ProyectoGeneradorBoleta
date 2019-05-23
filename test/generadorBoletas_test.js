var expect = require('chai').expect;

import Empleado from '../empleado/empleado.js';
import CalculadoraPorFijo from '../calculadoras/calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoras/calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../calculadoras/calculadoraSalario/calculadoraPorComision';
import TarjetaHoras from '../tarjetas/tarjetaHora';
import TarjetaVentas from '../tarjetas/tarjetaVenta';
import TarjetaAsistencia from '../tarjetas/tarjetaAsistencia';
import CalculadoraDeFechaDePagoPorHora from '../calculadoras/calculadoraFechaDePago/calculadoraDeFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../calculadoras/calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../calculadoras/calculadoraFechaDePago/CalculadoraDeFechaDePagoPorComision';
import GeneradorBoletasDePago from '../generadorBoletas/generadorBoletasPago';
import MetodoDePagoConCheque from '../metodoPago/metodoDePagoConCheque'

let empleados = [];
let boletasEsperadas = [];

describe('Generador de boletas de pago',function(){
    it('recibe todos los empleados y genera sus boletas de pago', function () {
        crearListaDeEmpleados();
        let generadorDeBoletas = new GeneradorBoletasDePago(empleados);
        generadorDeBoletas.generarBoletasDePagoParaTodosLosEmpleados(new Date(2019,5,28));
        let index=0;
        for (let boletaResultante of generadorDeBoletas.boletasGeneradas) {
            let boletaEsperada = boletasEsperadas[index];
            expect(boletaEsperada).equal(boletaResultante);
            index++;
        }
    });

    function crearListaDeEmpleados() {
        let tarjetaAsistencia1 = new TarjetaAsistencia("2019-05-4");
        let tarjetaAsistencia2 = new TarjetaAsistencia("2019-05-5");
        let tarjetaAsistencia3 = new TarjetaAsistencia("2019-05-6");
        let tarjetaAsistencia4 = new TarjetaAsistencia("2019-05-7");
        let tarjetaAsistencia5 = new TarjetaAsistencia("2019-05-8");
        let calculadoraDeSalario1 = new CalculadoraPorFijo(1800,[tarjetaAsistencia1,tarjetaAsistencia2,tarjetaAsistencia3,tarjetaAsistencia4,tarjetaAsistencia5]);;
        let fechaIncioLaboral1 = new Date(2019, 5, 3);
        let calculadoraDeFecha1 = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral1);
        let chequeDePago = new MetodoDePagoConCheque();
        let empleado1 = new Empleado("Erick", 1, calculadoraDeSalario1, calculadoraDeFecha1,chequeDePago);
        let fechaDePago1 = new Date(2019,5,28);
        fechaDePago1.toString();
        let boletaEsperada=`CHEQUE DE PAGO
                      Empleado: Erick
                      Monto: 391
                      Tipo de moneda: Bs
                      Lugar de pago: cochabamba
                      Fecha de pago: ${new Date().getDate()}`;
        
        empleados = [empleado1];
        boletasEsperadas = [boletaEsperada];
    }
});