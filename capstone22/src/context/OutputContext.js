import { createContext, useState } from "react";

export const OutputContext = createContext();

export function OutputProvider({children}){
    const [propertyIncome, setPropertyIncome] = useState();
    const [propertyCashFlows, setPropertyCashFlows] = useState();
    const [propertyNpv, setPropertyNpv] = useState(0);
    const [years, setYears] = useState()

    function updatePropertyIncome(newValue) {
        setPropertyIncome(newValue)
    };
    function updatePropertyCashFlows(newValue) {
        setPropertyCashFlows(newValue)
    };
    function updatePropertyNpv(newValue) {
        setPropertyNpv(newValue)
    };
    function updateYears(newValue) {
        setYears(newValue)
    };
    
    return(
        <OutputContext.Provider value={{
            propertyIncome,
            propertyCashFlows,
            propertyNpv,
            years,
            updatePropertyIncome,
            updatePropertyCashFlows,
            updatePropertyNpv,
            updateYears
        }}>
            {children}
        </OutputContext.Provider>
    );
};