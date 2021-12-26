
export const reducer = (state, action) =>{
    switch (action.type){
        case "ADD_TO_A": 
        return {
            ...state,
            valueOfA: state.valueOfA + action.payload.value,
            history: [...state.history, {
                id: state.history.length,
                comment: action.payload.comment}]
        }
        case "ADD_TO_B": 
        return {
            ...state,
            valueOfB: state.valueOfB + action.payload.value,
            history: [...state.history, {
                id: state.history.length,
                comment: action.payload.comment}]
        }
        case "SUBTRACT_FROM_A": 
        return {
            ...state,
            valueOfA: state.valueOfA - action.payload.value,
            history: [...state.history, {
                id: state.history.length,
                comment: action.payload.comment}]
        }
        case "SUBTRACT_FROM_B": 
        return {
            ...state,
            valueOfB: state.valueOfB - action.payload.value,
            history: [...state.history, {
                id: state.history.length,
                comment: action.payload.comment}]
        }
        default:
            return state;
    }
}