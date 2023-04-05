import {useState} from 'react'

const useNewInput = (validator) => {

   const [value, setValue] = useState("");
   const [nameIsValid, setNameIsValid] = useState(false);
   const [fieldInteracted, setFieldInteracted] = useState(false);

   const inputIsValid = validator(value);
   
   const hasError = fieldInteracted && !inputIsValid;


   function valueChangeHandler(e) {
      setValue(e.target.value);
      console.log('vc', inputIsValid);
   }

   function fieldBlurHandler() {
      setFieldInteracted(true);
      console.log('fb', inputIsValid);
   }

   return {
      value: value,
      valueChangeHandler,
      fieldBlurHandler,
      isValid: nameIsValid,
      hasError
   }

}

export default useNewInput;
