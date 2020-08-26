import axios from "axios";

export const GETTING_ADVICE_BEGIN = "GETTING_ADVICE_BEGIN"
export const GETTING_ADVICE_COMPLETE = "GETTING_ADVICE_COMPLETE"
export const GETTING_ADVICE_FAILED = "GETTING_ADVICE_FAILED"


export const getAdvice = () => (dispatch) => {
    dispatch({ type: GETTING_ADVICE_BEGIN });
    axios
        .get("https://api.adviceslip.com/advice",)
        .then((res) => {
            dispatch({ type: GETTING_ADVICE_COMPLETE, payload: res.data.slip.advice });
            console.log("API Data: ", res)
        })
        .catch((err) => {
            dispatch({ type: GETTING_ADVICE_FAILED, payload: "" })
        });

}

