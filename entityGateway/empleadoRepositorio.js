var mongo = require('mongodb');
var url = "mongodb://localhost:27017/";

class empleadoRepositorio{
    constructor(){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            dbo.createCollection("empleados", function(err, res) {
              if (err) throw err;
              console.log("Collection created!");
              db.close();
            });
        });
    }
    insertarEmpleado(empleado){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = empleado;
            dbo.collection("empleados").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
        });
    }
    obtenerEmpleado(empleado_id){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            dbo.collection("empleados").findOne({id: empleado_id}, function(err, result) {
              if (err) throw err;
              console.log(result.name);
              db.close();
            });
          });
    }
    obtenerEmpleados(){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            dbo.collection("empleados").find({}).toArray(function(err, result) {
              if (err) throw err;
              console.log(result);
              db.close();
            });
        });
    }
    eliminarEmpleado(){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myquery = { address: 'Mountain 21' };
            dbo.collection("customers").deleteOne(myquery, function(err, obj) {
              if (err) throw err;
              console.log("1 document deleted");
              db.close();
            });
          });
    }
}

module.exports=empleadoRepositorio;