import { createContext, useState } from "react";

export const CalcContext = createContext();

export function CalcProvider({children}){
    // rent, rentGrowth, capex, vacancy, periods
    const [rent, setRent] = useState();
    const [rentGrowth, setRentGrowth] = useState();
    const [capex, setCapex] = useState();
    const [vacancy, setVacancy] = useState();
    const [period, setPeriod] = useState();
    const [purchasePrice, setPurchasePrice] = useState();
    const [capRate, setCapRate] = useState();

    function updateRent(newValue) {
        setRent(newValue)
    };
    function updateRentGrowth(newValue) {
        setRentGrowth(newValue)
    };
    function updateCapex(newValue) {
        setCapex(newValue)
    };
    function updateVacancy(newValue) {
        setVacancy(newValue)
    };
    function updatePeriod(newValue) {
        setPeriod(newValue)
    };
    function updatePurchasePrice(newValue) {
        setPurchasePrice(newValue)
    };
    function udpateCapRate(newValue) {
        setCapRate(newValue)
    };

    return(
        <CalcContext.Provider value={{
            rent,
            rentGrowth,
            capex,
            vacancy,
            period,
            purchasePrice,
            capRate,
            updateRent,
            updateRentGrowth,
            updateCapex,
            updateVacancy,
            updatePeriod,
            updatePurchasePrice,
            udpateCapRate
        }}>
            {children}
        </CalcContext.Provider>
    );
};