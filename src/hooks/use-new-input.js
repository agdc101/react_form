import {useState} from 'react'

const useNewInput = (validator) => {

   const [value, setValue] = useState("");
   const [nameIsValid, setNameIsValid] = useState(false);

   

   function valueChangeHandler(e) {
      setValue(e.target.value);
   }


   return {
      value: value,
      valueChangeHandler,
      // fieldBlurHandler,
      isValid: nameIsValid,
      // hasError: valueHasError
   }

}

export default useNewInput;
