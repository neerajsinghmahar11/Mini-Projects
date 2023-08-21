import { useState } from "react";
import UseInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: namechangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput
  } = UseInput(value=> value.trim() !=='');
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);



  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const emailChangeInputHandler = (event) => {
    setEnteredEmail(event.target.value);
    if (event.target.value.trim() !== "") {
      return;
    }
  };
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
    if (!enteredEmailIsValid) {
      return;
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();


    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput()
  };

  const nameInputClass = nameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={namechangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">Your Email</label>
        <input
          onChange={emailChangeInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          type="email"
          id="email"
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
