class UberCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKm, timeInMinutes) {
        const fare = this.baseFare + (distanceInKm * this.costPerKm) + (timeInMinutes * this.costPerMinute);
        return fare;
    }
}

let uberCalculator = new UberCalculator(5, 2, 0.5); // Example values, adjust as needed

let distance = 10; // 10 kilometers
let time = 20; // 20 minutes

let totalFare = uberCalculator.calculatePrice(distance, time);

console.log(`The total fare is $${totalFare}`);
//The total fare is $45
