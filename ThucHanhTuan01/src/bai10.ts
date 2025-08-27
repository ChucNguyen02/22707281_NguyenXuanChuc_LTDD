export class Account {
    public id: string;          // ai cũng truy cập được
    private balance: number;    // chỉ trong class truy cập
    readonly createdAt: Date;   // chỉ gán 1 lần khi tạo, giống final trong Java

    constructor(id: string, initialBalance: number = 0) {
        this.id = id;
        this.balance = initialBalance;
        this.createdAt = new Date();
    }

    // getter cho balance
    public getBalance(): number {
        return this.balance;
    }

    // method nạp tiền
    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền nạp phải > 0");
            return;
        }
        this.balance += amount;
        console.log("Đã nạp " + amount + ", số dư mới: " + this.balance);
    }

    // method rút tiền
    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ số dư!");
            return;
        }
        this.balance -= amount;
        console.log("Đã rút " + amount + ", số dư còn lại: " + this.balance);
    }
}