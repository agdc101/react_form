import {useState} from 'react'

const useNewInput = (validator) => {

   const [value, setValue] = useState("");

   const valueIsValid = validator(value);


   function valueChangeHandler(e) {
      setValue(e.target.value);
      console.log(value);
   }


   return {
      value: value,
      valueChangeHandler,
      isValid: valueIsValid
   }

}

export default useNewInput;
