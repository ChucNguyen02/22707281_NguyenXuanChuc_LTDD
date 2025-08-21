export class Car {
    constructor(public brand:string, public model:string, public year:number) {}

    displayInfor():void{
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`)
    }
}