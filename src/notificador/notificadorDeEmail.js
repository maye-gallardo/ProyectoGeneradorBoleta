var nodemailer = require('nodemailer');

class notificadorDeEmail {

  constructor(opcionesDeEnvio) {
    this.conexion;
    this.opcionesDeEnvio=opcionesDeEnvio;
  }

  iniciarConexion() {
    this.conexion = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mauricioqb6@gmail.com',
        pass: 'maurilife-1'
      }
    });
  }

  notificar() {
    this.iniciarConexion();
    let conexionTemp = this.conexion;
    let opcionesDeEnvioTemp = this.opcionesDeEnvio

    let promesa = new Promise(
      function (resolve, reject) {
        conexionTemp.sendMail(opcionesDeEnvioTemp, function (error, info) {
          if (error) {
            resolve("No se envio, Error");
          } else {
            resolve("mensaje enviado");
          }
        });
      }
    );
    return promesa;
  }
}
module.exports = notificadorDeEmail;

