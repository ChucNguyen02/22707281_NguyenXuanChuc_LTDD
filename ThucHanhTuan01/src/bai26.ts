
export class Product3 {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}


export class Order {
    products: Product3[];

    constructor() {
        this.products = [];
    }

    addProduct(product: Product3): void {
        this.products.push(product);
    }

    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
