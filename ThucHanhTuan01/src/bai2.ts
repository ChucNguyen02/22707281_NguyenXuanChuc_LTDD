import { Person } from './bai1';

export class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
        super(name, age);
    }

    displayAllInfo(): void {
        this.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}