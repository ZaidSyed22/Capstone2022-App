// calculate the series of cashflows to the investor
// note "to the investor"; doesn't include initial outlay
// takes in cap rate and series of income payments to the investor
// cap rate is a % and income is an array
import { round } from 'mathjs'

export default function CalcCashFlows(capRate, incomeArray) { 
    let exitValue = incomeArray[incomeArray.length-1] / capRate
    let newArray = [...incomeArray]
    newArray.push(exitValue)

    newArray = newArray.map((value) => round(value, 2))

    return newArray
};