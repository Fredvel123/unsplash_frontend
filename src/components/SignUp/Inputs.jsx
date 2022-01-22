import React from 'react';

function Inputs({ placeholder, type, title, state, setState, regExp }) {
  const handlerInputs = e => {
    setState({...state, value: e.target.value})
  }
  const validations = () => {
    if(regExp){
      if (regExp.test(state.value)) {
        setState({...state, isValid: true})
      } else {
        setState({...state, isValid: false})
      }
    }
  }
  return (
    <div>
      <label htmlFor=""> {title}: </label>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          required
          onChange={handlerInputs} 
          onKeyUp={validations}
          onBlur={validations} />
      </div>
    </div>
  );
}

export default Inputs;
