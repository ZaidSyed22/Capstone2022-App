// function to calculate the net income of the property
// assumes rent is net of operating expenses less vacancy allowance
// takes in rentGrowth, capex, and vacancy as a % value


export default function CalcIncome(rent, rentGrowth, capex, vacancy, periods) {
    let cashFlow = rent * (1-capex) * (1-vacancy)

    let xAxis = [1]
    let yAxis = [cashFlow]

    for(i=2; i<=periods; i++) {
        xAxis.push(i)
        yAxis.push(yAxis[i-2] * (1+rentGrowth))
    }

    return {
        xAxis,
        yAxis
    }
};
