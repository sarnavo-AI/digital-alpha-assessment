import React from 'react'
import { Doughnut } from "react-chartjs-2";

const data = {
    labels: [
      'Earning',
      'Spending',
      'Saving'
    ],
    datasets: [{
      label: 'My Asset Allocation',
      data: [50, 30, 20],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }],
    options: {
        tooltipTemplate: "$<%= value %>k",
    }     
  };

function AllocationPanel() {
  return (
    <Doughnut data={data}/>
  )
}

export default AllocationPanel