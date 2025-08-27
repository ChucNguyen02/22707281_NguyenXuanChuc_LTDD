export class AnimalBase {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Lớp con Dog kế thừa AnimalBase
export class Dog1 extends AnimalBase {
    bark(): string {
        return this.name + " says: Woof!";
    }
}

// Lớp con Cat kế thừa AnimalBase
export class Cat1 extends AnimalBase {
    meow(): string {
        return this.name + " says: Meow!";
    }
}