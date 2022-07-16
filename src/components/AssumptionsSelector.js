// helper function that chooses assumptions based on property class

export default function AssumptionsSelector(propertyClass) {
    let assumptionsObj = {}
    
    let vacancyRate = ''
    let capex = ''
    let capRate = ''
    let costOfCapital = ''
    
    if(propertyClass === 'A') {
        vacancyRate = 0.05
        capex = 0.05
        capRate = 0.04
        costOfCapital = 0.06
    } else if (propertyClass === 'B') {
        vacancyRate = 0.10
        capex = 0.10
        capRate = 0.06
        costOfCapital = 0.065
    } else if (propertyClass === 'C') {
        vacancyRate = 0.15
        capex = 0.15
        capRate = 0.08
        costOfCapital = 0.07
    };

    assumptionsObj.vacancyRate = vacancyRate
    assumptionsObj.capex = capex
    assumptionsObj.capRate = capRate
    assumptionsObj.costOfCapital = costOfCapital

    return assumptionsObj
};