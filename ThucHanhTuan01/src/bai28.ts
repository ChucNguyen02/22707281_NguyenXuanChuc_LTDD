
export class Animal3 {
    protected makeSound(): void {
        console.log("Some generic animal sound...");
    }


    public doSound(): void {
        this.makeSound();
    }
}


export class Dog3 extends Animal3 {
    protected override makeSound(): void {
        console.log("Woof! Woof!");
    }
}


export class Cat3 extends Animal3 {
    protected override makeSound(): void {
        console.log("Meow! Meow!");
    }
}
