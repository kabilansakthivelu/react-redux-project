
export const reducer = (state, action) =>{
    switch (action.type){
        case "ADD_TO_A": 
        return {
            ...state,
            valueOfA: state.valueOfA + action.payload.value,
        }
        case "ADD_TO_B": 
        return {
            ...state,
            valueOfA: state.valueOfB + action.payload.value,
        }
        case "SUBTRACT_FROM_A": 
        return {
            ...state,
            valueOfA: state.valueOfA - action.payload.value,
        }
        case "SUBTRACT_FROM_B": 
        return {
            ...state,
            valueOfA: state.valueOfB - action.payload.value,
        }
        default:
            return state;
    }
}