class Car {
    constructor(year, make, model, miles = 0) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.miles = miles;
    }

    drive(distance) {
        this.miles += distance;
    }
}

const myCar = new Car(2020, 'Toyota', 'Camry');
myCar.drive(100);
console.log(myCar.miles);