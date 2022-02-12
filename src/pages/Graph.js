import React from 'react'
import '../assets/Graph.css'
import { useStateValue } from '../contextAPI/StateProvider';
import GraphCard from '../components/GraphCard';
import { Line } from "react-chartjs-2";

function Graph() {
    const [state, dispatch] = useStateValue();
    let label = state.graphPoint.map((item) => {
        return item.year;
    })

    let expenseData = state.graphPoint.map((item) => {
        return item.expense;
    })

    const data = {
        labels: label,
        datasets: [
          {
            label: "Expenses Vs Time",
            data: expenseData,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
        ],
        Option: [
            {
                "responsive": true,
                "maintainAspectRatio": false
            }
        ]
    };


    const handleOnDropOver = (event) => {
        event.preventDefault();
    }

    const handleDrop = (event) => {
        event.preventDefault();
        let cardId = event.dataTransfer.getData("card-id");
        
        let card = state.totalExpenses.find((item) => {
            return item.id === Number(cardId)
        })

        if(!state.selected[cardId]) {
            dispatch ({
                type: "ADD_TO_GRAPH_POINT",
                payload: {
                    id: card.id,
                    year: card.year,
                    expense: card.expense
                }
            })


            dispatch ({
                type: "TOGGLE-ELEMENT",
                payload : {
                  id: cardId
                }
              })
        }

    }

  return (
    <div className='main-container'>
        <h3>Graph Page, Please Select or Drag and drop the Data to plot in the graph below</h3>
        <div className='graph-page'>
            <div className='graph-data'>

                {state.totalExpenses.map((item, index) => {
                    return (
                        <GraphCard 
                            key={index}
                            expenses={item.expense} 
                            year={item.year} 
                            id={index} 
                            dragOption={!state.selected[index]}
                            className="graph-data-element"
                        />
                    )
                })}
                
            </div>
            <div className='graph-container'>
                <div 
                    className='graph-main'
                    onDrop={handleDrop}
                    onDragOver={handleOnDropOver}    
                >
                    <Line data={data} className="graph"/>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Graph