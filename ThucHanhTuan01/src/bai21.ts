// Generic Repository class
export class Repository<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // Thêm item
    add(item: T): void {
        this.items.push(item);
    }

    // Lấy tất cả item
    getAll(): T[] {
        return this.items;
    }
}
