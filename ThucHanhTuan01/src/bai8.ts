export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    displayInfo(): void {
        console.log("Product: " + this.name + ", Price: " + this.price);
    }
}

export function filterExpensiveProducts(products: Product[]): Product[] {
    return products.filter(p => p.price > 100);
}