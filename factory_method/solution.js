class DebitCardNotification {
    pay(type, amount) {
        console.log(`Pagando com ${type} e quantidade ${amount} reais`);
    }
};

class CreditCardNotification {
    pay(type, amount) {
        console.log(`Pagando com ${type} e quantidade ${amount} reais`);
    }
};

class PaymentNotification {
    static types = {
        debito: DebitCardNotification,
        credito: CreditCardNotification
    }

    static createNotification(type) {
        const NotificationClass = this.types[type];
        if (!NotificationClass) {
        throw new Error("Tipo de notificação ainda não suportado");
        }
        return new NotificationClass();
        }
}

function main() {
     const notifications = ["debito", "credito"];
    const amount = 150;

    try {
        notifications.forEach((type) => {
            const notification = PaymentNotification.createNotification(type);
            notification.pay(type, amount);
        }); 
    } catch (err) {
        console.error("Erro ao enviar...", err.message);
    }
}

main();
    

