
export interface Movable {
    move(): void;
}

export class Car3 implements Movable {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    move(): void {
        console.log(`${this.brand} car is driving on the road.`);
    }
}


export class Robot implements Movable {
    model: string;

    constructor(model: string) {
        this.model = model;
    }

    move(): void {
        console.log(`Robot ${this.model} is walking forward.`);
    }
}
