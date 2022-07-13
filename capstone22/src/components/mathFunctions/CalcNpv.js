// calculates the net present value (NPV) of an investment
// takes in the initial investment/outlay, periodic cashFlows (an array), and an interest rate (i.e., cost of capital)
// interest rate (r) taken as a %
// initial outlay taken as a positive value, automatically converted negative

export default function CalcNpv(initialOutlay, cashFlows, r) {
    let n = cashFlows.length

    let pvOfCashFlows = [-initialOutlay]

    for(i=0; i<n; i++) {
        let factor = (1+r)**(1/(i+1))
        let pv = cashFlows[i] * factor

        pvOfCashFlows.push(pv)
    }

    let npv = pvOfCashFlows.reduce(a, b => a + b)

    return npv
};