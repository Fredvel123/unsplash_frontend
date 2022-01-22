import React from 'react';
import { CheckButton, Div, ErrorButton, Input, Label } from '../../styles/SignUp/forns';
// styled components


function Inputs({ placeholder, type, title, state, setState, regExp, callback, icon }) {
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
    if(callback) {
      callback(); // this code is for validate password repeate
    }
  }
  return (
    <div>
      <Label htmlFor=""> {title}: </Label>
      <Div>
        <Input
          type={type}
          placeholder={placeholder}
          required
          onChange={handlerInputs} 
          onKeyUp={validations}
          onBlur={validations} />
        {icon ? 
          !state.isValid ? <ErrorButton /> : <CheckButton />
        : null} 
      </Div>
    </div>
  );
}

export default Inputs;
