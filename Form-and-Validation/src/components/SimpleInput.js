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


  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailchangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetEmailInput
  }=UseInput(value=> value.includes('@'))





  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();


    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }
    resetNameInput()
    resetEmailInput();
  };

  const nameInputClass = nameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailHasError
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
          onChange={emailchangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="email"
          id="email"
        />
        {emailHasError && (
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
