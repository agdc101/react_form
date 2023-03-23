import {useState} from 'react'

const useNewInput = (validator) => {

   const [value, setValue] = useState("");
   const [isValid, setIsValid] = useState(false);

   function checkValueIsValid() {
      {(validator) ? setIsValid(true) : setIsValid(false)};
   
   }

   function valueChangeHandler() {
      setValue(value);
      console.log('valuechangehandler')
   }


   return {
      value: value,
      valueChangeHandler,
      isValid
   }

}

export default useNewInput;
