import { useState } from "react";

const useInput = (validatedValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const { valueIsValid, errorMessage } = validatedValue(enteredValue);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    errorMessage,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

export const isNotEmpty = (value) => {
  return {
    valueIsValid: value.trim() !== "",
    errorMessage: "Cannot be empty",
  };
};

export const isBiggerThenZero = (value) => {
  return {
    valueIsValid: value > 0,
    errorMessage: "Must be bigger than 0",
  };
};
