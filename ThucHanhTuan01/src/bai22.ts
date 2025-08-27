export class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // Thêm phần tử vào stack
    push(item: T): void {
        this.items.push(item);
    }

    // Lấy phần tử ra (và xóa khỏi stack)
    pop(): T | undefined {
        return this.items.pop();
    }

    // Xem phần tử trên cùng mà không xóa
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Kiểm tra stack rỗng
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
