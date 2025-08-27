export interface Flyable {
    fly(): string;
}

export interface Swimmable {
    swim(): string;
}

// Lớp Bird implements Flyable
export class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    fly(): string {
        return this.name + " is flying in the sky!";
    }
}

// Lớp Fish implements Swimmable
export class Fish implements Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    swim(): string {
        return this.name + " is swimming in the water!";
    }
}