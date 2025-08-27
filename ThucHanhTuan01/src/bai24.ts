
export abstract class Appliance {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract turnOn(): void;
}

export class Fan extends Appliance {
    constructor(name: string) {
        super(name);
    }

    turnOn(): void {
        console.log(`${this.name} is now blowing cool air.`);
    }
}

export class AirConditioner extends Appliance {
    constructor(name: string) {
        super(name);
    }

    turnOn(): void {
        console.log(`${this.name} is cooling the room.`);
    }
}
