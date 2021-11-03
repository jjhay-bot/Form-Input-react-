import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== ''

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isNotEmpty);

  let formIsValid = false; 

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const SubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted');
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameValue ? 'form-control invalid' : 'form-control';
  const lastNametClasses = lastNameValue ? 'form-control invalid' : 'form-control';
  const emailClasses = emailValue ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={SubmitHandler}>
      <div >
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && <p className='error-text'>Please enter a first name.</p>}
        </div>

        <div className={lastNametClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && <p className='error-text'>Please enter a last name.</p>}

        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
            type='text'
            id='name'
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailHasError && <p className='error-text'>Please enter valid email.</p>}

      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
