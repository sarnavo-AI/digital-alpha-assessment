import React from 'react'
import '../assets/PerformancePanel.css'
import { Line } from "react-chartjs-2";
import { useStateValue } from '../contextAPI/StateProvider';

function PerformancePanel() {
    const [state] = useStateValue();
    let label = state.totalExpenses.map((item) => {
        return item.year;
    })

    let expenseData = state.totalExpenses.map((item) => {
        return item.expense;
    })
    const data = {
        labels: label,
        datasets: [
            {
                label: "Earning Vs Time",
                data: [100000, 105000, 125000, 90000, 110000, 115000],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)"
            },
            {
            label: "Spending Vs Time",
            data: expenseData,
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)"
          },
        ],
        Option: [
            {
                "responsive": true,
                "maintainAspectRatio": true
            }
        ]
    };
  return (
    <div className='line-chart-container'>
        <h3>Earning Vs Time & Spending Vs Time</h3>
        <Line data={data}/>
    </div>
  )
}

export default PerformancePanel