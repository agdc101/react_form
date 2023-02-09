import { useEffect, useState } from 'react';

const SimpleInput = (props) => {

   //------- INPUT STATES ------//
   const [enteredName, setEnteredName] = useState('');
   const [enteredJob, setEnteredJob] = useState('');

   const [formInteracted, setformInteracted] = useState(false); // tracks whether user has interacted with form yet.
   const [formIsValid, setFormIsValid] = useState(false);
   // ------------------------- //

   //------ VARIABLES DECS -----//
   const enteredJobIsValid = enteredJob.trim() !== '';
   const enteredNameIsValid = enteredName.trim() !== '';
   const nameInputInvalid = !enteredNameIsValid && formInteracted // if user has used the form and name is still invalid.
   const jobInputInvalid = !enteredJobIsValid && formInteracted // if user has used the form and name is still invalid.
   
   const inputClasses = nameInputInvalid && enteredJobIsValid ? 'form-control invalid' : 'form-control';
   // ------------------------- //

   useEffect(() => {
      if (enteredNameIsValid && enteredJobIsValid) {
         setFormIsValid(true);
      } else {
         setFormIsValid(false);
      }
   }, [enteredNameIsValid, enteredJobIsValid]);

   //-------- FUNCTIONS --------//
   function nameChangeHandler(event) {
      setEnteredName(event.target.value);
   };
   // ----- ----- //
   function jobChangeHandler(event) {
      setEnteredJob(event.target.value);
   };
   // ----- ----- //
   function formSubmissionHandler(event) {
      event.preventDefault();

      setformInteracted(true);

      if(!enteredNameIsValid) {
         return;
      }

      setEnteredJob('');
      setEnteredName('');
      setformInteracted(false);
   }
   // ----- ----- //
   function nameInputBlurHandler() {
      setformInteracted(true);
   };
   // ----- ----- //
   function jobInputBlurHandler() {
      setformInteracted(true);
   };
   // -------------------------- //

   return (
      <form onSubmit={formSubmissionHandler}>
         <div className={inputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
            {nameInputInvalid && <p className="error-text">Name must not be empty.</p>}
            
            <label htmlFor='job'>Your Job</label>
            <input type='text' id='job' onChange={jobChangeHandler} onBlur={jobInputBlurHandler} value={enteredJob}/>
            {jobInputInvalid && <p className="error-text">Job must not be empty.</p>}
         </div>
         <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>{/* if form is invalid the button is disabled */}
         </div>
      </form>
   );
};

export default SimpleInput;
