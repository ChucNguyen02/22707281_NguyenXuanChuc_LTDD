export class BankAccount {
    private balance: number; // số dư tài khoản

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    // Nạp tiền
    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền nạp phải > 0");
            return;
        }
        this.balance += amount;
        console.log("Đã nạp: " + amount + ", Số dư hiện tại: " + this.balance);
    }

    // Rút tiền
    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ số dư để rút!");
            return;
        }
        this.balance -= amount;
        console.log("Đã rút: " + amount + ", Số dư hiện tại: " + this.balance);
    }

    // Xem số dư
    getBalance(): number {
        return this.balance;
    }
}