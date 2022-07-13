import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { ChartContext } from "../context/ChartContext"
import { useContext } from "react";

export default function Chart() {
  
    const {
        xAxis,
        yAxis,
    } = useContext(ChartContext);

    const data = {
        labels: xAxis,
        datasets: [
            {
                label: 'Property Income',
                backgroundColor: 'rgb(0, 139, 139, 1)',
                data: yAxis
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
