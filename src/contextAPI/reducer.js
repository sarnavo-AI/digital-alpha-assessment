export const initialState = {
    totalExpenses: [
        { 
            id: 0,
            year: 2017, 
            expense: 61325 
        },
        { 
            id: 1,
            year: 2018, 
            expense: 58927 
        },
        {   
            id: 2,
            year: 2019, 
            expense: 64323 
        },
        { 
            id: 3,
            year: 2020, 
            expense: 48624 
        },
        { 
            id: 4,
            year: 2021, 
            expense: 69420 
        },
        { 
            id: 5,
            year: 2022, 
            expense: 72226 
        },
    ],
    graphPoint: [],
    selected: [
        false,
        false,
        false,
        false,
        false,
        false
    ]
};

function compare( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_GRAPH_POINT":
            let tempGraphPoint = [...state.graphPoint, action.payload]
            tempGraphPoint.sort(compare);
            return {
                ...state,
                graphPoint: tempGraphPoint
            }
        case "REMOVE_FROM_GRAPH_POINT":

            return {
                ...state,
                graphPoint: state.graphPoint.filter((item) => ((item.id !== action.payload.id)))
                }
        case "TOGGLE-ELEMENT": {
            let tempSelected = [...state.selected]
            tempSelected[action.payload.id] = !tempSelected[action.payload.id]
            return {
                ...state,
                selected: tempSelected
            }
        }
        default:
            return state;
    }
}

export default reducer;