import { useState } from "react";

const UseInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        if (event.target.value.trim() !== "") {
            return;
        }
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
        if (!valueIsValid) {
            return;
        }
    };

    const reset=()=>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid:valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};
export default UseInput;
