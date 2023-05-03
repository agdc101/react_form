import {useState, useReducer} from 'react';

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {value: action.value, isInteracted: state.isInteracted};
    }
    if (action.type === 'BLUR') {
        return {isInteracted: true, value: state.value};
    }
    if (action.type === 'RESET') {
        return {value: '', isInteracted: false};
    }
    return {value: '', isInteracted: false};
}


const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, {value: '', isInteracted: false})

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isInteracted;

    function valueChangeHandler(event) {
        dispatch({type: 'INPUT', value: event.target.value});
    };

    function valueBlurHandler() {
        dispatch({type: 'BLUR'});
    };

    function reset() {
        dispatch({type: 'RESET'});
    }

    return {
        value: inputState.value,
        hasError,
        isValid: valueIsValid,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
    
}

export default useInput;