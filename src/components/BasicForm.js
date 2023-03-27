import React from "react";
import useNewInput from "../hooks/use-new-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    valueChangeHandler: firstNameChangeHandler,
    isValid: enteredFirstNameIsValid
  } = useNewInput(value => value.trim !== '');

  const {
    value: enteredLastName,
    valueChangeHandler: lastNameChangeHandler,
    isValid: enteredSecondNameIsValid
  } = useNewInput(value => value.trim !== '');

  const {
    value: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    isValid: enteredEmailIsValid
  } = useNewInput(value => value.includes('@'));


  return (
   <form>
      <div className='control-group'>
         <div className='form-control'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' id='fname' value={enteredFirstName} onChange={firstNameChangeHandler}/>
            {enteredFirstNameIsValid && <span style={{color:"red"}}>This name field is invalid!</span>}
         </div>
         <div className='form-control'>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' id='lname' value={enteredLastName} onChange={lastNameChangeHandler}/>
            {enteredSecondNameIsValid && <span style={{color:"red"}}>This name field is invalid!</span>}
         </div>
      </div>
      <div className='form-control'>
         <label htmlFor='name'>E-Mail Address</label>
         <input type='email' id='email' value={enteredEmail} onChange={emailChangeHandler}/>
         <span style={{color:"red"}}>This email field is invalid!</span>
         {enteredEmailIsValid && <span style={{color:"red"}}>This name field is invalid!</span>}
      </div>
      <div className='form-actions'>
         <button>Submit</button>
      </div>
   </form>
  );
};

export default BasicForm;
