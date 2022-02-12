import React from 'react'
import '../assets/GraphCard.css'
import { useStateValue } from '../contextAPI/StateProvider';
import * as BsIcons from "react-icons/bs";

function GraphCard(props) {
  const [state, dispatch] = useStateValue();

  const handleSelected = () => {
    if(state.selected[props.id]) {
      dispatch ({
        type: "REMOVE_FROM_GRAPH_POINT",
        payload : {
          id: props.id,
          year: props.year,
          expense: props.expenses
        }
      })
    }
    else {
      dispatch ({
        type: "ADD_TO_GRAPH_POINT",
        payload: {
          id: props.id,
          year: props.year,
          expense: props.expenses
        }
      })
    }

    dispatch ({
      type: "TOGGLE-ELEMENT",
      payload : {
        id: props.id
      }
    })
  }

  const handleOnDragStart = (event) => {
    // event.preventDefault();
    event.dataTransfer.setData("card-id", event.target.id);
    // console.log(event)
  }

  
  return (
    <div 
      className={state.selected[props.id] ? 'graph-card active' : 'graph-card'} 
      id={props.id}
      onClick={handleSelected}
      draggable={props.dragOption}
      onDragStart={handleOnDragStart}
    >
      <div className='card-text'>
        <div className='card-text-year'>{props.year}</div>
      </div>
      <div className='card-text'>
        <div className='card-text-icon'><BsIcons.BsFillArrowUpRightCircleFill /></div>
        <div className='card-text-label'>Expenses </div>
        <div className='card-text-value'>
          <span>$</span>
          {props.expenses}
        </div>
      </div>
    </div>
  )
}

export default GraphCard