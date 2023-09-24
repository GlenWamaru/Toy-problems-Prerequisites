# Toy Problems and Prerequisites

This repository contains JavaScript solutions to various toy problems and programming challenges. Each challenge is implemented in a separate file, and this README provides an overview of the challenges and instructions on how to run the code.

## Challenges

### Challenge 1: Student Grade Generator

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond to the correct grade, as shown below:
- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40

**File**: `student grade generator.js`

### Challenge 2: Speed Detector

Write a program that takes the speed of a car as input. If the speed is less than 70, it should print "Ok". Otherwise, for every 5 km/h above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points. If the driver gets more than 12 points, the function should print: "License suspended."

**File**: `speed detector.js`

### Challenge 3: Net Salary Calculator

Write a program that calculates an individual's Net Salary by getting the inputs of basic salary and benefits. Calculate the Payee (i.e., Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary based on provided tax rates, NHIF rates, and NSSF rates.

**File**: `net_salary_calculator.js`

## Running the Code

To run the code for each challenge, you can use Node.js. Here's how to run each challenge:

```bash
node grade generator.js
node Net Salarycalculator.js
node speed detector.js
