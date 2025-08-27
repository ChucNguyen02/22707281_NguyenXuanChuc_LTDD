// Base class
export class Animal2 {
    makeSound(): void {
        console.log("Some generic animal sound...");
    }
}

// Subclass Dog
export class Dog2 extends Animal2 {
    override makeSound(): void {
        console.log("Woof! Woof!");
    }
}

// Subclass Cat
export class Cat2 extends Animal2 {
    override makeSound(): void {
        console.log("Meow! Meow!");
    }
}
