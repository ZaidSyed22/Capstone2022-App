// calculate the series of cashflows to the investor
// note "to the investor"; doesn't include initial outlay
// takes in cap rate and series of income payments to the investor

// cap rate is a % and income is an array

export default function CalcCashFlows(capRate, incomeArray) { 
    let exitValue = incomeArray[incomeArray.length-1] / capRate

    let cashFlows = incomeArray.push(exitValue)

    return cashFlows
};