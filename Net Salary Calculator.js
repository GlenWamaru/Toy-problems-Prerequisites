// Function to calculate Payee (Tax) based on the provided tax brackets
function calculatePayee(income) {
    // PAYE tax rates based on the provided data
    const taxBrackets = [
        { min: 0, max: 24000, rate: 10.0 },
        { min: 24001, max: 32333, rate: 25.0 },
        { min: 32334, max: 500000, rate: 30.0 },
        { min: 500001, max: 800000, rate: 32.5 },
        { min: 800001, max: Infinity, rate: 35.0 },
    ];

    let payee = 0;
    let remainingIncome = income;

    for (const bracket of taxBrackets) {
        if (remainingIncome <= 0) {
            break;
        }

        const taxableIncomeInBracket = Math.min(remainingIncome, bracket.max - bracket.min);
        payee += (taxableIncomeInBracket * (bracket.rate / 100));
        remainingIncome -= taxableIncomeInBracket;
    }

    return payee;
}

// Function to calculate NHIF Deductions based on income
function calculateNHIF(income) {
    // NHIF deductions based on the provided data
    const nhifDeductions = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 59999, deduction: 1100 },
        { min: 60000, max: 69999, deduction: 1200 },
        { min: 70000, max: 79999, deduction: 1300 },
        { min: 80000, max: 89999, deduction: 1400 },
        { min: 90000, max: 99999, deduction: 1500 },
        { min: 100000, max: Infinity, deduction: 1600 },
    ];

    for (const deduction of nhifDeductions) {
        if (income >= deduction.min && income <= deduction.max) {
            return deduction.deduction;
        }
    }

    return 0;
}

// Function to calculate NSSF Deductions based on income
function calculateNSSF(income) {
    // NSSF rate based on the provided data
    const nssfRate = 0.06; // 6% of income

    return income * nssfRate;
}

// Function to calculate and print Net Salary
function calculateNetSalary(basicSalary, benefits) {
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // Calculate Payee (Tax)
    const payee = calculatePayee(grossSalary);

    // Calculate NHIF Deductions
    const nhifDeductions = calculateNHIF(grossSalary);

    // Calculate NSSF Deductions
    const nssfDeductions = calculateNSSF(grossSalary);

    // Calculate Net Salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
    console.log(`Payee (Tax): Ksh ${payee.toFixed(2)}`);
    console.log(`NHIF Deductions: Ksh ${nhifDeductions.toFixed(2)}`);
    console.log(`NSSF Deductions: Ksh ${nssfDeductions.toFixed(2)}`);
    console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
}

// Example usage
const basicSalary = 60000; // Replace with the actual basic salary
const benefits = 10000; // Replace with the actual benefits
calculateNetSalary(basicSalary, benefits);
