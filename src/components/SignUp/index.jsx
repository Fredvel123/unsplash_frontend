import React, { Fragment, useState } from 'react';
// styled components
import { ButtonLeft, Header } from '../../styles/SignUp';
// components
import Inputs from './Inputs';

function SignUp() {
  const [name, setName] = useState({value: '', isValid: null});
  const [email, setEmail] = useState({value: '', isValid: null});
  const [password, setPassword] = useState({value: '', isValid: null});
  const [repeatePasswd, setRepeatePasswd] = useState({value: '', isValid: null});
  
  const handlerSubmit = e => {
    e.preventDefault();
    validPasswords();
    if(name.isValid || email.isValid || password.isValid || repeatePasswd.isValid) {
      signUpUser( name.value, email.value, password.value )
    } else {
      console.log('something is bad');
    }
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(repeatePasswd);
  }
  // regular expressions
  const regularExpressions = {
    user: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros, guion y guion_bajo
    link:  /^(ftp|http|https):\/\/[^ "]+$/, // para validar links
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
  }
  const validPasswords = () => {
    if(password.value === repeatePasswd.value) {
      setRepeatePasswd({...repeatePasswd, isValid: true})
    }else {
      setRepeatePasswd({...repeatePasswd, isValid: false})
    }
  }  
  // connectiong with the server.  http://imagesfredvel.herokuapp.com/
  const signUpUser = async (_name, _email, _password ) => {
    const newUser = await fetch('http://imagesfredvel.herokuapp.com/api/users/signup', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: _name,
        email: _email,
        password: _password
      })
    });
    const res = await newUser.json();
    console.log(res);
  }


  return(
    <Fragment>
      <Header>
        <ButtonLeft />
        <h2>Sign Up</h2>
      </Header>
      <form action="" onSubmit={handlerSubmit} >
        <Inputs 
          placeholder='Alex Montreal' 
          type='text' 
          title='Full Name'
          state={name}
          setState={setName}
          regExp={regularExpressions.name} />
        <Inputs 
          placeholder='alex_montreal@gmail.com' 
          type='email' 
          title='email'
          state={email}
          setState={setEmail}
          regExp={regularExpressions.email} />
        <Inputs 
          placeholder='write your password here' 
          type='password' 
          title='Password'
          state={password}
          setState={setPassword}
          regExp={regularExpressions.password} />
        <Inputs 
          placeholder='repete your password here again' 
          type='password' 
          title='Repeate Password'
          state={repeatePasswd}
          setState={setRepeatePasswd} />
        <button>send info</button>
      </form>
    </Fragment>
  )
}

export default SignUp;