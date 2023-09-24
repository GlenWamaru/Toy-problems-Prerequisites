
const readline = require('readline');

// Function to calculate and print demerit points based on speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        if (demeritPoints >= 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter the car\'s speed (in km/h): ', (input) => {
    const speed = parseFloat(input);

    if (isNaN(speed) || speed < 0) {
        console.log('Invalid input. Please enter a valid speed.');
    } else {
        calculateDemeritPoints(speed);
    }

    rl.close();
});
