export class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
}

export class Manager extends Employee {
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    override displayInfo(): void {
        console.log(
            `Manager Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
        );
    }
}

export class Developer extends Employee {
    programmingLanguage: string;

    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    override displayInfo(): void {
        console.log(
            `Developer Name: ${this.name}, Salary: ${this.salary}, Language: ${this.programmingLanguage}`
        );
    }
}