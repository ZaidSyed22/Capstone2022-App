import { createContext, useState } from "react";

export const InputContext = createContext();

export function InputProvider({children}){
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [zip, setZip] = useState()
    const [squareFeet, setSquareFeet] = useState()
    const [units, setUnits] = useState()
    const [rentPsf, setRentPsf] = useState()
    const [purchasePrice, setPurchasePrice] = useState();
    const [rentGrowth, setRentGrowth] = useState();
    const [capex, setCapex] = useState();
    const [vacancyRate, setVacancyRate] = useState();
    const [period, setPeriod] = useState();
    const [capRate, setCapRate] = useState();
    const [costOfCapital, setCostOfCapital] = useState();

    function updateAddress(newValue) {
        setAddress(newValue)
    };
    function updateCity(newValue) {
        setCity(newValue)
    };
    function updateState(newValue) {
        setState(newValue)
    };
    function updateZip(newValue) {
        setZip(newValue)
    };
    function updateSquareFeet(newValue) {
        setSquareFeet(newValue)
    };
    function updateUnits(newValue) {
        setUnits(newValue)
    };
    function updateRentPsf(newValue) {
        setRentPsf(newValue)
    };
    function updateRentGrowth(newValue) {
        setRentGrowth(newValue)
    };
    function updateCapex(newValue) {
        setCapex(newValue)
    };
    function updateVacancyRate(newValue) {
        setVacancyRate(newValue)
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
    function updateCostOfCapital(newValue) {
        setCostOfCapital(newValue)
    };

    return(
        <InputContext.Provider value={{
            address,
            city,
            state,
            zip,
            squareFeet,
            units,                  
            rentPsf,
            rentGrowth,
            capex,
            vacancyRate,
            period,
            purchasePrice,
            capRate,
            costOfCapital,
            updateAddress,
            updateCity,
            updateState,
            updateZip,
            updateSquareFeet,
            updateUnits,
            updateRentPsf,
            updateRentGrowth,
            updateCapex,
            updateVacancyRate,
            updatePeriod,
            updatePurchasePrice,
            udpateCapRate,
            updateCostOfCapital
        }}>
            {children}
        </InputContext.Provider>
    );
};