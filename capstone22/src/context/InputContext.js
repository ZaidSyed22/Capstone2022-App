import { createContext, useState } from "react";

export const InputContext = createContext();

export function InputProvider({children}){
    const[address, setAddress] = useState()
    const[city, setCity] = useState()
    const[state, setState] = useState()
    const[zip, setZip] = useState()
    const[sf, setSf] = useState()
    const[units, setUnits] = useState()
    const[rent, setRent] = useState()
    const [purchasePrice, setPurchasePrice] = useState();
    const [rentGrowth, setRentGrowth] = useState();
    const [capex, setCapex] = useState();
    const [vacancy, setVacancy] = useState();
    const [period, setPeriod] = useState();
    const [capRate, setCapRate] = useState();

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
    function updateSf(newValue) {
        setSf(newValue)
    };
    function updateUnits(newValue) {
        setUnits(newValue)
    };
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
        <InputContext.Provider value={{
            address,
            city,
            state,
            zip,
            sf,
            units,                  
            rent,
            rentGrowth,
            capex,
            vacancy,
            period,
            purchasePrice,
            capRate,
            updateAddress,
            updateCity,
            updateState,
            updateZip,
            updateSf,
            updateUnits,
            updateRent,
            updateRentGrowth,
            updateCapex,
            updateVacancy,
            updatePeriod,
            updatePurchasePrice,
            udpateCapRate
        }}>
            {children}
        </InputContext.Provider>
    );
};