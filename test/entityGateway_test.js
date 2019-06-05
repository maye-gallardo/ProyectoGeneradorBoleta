var expect = require('chai').expect
import repositorio from '../repositories/empleadoRepositorio';
import Empleado from '../src/empleado.js';
import CalculadoraPorFijo from '../src/calculadoras/calculadoraSalario/calculadoraPorFijo';
import TarjetaAsistencia from '../src/tarjetas/tarjetaAsistencia';
import CalculadoraDeFechaDePagoFijo from '../src/calculadoras/calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';

describe('',function(){
    let repo;
    let empleado;
    before(async function() {
        let tarjetaAsistencia = new TarjetaAsistencia("2019-03-22");
        let calculadora = new CalculadoraPorFijo(1800,[tarjetaAsistencia]);;
        let fechaIncioLaboral = new Date(2019, 3, 22);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,"Deposito",null,false);
        repo = new repositorio();
        await repo.conectarse();
    });
    it('insertar un empleado', async function () {
        expect(await repo.insertarEmpleado(empleado)).equal(true);
    });
    it('obtener un empleado', async function () {
        expect(await repo.obtenerEmpleado(1)).eql(empleado);
    });
    it('obtener todos los empleados', async function () {
        let listaDeEmpleados = await repo.obtenerEmpleados();
        listaDeEmpleados.forEach(empleadoResultante => {
            expect(empleadoResultante).eql({empleado});
        }); 
    });
    it('eliminar un empleado', async function () {
        expect(await repo.eliminarEmpleado(1)).equal(true);
    });
});