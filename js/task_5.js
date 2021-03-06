class Car{
    static getSpecs(car) {
        const { maxSpeed, speed, isOn, distance, price } = car;
        console.log(`maxSpeed: ${ maxSpeed }, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`)
    }

    constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        return this._price = newPrice;
    }

    turnOn() {
        this.isOn = true;
    }    

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        if (value < this.maxSpeed) {
            return this.speed + value;
        }
    }

    decelerate(value) {
        if (this.speed > 0) {
            return this.speed - value;
         }
    }
    
    drive(hours) {
        if (this.isOn) {
            return this.distance = hours * this.speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000