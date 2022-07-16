// function to calculate the net income of the property
// assumes rent is net of operating expenses less vacancy allowance
// takes in rentGrowth, capex, and vacancy as a % value
import { round } from 'mathjs'

export default function CalcIncome(rentalIncome, rentGrowth, capex, vacancyRate, period) {
    let netIncome = rentalIncome * (1-capex) * (1-vacancyRate) 

    let yearsArray = [1]
    let incomeArray = [netIncome]

    for(let i=2; i<=period; i++) {
        yearsArray.push(i)
        incomeArray.push(incomeArray[i-2] * (1+rentGrowth))
    }

    yearsArray = yearsArray.map((value) => round(value, 2))
    incomeArray = incomeArray.map((value) => round(value, 2))

    return {
        yearsArray,
        incomeArray
    }
};
