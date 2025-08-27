export class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Tính diện tích
    getArea(): number {
        return this.width * this.height;
    }

    // Tính chu vi
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    displayInfo(): void {
        console.log(
            "Width: " + this.width +
            ", Height: " + this.height +
            ", Area: " + this.getArea() +
            ", Perimeter: " + this.getPerimeter()
        );
    }
}