import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { OutputContext } from "../context/OutputContext"
import { useContext } from "react";

export default function Chart() {
  
    const {
        propertyIncome,
        years,
    } = useContext(OutputContext);

    const data = {
        labels: years,
        datasets: [
            {
                label: 'Operating Income less Capex',
                backgroundColor: 'rgb(0, 139, 139, 1)',
                data: propertyIncome
            }
        ]
    };
    
    return (
        <div>
            <br/>
            <div className='chart'>
                <Bar
                data={data}
                />
            </div>
        </div>
    );
};
