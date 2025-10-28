// Interface interna do sistema
class Notifier {
  send(message) {
    console.log(`Notificação enviada: ${message}`);
  }
}

// Biblioteca externa (incompatível com o sistema)
class SMSService {
  sendSMS(text) {
    console.log(`SMS enviado: ${text}`);
  }
}

// Cliente
function notifyUser(notifier, message) {
  notifier.send(message);
}


//Adapter
class SMSServiceAdapter extends Notifier {
  constructor(smsService) {
    super();
    this.smsService = smsService;
  }

  send(message) {
    // Adaptando o método
    this.smsService.sendSMS(message);
  }
}

const notificacao = new Notifier();
notifyUser(notificacao, "Bom dia")


const smsService = new SMSService()
const mensagemAdaptada = new SMSServiceAdapter(smsService);
notifyUser(mensagemAdaptada, "Hello")