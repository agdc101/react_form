import { useEffect, useState } from 'react';

const SimpleInput = (props) => {

   //------- INPUT STATES ------//
   const [enteredName, setEnteredName] = useState('');
   const [enteredEmail, setEnteredEmail] = useState('');

   const [formInteracted, setformInteracted] = useState(false); // tracks whether user has interacted with form yet.
   const [formIsValid, setFormIsValid] = useState(false);
   // ------------------------- //

   //------ VARIABLES DECS -----//
   const enteredEmailIsNotBlank = enteredEmail.trim() !== '';
   const enteredEmailContainsAt = enteredEmail.includes("@");
   const enteredNameIsValid = enteredName.trim() !== '';
   const nameInputInvalid = !enteredNameIsValid && formInteracted // if user has used the form and name is still invalid.
   const EmailInputBlank = !enteredEmailIsNotBlank && formInteracted // if user has used the form and name is still invalid.
   const EmailInputInvalid = !enteredEmailContainsAt && formInteracted // if user has used the form and name is still invalid.
   
   const inputClasses = nameInputInvalid && EmailInputInvalid ? 'form-control invalid' : 'form-control';
   // ------------------------- //

   useEffect(() => {
      if (enteredNameIsValid && enteredEmailIsNotBlank && enteredEmailContainsAt) {
         setFormIsValid(true);
      } else {
         setFormIsValid(false);
      }
   }, [enteredNameIsValid, enteredEmailIsNotBlank]);

   //-------- FUNCTIONS --------//
   function nameChangeHandler(event) {
      setEnteredName(event.target.value);
   };
   // ----- ----- //
   function emailChangeHandler(event) {
      setEnteredEmail(event.target.value);
   };
   // ----- ----- //
   function formSubmissionHandler(event) {
      event.preventDefault();

      setformInteracted(true);

      if(!enteredNameIsValid || !enteredEmailIsNotBlank || !enteredEmailContainsAt ) {
         return;
      }

      setEnteredEmail('');
      setEnteredName('');
      setformInteracted(false);
   }
   // ----- ----- //
   function nameInputBlurHandler() {
      setformInteracted(true);
   };
   // ----- ----- //
   function emailInputBlurHandler() {
      setformInteracted(true);
   };
   // -------------------------- //

   return (
      <form onSubmit={formSubmissionHandler}>
         <div className={inputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
            {nameInputInvalid && <p className="error-text">Name must not be empty.</p>}
            
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail}/>
            {EmailInputBlank && <p className="error-text">Email must not be empty.</p>}
            {EmailInputInvalid && <p className="error-text">Email must contain @.</p>}
         </div>
         <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>{/* if form is invalid the button is disabled */}
         </div>
      </form>
   );
};

export default SimpleInput;
