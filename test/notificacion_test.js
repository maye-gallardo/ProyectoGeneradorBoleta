var expect = require('chai').expect
import notificador from '../src/notificador/notificador'
import notificadorDeEmail from '../src/notificador/notificadorDeEmail';
import notificadorDeFacebook from '../src/notificador/notificadorDeFacebook';
import notificadorDeWhatsapp from '../src/notificador/notificadorDeWhatsapp';

describe('notificaciones', function () {

    it('Notificacion para Gmail', async function () {
        this.timeout(50000);
        let opcionesDeEnvio = {
            from: 'juantopex123@gmail.com',
            to: 'edwinatahuichi92@gmail.com',
            subject: 'Boleta de Pago 1',
            text: 'La descripccion de la boleta de pago sera enviando en este campo'
          };
        let miNotificador = new notificador();
        miNotificador = new notificadorDeEmail(opcionesDeEnvio);
        let respuesta= await miNotificador.notificar();
        expect(respuesta).equal("mensaje enviado");
    });


    it('Notificacion para Facebook',  function () {
        let opcionesDeEnvio = {
            from: 'juantopex123@gmail.com',
            to: 'https://www.facebook.com/edwin.atahuichi',
            subject: 'Boleta de Pago 3',
            text: 'La descripccion de la boleta de pago sera enviando en este campo'
          };
        let miNotificador = new notificador();
        miNotificador = new notificadorDeFacebook(opcionesDeEnvio);
        let respuesta = miNotificador.notificar();
        expect(respuesta).equal("mensaje enviado");
    });

    it('Notificacion para WhatsApp',  function () {
        let opcionesDeEnvio = {
            from: 'juantopex123@gmail.com',
            to: '74320193',
            subject: 'Boleta de Pago 4',
            text: 'La descripccion de la boleta de pago sera enviando en este campo'
          };
          let miNotificador = new notificador();
          miNotificador = new notificadorDeWhatsapp(opcionesDeEnvio);
          let respuesta = miNotificador.notificar();
          expect(respuesta).equal("mensaje enviado");
    });

});