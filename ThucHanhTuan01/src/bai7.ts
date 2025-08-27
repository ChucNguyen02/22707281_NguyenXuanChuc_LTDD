export class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        if (!newName || newName.trim().length === 0) {
            console.log("Tên không hợp lệ!");
            return;
        }
        this.name = newName;
    }

    displayInfo(): void {
        console.log("User name: " + this.name);
    }
}