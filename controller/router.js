const empleado = require('./controladorEmpleado');

class router{
    static routes(app){
        app.route('/empleado')
        .get(empleado.obtenerEmpleados)
        .post(empleado.crearEmpleado)
        .delete(empleado.eliminarEmpleado);
        app.route('/empleado/:id')
        .get(empleado.obtenerEmpleado)
    }
}

module.exports = router;