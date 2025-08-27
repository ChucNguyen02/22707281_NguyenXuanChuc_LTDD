// Generic class Box
export class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    // Lấy giá trị
    getValue(): T {
        return this.value;
    }

    // Gán lại giá trị
    setValue(newValue: T): void {
        this.value = newValue;
    }
}
