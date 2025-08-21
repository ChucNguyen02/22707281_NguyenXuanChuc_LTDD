import { Person } from './bai1';
import { Student } from './bai2';

// bai 1
console.log("Bai 1:");
const person = new Person("Alice", 25);
person.displayInfo();

// bai 2
console.log("Bai 2:");
const student = new Student("John", 21, "8.5");
student.displayAllInfo();