import React from "react";
import useNewInput from "../hooks/use-new-input";

const BasicForm = (props) => {

  const {
      value: enteredFirstName,
      isValid: enteredFirstNameIsValid,
      valueChangeHandler: firstNameChangeHandler,
      fieldBlurHandler: firstNameBlurHandler,
      reset: resetFnameField,
      hasError: firstNameHasError,
  } = useNewInput(value => value.trim === '');



// value: enteredName, 
// hasError: nameInputHasError, 
// isValid: enteredNameIsValid,
// valueChangeHandler : nameChangeHandler, 
// valueBlurHandler : nameBlurHandler ,
// reset: resetNameInput,

  function formSubmissionHandler(event) {
   event.preventDefault();

   if(!firstNameHasError) {
      return;
   }

   resetFnameField();
}

  return (
   <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
         <div className='form-control'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' id='fname' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
            {!firstNameHasError && <span style={{color:"red"}}>This name field is invalid!</span>}
            <p>{firstNameHasError}</p>
         </div>
      </div>
      <div className='form-actions'>
         <button>Submit</button>
      </div>
   </form>
  );
};

export default BasicForm;
