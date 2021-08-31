import { ADDITION, RESET, SUBTRACTION } from "./actionTypes";

export const addition = () => ({
    type: ADDITION
})

export const subtraction = () => ({
    type: SUBTRACTION
})

export const reset = () => ({
    type: RESET
})