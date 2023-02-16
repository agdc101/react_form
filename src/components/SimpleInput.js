import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

   const { 
      value: enteredName, 
      hasError: nameInputHasError, 
      isValid: enteredNameIsValid,
      valueChangeHandler : nameChangeHandler, 
      valueBlurHandler : nameBlurHandler ,
      reset: resetNameInput,
   } = useInput(value => value.trim() !== '');

   const { 
      value: enteredEmail, 
      hasError: emailInputHasError, 
      isValid: enteredEmailIsValid,
      valueChangeHandler : emailChangeHandler, 
      valueBlurHandler : emailBlurHandler ,
      reset: resetEmailInput,
   } = useInput(value => value.includes("@"));

   // ------------------------- //
   
   const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
   const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';


   let formIsValid = false;

   if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
   }

   // ----- ----- //
   function formSubmissionHandler(event) {
      event.preventDefault();

      if(!emailInputHasError || !nameInputHasError ) {
         return;
      }

      resetNameInput();
      resetEmailInput();
   }
   // ----- ----- //

   return (
      <form onSubmit={formSubmissionHandler}>
         <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
            {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
         </div>
         <div className={emailInputClasses}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
            {emailInputHasError && <p className="error-text">Email must not be empty.</p>}
         </div>
         <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>{/* if form is invalid the button is disabled */}
         </div>
      </form>
   );
};

export default SimpleInput;
