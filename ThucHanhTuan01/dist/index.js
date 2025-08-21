"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
// bai 1
console.log("Bai 1:");
const person = new bai1_1.Person("Alice", 25);
person.displayInfo();
// bai 2
console.log("Bai 2:");
const student = new bai2_1.Student("John", 21, "8.5");
student.displayAllInfo();
