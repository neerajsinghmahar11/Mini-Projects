import UseNewInput from "../Hooks/use-inputHook";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError:nameHasError,
    valueChangeHandler:namechangeHandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput,
  } = UseNewInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError:emailHasError,
    valueChangeHandler:emailchangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput,
  } =UseNewInput(value=>value.includes('@'));

  let formIsValid=false;

  if(nameIsValid && emailIsValid){
    formIsValid=true;
  } 
  const submitHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClass = nameHasError
    ? "form-control invalid"
    : "form-control";
    
  const emailInputClass = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClass} >
          <label htmlFor="name">First Name</label>
          <input value={enteredName} onChange={namechangeHandler} onBlur={nameBlurHandler} type="text" id="name" />
          {nameHasError && <p className="error-text">Name must not be empty.</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input value={enteredEmail} onChange={emailchangeHandler} onBlur={emailBlurHandler} type="email" id="email" />
        {emailHasError && <p className="error-text">Use a Valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
