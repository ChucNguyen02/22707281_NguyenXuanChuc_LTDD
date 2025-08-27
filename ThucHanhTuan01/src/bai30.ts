// Student class
export class Student2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getInfo(): string {
        return `Student: ${this.name}, Age: ${this.age}`;
    }
}

// Teacher class
export class Teacher2 {
    name: string;
    subject: string;

    constructor(name: string, subject: string) {
        this.name = name;
        this.subject = subject;
    }

    getInfo(): string {
        return `Teacher: ${this.name}, Subject: ${this.subject}`;
    }
}

// School class
export class School {
    students: Student2[];
    teachers: Teacher2[];

    constructor() {
        this.students = [];
        this.teachers = [];
    }

    addStudent(student: Student2): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher2): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("School Information:");

        console.log("\nTeachers:");
        this.teachers.forEach(t => console.log(t.getInfo()));

        console.log("\nStudents:");
        this.students.forEach(s => console.log(s.getInfo()));
    }
}
