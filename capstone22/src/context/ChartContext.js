import { createContext, useState } from "react";

export const ChartContext = createContext();

export function ChartProvider({children}){
    const [xAxis, setXaxis] = useState();
    const [yAxis, setYaxis] = useState();

    function updateXaxis(newValue) {
        setXaxis(newValue)
    };
    function updateYaxis(newValue) {
        setYaxis(newValue)
    };
    
    return(
        <ChartContext.Provider value={{
            xAxis,
            yAxis,
            updateXaxis,
            updateYaxis,
        }}>
            {children}
        </ChartContext.Provider>
    );
};