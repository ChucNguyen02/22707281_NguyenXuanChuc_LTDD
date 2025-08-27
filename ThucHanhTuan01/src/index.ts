import { Person } from './bai1';
import { Student } from './bai2';
import { Car } from './bai3';
import { Rectangle } from './bai4';
import { BankAccount } from './bai5';
import { Book } from './bai6';
import { User } from './bai7';
import { Product, filterExpensiveProducts } from './bai8';
import { Dog, Cat, Animal } from './bai9';
import { Account } from './bai10';
import { Dog1, Cat1 } from './bai11';
import { Bird, Fish } from './bai12';
import { Square, Circle } from './bai13';
import { Manager, Developer } from './bai14';
import { Book1, User1, Library } from "./bai15";
import { Box } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { Animal2, Dog2, Cat2 } from "./bai19";
import { Car1, Bike1, Vehicle1 } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { Payment, CashPayment, CardPayment } from "./bai23";
import { Fan, AirConditioner } from "./bai24";
import { Shape } from "./bai25";
import { Product3, Order } from "./bai26";
import { Teacher } from "./bai27";
import { Animal3, Dog3, Cat3 } from "./bai28";
import { Car3, Robot, Movable } from "./bai29";
import { School, Student2, Teacher2 } from "./bai30";

// bai 1

console.log("Bai 1:");
const person = new Person("Alice", 25);
person.displayInfo();

//bai2

console.log("Bai 2:");
const p = new Person("Alice", 25);
p.displayInfo();

const s = new Student("Bob", 20, "A");
s.displayAll();

// //bai3

console.log("Bai 3:");
const myCar = new Car("Toyota", "Camry", 2024);
myCar.displayInfo(); 

// //bai4

console.log("Bai 4:");
const rect = new Rectangle(5, 10);
rect.displayInfo();


// //bai5

console.log("Bai 5:");
const account = new BankAccount(1000);
console.log("Số dư ban đầu: " + account.getBalance());

account.deposit(500);
account.withdraw(300);
account.withdraw(2000); // thử rút quá số dư


// //bai6

console.log("Bai 6:");
const book1 = new Book("Clean Code", "Robert C. Martin", 2008);
book1.displayInfo();

const book2 = new Book("Effective Java", "Joshua Bloch", 2018);
book2.displayInfo();


// //bai7

console.log("Bai 7:");
const user1 = new User("Alice");
user1.displayInfo(); // User name: Alice

console.log("Tên hiện tại:", user1.getName());

user1.setName("Bob");
console.log("Tên mới:", user1.getName());

user1.setName(""); // thử set tên trống để xem thông báo
user1.displayInfo();


// //bai8

console.log("Bai 8:");

const products: Product[] = [
    new Product("Pen", 10),
    new Product("Headphones", 250),
    new Product("Backpack", 120),
    new Product("Notebook", 50)
];

// In toàn bộ sản phẩm
console.log("Tất cả sản phẩm:");
products.forEach(p => p.displayInfo());

// Lọc sản phẩm có giá > 100
const expensiveProducts = filterExpensiveProducts(products);
console.log("\nSản phẩm có giá > 100:");
expensiveProducts.forEach(p => p.displayInfo());


// //bai9

console.log("Bai 9:");

const animals: Animal[] = [
    new Dog("Rex"),
    new Cat("Mimi")
];

// Duyệt mảng và gọi sound()
animals.forEach(a => {
    console.log(a.sound());
});


// //bai10
console.log("Bai 10:");

const acc = new Account("AC001", 500);
console.log("ID:", acc.id);
console.log("Ngày tạo:", acc.createdAt); // readonly, không thể gán lại

console.log("Số dư ban đầu:", acc.getBalance());
acc.deposit(200);
acc.withdraw(100);
acc.withdraw(1000); // rút quá số dư

// acc.createdAt = new Date(); // Lỗi: readonly không thể gán lại


// //bai11

console.log("Bai 11:");
const dog = new Dog1("Rex");
console.log(dog.bark());

const cat = new Cat1("Mimi");
console.log(cat.meow());


// //bai12

console.log("Bai 12:");
const bird = new Bird("Eagle");
console.log(bird.fly());

const fish = new Fish("Nemo");
console.log(fish.swim());


// //bai13
console.log("Bai 13:");

const square = new Square(5);
console.log("Square area:", square.area());

const circle = new Circle(3);
console.log("Circle area:", circle.area());


// //bai14

console.log("Bai 14:");
const manager = new Manager("Alice", 8000, "Sales");
manager.displayInfo();

const dev = new Developer("Bob", 6000, "TypeScript");
dev.displayInfo();


// //bai15

console.log("Bai 15:");
const library = new Library();

const book3 = new Book1("The Hobbit", "J.R.R. Tolkien");
const book4 = new Book1("1984", "George Orwell");
const user3 = new User1("Alice");
const user4 = new User1("Bob");

library.addBook(book3);
library.addBook(book4);
library.addUser(user3);
library.addUser(user4);

