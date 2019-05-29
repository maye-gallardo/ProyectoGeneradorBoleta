const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
var mydb = "mydb";
var collection = "empleados";

class empleadoRepositorio{
    constructor(){
      this.cliente = new MongoClient(url, { useNewUrlParser: true });
      this.baseDeDatos;
      this.coleccion;
    }

    async conectarse(){
      await this.cliente.connect(); 
      this.baseDeDatos = this.cliente.db(mydb);
      this.coleccion = this.baseDeDatos.collection(collection);
    }

    async insertarEmpleado(empleado){
      let seInserto = await this.coleccion.insertOne({_id:empleado.obtenerCi(), empleado})
        .then(() => {return true;})
        .catch(() => {return false;});
      return seInserto;
    }

    async eliminarEmpleado(empleado_id){
      let seElimino = await this.coleccion.deleteOne({_id: empleado_id})
        .then(() => {return true;})
        .catch(() => {return false;});
      return seElimino;
    }

    async obtenerEmpleado(empleado_id){
      let result =  await this.coleccion.findOne({_id: empleado_id});
      return result.empleado;
    }

    async obtenerEmpleados(){
      let listaEmpleados= await this.coleccion.find({},  { projection: { _id: 0, empleado:1 } });
      return listaEmpleados;
    }

    async desconectarse(){
      await this.cliente.close();
    }

}

module.exports = empleadoRepositorio;