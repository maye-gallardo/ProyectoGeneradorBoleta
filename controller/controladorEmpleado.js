const Repositorio = require('../repositories/empleadoRepositorio')
const repo = new Repositorio();


exports.obtenerEmpleado = async (req, res, next) => {
    await repo.conectarse();
    var id = req.params.id;
    console.log(id);
    console.log(await repo.obtenerEmpleado(id));
};

exports.obtenerEmpleados = async (req, res, next) => {
    repo = new Repositorio();
    await repo.conectarse();
    let empleados = await repo.obtenerEmpleados();
    await repo.desconectarse();
    empleados.forEach(empleado => {
        res.send(empleado);
    });
};

exports.crearEmpleado = async (req, res, next) => {
    repo = new Repositorio();
    await repo.conectarse();
    empleado = await repo.crearEmpleado(req.body);
    await repo.desconectarse();
    res.send(empleado);
};

exports.eliminarEmpleado = (req) => {

};