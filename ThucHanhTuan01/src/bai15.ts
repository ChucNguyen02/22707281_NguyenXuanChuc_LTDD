// Book class
export class Book1 {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

// User class
export class User1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Library class
export class Library {
    books: Book1[];
    users: User1[];

    constructor() {
        this.books = [];
        this.users = [];
    }

    // Thêm sách vào thư viện
    addBook(book: Book1): void {
        this.books.push(book);
    }

    // Thêm user vào thư viện
    addUser(user: User1): void {
        this.users.push(user);
    }

    // Hiển thị toàn bộ sách
    showBooks(): void {
        console.log("Books in library:");
        this.books.forEach(book => {
            console.log(`- ${book.title} by ${book.author}`);
        });
    }

    // Hiển thị toàn bộ users
    showUsers(): void {
        console.log("Users in library:");
        this.users.forEach(user => {
            console.log(`- ${user.name}`);
        });
    }
}
