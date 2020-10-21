import {
    GETTING_ADVICE_BEGIN,
    GETTING_ADVICE_COMPLETE,
    GETTING_ADVICE_FAILED
} from "../actions/index"

const initialState = {
    isFetching: false,
    error: "",
    advice: ""
}

export const adviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_ADVICE_BEGIN:
            console.log("Getting Advice...")
            return { ...state, isFetching: true };
        case GETTING_ADVICE_COMPLETE:
            return { ...state, advice: action.payload, isFetching: false };
        case GETTING_ADVICE_FAILED:
            return { ...state, error: action.payload, isFetching: false };
        default:
            return state;
    }
}