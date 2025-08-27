// Vehicle interface
export interface Vehicle1 {
    brand: string;
    speed: number;

    move(): void;
}

// Car class implements Vehicle
export class Car1 implements Vehicle1 {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    move(): void {
        console.log(`${this.brand} car is moving at ${this.speed} km/h`);
    }
}

// Bike class implements Vehicle
export class Bike1 implements Vehicle1 {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    move(): void {
        console.log(`${this.brand} bike is moving at ${this.speed} km/h`);
    }
}
