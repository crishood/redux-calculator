import { createStore } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 2,
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 2,
            };
        case MULTIPLY:
            return {
                ...state,
                number: state.number * 2,
            };
        case DIVIDE:
            return {
                ...state,
                number: state.number / 2,
            };
        default:
            return state;

    }
}

const initialState = {
    number: 2,
};

export const store = createStore(reducer, initialState);