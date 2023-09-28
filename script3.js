
//  4)  write a class to calculate the uber price 


class UberCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKilometers, durationInMinutes) {
        const distanceCost = distanceInKilometers * this.costPerKilometer;
        const timeCost = durationInMinutes * this.costPerMinute;

        return this.baseFare + distanceCost + timeCost;
    }
}

// Example Usage:
const calculator = new UberCalculator(5, 1.5, 0.2); // Example rates

const distance = 10; // Distance in kilometers
const duration = 20; // Duration in minutes

const estimatedPrice = calculator.calculatePrice(distance, duration);

console.log(`Estimated Uber Price: $${estimatedPrice}`);