library.showBooks();

library.showUsers();


// //bai16
console.log("Bai 16:");

// Box chứa số
const numberBox = new Box<number>(100);
console.log("Number in box:", numberBox.getValue()); // Output: 100

// Box chứa chuỗi
const stringBox = new Box<string>("Hello TypeScript");
console.log("String in box:", stringBox.getValue()); // Output: Hello TypeScript

// Box chứa đối tượng
type Person1 = { name: string; age: number };
const personBox = new Box<Person1>({ name: "Alice", age: 25 });
console.log("Person in box:", personBox.getValue()); // Output: { name: 'Alice', age: 25 }


// //bai17
console.log("Bai 17:");

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("This is the first log message.");
logger2.log("This is the second log message.");

console.log("Same instance?", logger1 === logger2); 


//bai18
console.log("Bai 18:");

console.log("Add:", MathUtil.add(10, 5));        // 15
console.log("Subtract:", MathUtil.subtract(10, 5)); // 5
console.log("Multiply:", MathUtil.multiply(10, 5)); // 50
console.log("Divide:", MathUtil.divide(10, 5));     // 2


// //bai19

console.log("Bai 19:");
const animals2: Animal2[] = [
    new Dog2(),
    new Cat2(),
    new Animal2()
];

animals2.forEach(animal => {
    animal.makeSound();
});

// //bai20
console.log("Bai 20:");
const car: Vehicle1 = new Car1("Toyota", 120);
const bike: Vehicle1 = new Bike1("Yamaha", 80);

car.move();   // Output: Toyota car is moving at 120 km/h
bike.move();  // Output: Yamaha bike is moving at 80 km/h


// //bai21

console.log("Bai 21:");
// Repository cho số
const numberRepo = new Repository<number>();
numberRepo.add(10);
numberRepo.add(20);
console.log("Numbers:", numberRepo.getAll()); // [10, 20]

// Repository cho chuỗi
const stringRepo = new Repository<string>();
stringRepo.add("Alice");
stringRepo.add("Bob");
console.log("Strings:", stringRepo.getAll()); // ["Alice", "Bob"]

// Repository cho đối tượng
type Product1 = { id: number; name: string; price: number };
const productRepo = new Repository<Product1>();
productRepo.add({ id: 1, name: "Laptop", price: 1200 });
productRepo.add({ id: 2, name: "Mouse", price: 25 });

console.log("Products:", productRepo.getAll());


// //bai22
console.log("Bai 22:");

const numberStack = new Stack<number>();

console.log("Is empty?", numberStack.isEmpty()); // true

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log("Peek:", numberStack.peek()); // 30
console.log("Pop:", numberStack.pop());   // 30
console.log("Peek after pop:", numberStack.peek()); // 20
console.log("Is empty?", numberStack.isEmpty());    // false

// Stack cho chuỗi
const stringStack = new Stack<string>();
stringStack.push("Alice");
stringStack.push("Bob");

console.log("String peek:", stringStack.peek());


// //bai23
console.log("Bai 23:");

const cash: Payment = new CashPayment();
cash.pay(100); 
// Output: Paid $100 in cash.

const card: Payment = new CardPayment("1234-5678-9876-5432");
card.pay(250); 


// //bai24

console.log("Bai 24:");
const fan = new Fan("Living Room Fan");
const ac = new AirConditioner("Bedroom AC");

fan.turnOn(); 
ac.turnOn();  


// //bai25
console.log("Bai 25:");

Shape.describe();
// Output: Shapes are geometric figures such as circles, squares, and triangles.


// //bai26
console.log("Bai 26:");

const order = new Order();

order.addProduct(new Product3("Laptop", 1200));
order.addProduct(new Product3("Mouse", 50));
order.addProduct(new Product3("Keyboard", 100));

console.log("Total Order Price: $" + order.calculateTotal());
// Output: Total Order Price: $1350


// //bai27
console.log("Bai 27:");

const teacher = new Teacher("Alice", 35, "Mathematics");

teacher.displayInfo();   // Output: Name: Alice, Age: 35
teacher.introduce();

//bai28
console.log("Bai 28:");
const dog3: Animal3 = new Dog3();
const cat3: Animal3 = new Cat3();
const genericAnimal: Animal3 = new Animal3();

dog3.doSound();       
cat3.doSound();      
genericAnimal.doSound(); 

//bai29
console.log("Bai 29:");
const car3: Movable = new Car3("Toyota");
const robot: Movable = new Robot("RX-78");

car3.move();   
robot.move();

//bai30
console.log("Bai 30:");
const school = new School();

const teacher1 = new Teacher2("Alice", "Math");
const teacher2 = new Teacher2("Bob", "Physics");

const student1 = new Student2("Charlie", 15);
const student2 = new Student2("Diana", 16);

school.addTeacher(teacher1);
school.addTeacher(teacher2);

school.addStudent(student1);
school.addStudent(student2);

school.displayInfo();