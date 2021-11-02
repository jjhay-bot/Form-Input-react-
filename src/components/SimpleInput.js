import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  // const nameInput = useRef()
  const [enteredName, setEnteredName] = useState('');

  const nameInputChanceHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);
    setEnteredName('');
    // const enteredValue = nameInput.current.value;
    // console.log(enteredValue);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
          // ref={nameInput} 
          type='text' 
          id='name' 
          onChange={nameInputChanceHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
