import { Person } from './bai1';
import { Student } from './bai2';
import { Car } from './bai3';

// bai 1
console.log("Bai 1:");
const person = new Person("Alice", 25);
person.displayInfo();

// bai 2
console.log("Bai 2:");
const student = new Student("John", 21, "8.5");
student.displayAllInfo();

// bai 3
console.log("Bai 3:");
const car = new Car("Vinvast", "Vf9", 2023);
car.displayInfor();