import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChanceHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }

    setEnteredNameIsValid(true)
    setEnteredName('');
    console.log(enteredName);
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChanceHandler}
          value={enteredName}
        />
        {nameInputIsValid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
