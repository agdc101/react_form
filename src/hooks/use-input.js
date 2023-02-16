import {useState} from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [formFieldInteracted, setFormFieldInteracted] = useState(false); 

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && formFieldInteracted;

    function valueChangeHandler(event) {
        setEnteredValue(event.target.value);
    };

    function valueBlurHandler() {
        setFormFieldInteracted(true);
    };

    function reset() {
        setEnteredValue('');
        setFormFieldInteracted(false);
    }

    return {
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
    
}

export default useInput;