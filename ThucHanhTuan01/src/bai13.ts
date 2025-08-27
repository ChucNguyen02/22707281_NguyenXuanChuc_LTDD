export abstract class Shape {
    // phương thức trừu tượng: không có body, lớp con phải override
    abstract area(): number;
}

export class Square extends Shape {
    side: number;

    constructor(side: number) {
        super(); 
        this.side = side;
    }

    // override phương thức area
    area(): number {
        return this.side * this.side;
    }
}

export class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}