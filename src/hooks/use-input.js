import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredvalue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = enteredvalue.trim() !== '';
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setIsTouched(true);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredvalue,
    isvalued: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
};

export default useInput;