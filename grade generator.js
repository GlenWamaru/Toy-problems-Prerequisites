const readline = require('readline');

// Function to calculate and return the grade based on the input mark
function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Function to get user input and display the corresponding grade
function getStudentGrade() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the student\'s mark (between 0 and 100): ', (input) => {
        const mark = parseFloat(input);

        if (isNaN(mark) || mark < 0 || mark > 100) {
            console.log('Invalid input. Please enter a valid mark between 0 and 100.');
        } else {
            const grade = calculateGrade(mark);
            console.log(`The student's grade is: ${grade}`);
        }

        rl.close();
    });
}

// Call the function to start the program
getStudentGrade();
