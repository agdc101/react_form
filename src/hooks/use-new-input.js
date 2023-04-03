import {useState} from 'react'

const useNewInput = (validator) => {

   const [value, setValue] = useState("");
   const [nameIsValid, setNameIsValid] = useState(false);
   const [fieldInteracted, setFieldInteracted] = useState(false);

   const inputError = validator(value);
   
   const hasError = fieldInteracted && !inputError;

   console.log(fieldInteracted);

   function valueChangeHandler(e) {
      setValue(e.target.value);
      console.log('vc', fieldInteracted);
   }

   function fieldBlurHandler() {
      setFieldInteracted(true);
      console.log('fb', fieldInteracted);
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
