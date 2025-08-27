// Payment interface
export interface Payment {
    pay(amount: number): void;
}

// CashPayment implements Payment
export class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid $${amount} in cash.`);
    }
}

// CardPayment implements Payment
export class CardPayment implements Payment {
    private cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    pay(amount: number): void {
        console.log(`Paid $${amount} using card ${this.cardNumber}.`);
    }
}
