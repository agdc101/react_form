import React from "react";
import useNewInput from "../hooks/use-new-input";

const BasicForm = (props) => {

   const {
      value: enteredFirstName,
      isValid: enteredFirstNameIsValid,
      hasError: firstNameHasError,
      valueChangeHandler: firstNameChangeHandler,
      inputBlurHandler: firstNameBlurHandler, 
      reset: resetFirstName,
   } = useNewInput(value => value.trim() !== '');

   const {
      value: enteredLastName,
      isValid: enteredLastNameIsValid,
      hasError: lastNameHasError,
      valueChangeHandler: lastNameChangeHandler,
      inputBlurHandler: lastNameBlurHandler,
      reset: resetLastName,
   } = useNewInput(value => value.trim() !== '');

   const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmail,
   } = useNewInput(value => value.includes('@'));

   let formIsValid = false;
   if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
   }

   function formSubmissionHandler(event) {
      event.preventDefault();

      if(!formIsValid) {
         return;
      }

      resetFirstName();
      resetLastName();
      resetEmail();

   }

   const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
   const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
   const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
   <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
         <div className={firstNameClasses}>
            <label htmlFor='fname'>First Name</label>
            <input type='text' id='fname' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
            {firstNameHasError && <p className="error-text">please enter a valid first name</p>}
         </div>
         <div className={lastNameClasses}>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' id='lname' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
            {lastNameHasError && <p className="error-text">please enter a valid last name</p>}
         </div>
         <div className={emailClasses}>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
            {emailHasError && <p className="error-text">please enter a valid email</p>}
         </div>
      </div>
      <div className='form-actions'>
         <button disabled={!formIsValid} >Submit</button>
      </div>
   </form>
  );
};

export default BasicForm;
