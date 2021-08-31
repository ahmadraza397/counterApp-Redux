import { ADDITION, RESET, SUBTRACTION } from "../actions/actionTypes"


const initialState = {
    counter:0
}

export const mainReducer = (state=initialState, action) => {
    switch(action.type){
        case ADDITION:
            return{
                ...state,
                counter: state.counter + 1
            }
        case SUBTRACTION:
            return{
                ...state,
                counter: state.counter - 1
            }
        case RESET:
            return{
                ...state,
                counter: state.counter - state.counter
            }
        default:
            return state
    }
}