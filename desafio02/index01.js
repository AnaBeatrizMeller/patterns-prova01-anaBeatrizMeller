//Funciona
class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}

//Não funciona
class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}


//adapter
class ModernPaymentAdapter extends LegacyPaymentSystem {
  constructor(modernPayment) {
    super();
    this.modernPayment = modernPayment;
  }

  makePayment(amount) {
    const amountInCents = amount * 100;
    this.modernPayment.process(amountInCents);
  }
}

function pay(system, amount) {
  system.makePayment(amount);
}

const modernPayment = new ModernPaymentAPI();
const adaptedModernPayment = new ModernPaymentAdapter(modernPayment);
pay(adaptedModernPayment, 100);
