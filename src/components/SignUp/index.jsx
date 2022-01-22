import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// styled components
import { ButtonLeft, DivBox, Header } from '../../styles/SignUp';
// components
import Inputs from './Inputs';
// use navgate
import { useNavigate } from "react-router-dom";


function SignUp() {
  const [name, setName] = useState({value: '', isValid: null});
  const [email, setEmail] = useState({value: '', isValid: null});
  const [password, setPassword] = useState({value: '', isValid: null});
  const [repeatePasswd, setRepeatePasswd] = useState({value: '', isValid: null});
  const [response, setResponse] = useState({error: false, message: ''});
  const navigate = useNavigate();
  
  const handlerSubmit = e => {
    e.preventDefault();
    validPasswords();
    if(repeatePasswd.isValid & password.isValid & email.isValid & name.isValid){
      signUpUser( name.value, email.value, password.value ) 
    } else {
      setResponse({
        error: true, 
        message: 'something is bad, check it out your password, name or email'})
      console.log(response);
    }
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
    setResponse({
      error: false,
      message: res
    });
  }
  const navigateStartPage = async () => {
    const res = await response.message.isCreated
    if(res === true) {
      navigate("/", { replace: true });
    }
  }
  useEffect(() => {
    navigateStartPage();
  }, [handlerSubmit]);
  
  return(
    <DivBox>
      <Header>
        <Link to='/' >
          <ButtonLeft />
        </Link>
        <h2>Sign Up</h2>
      </Header>
      <form action="" onSubmit={handlerSubmit} >
        <Inputs 
          placeholder='Alex Montreal' 
          type='text' 
          title='Full Name'
          state={name}
          setState={setName}
          regExp={regularExpressions.name}
          icon={true} />
        <Inputs 
          placeholder='alex_montreal@gmail.com' 
          type='email'
          icon={true} 
          title='email'
          state={email}
          setState={setEmail}
          regExp={regularExpressions.email} />
        <Inputs 
          placeholder='write your password here' 
          type='password' 
          title='Password'
          icon={true}
          state={password}
          setState={setPassword}
          regExp={regularExpressions.password} />
        <Inputs 
          placeholder='repete your password here again' 
          type='password' 
          title='Repeate Password'
          state={repeatePasswd}
          icon={true}
          setState={setRepeatePasswd}
          callback={validPasswords} />
        <button >Sign Up</button>
      </form>
      {response.error === true ?
        <h3>{response.message}</h3> 
      : <h3>{response.message.message}</h3> }
      {/* {response.message.isCreated ? 
      : null} */}
      {/* <LINK to='/home' >Go to Home</LINK> */}
    </DivBox>
  )
}

export default SignUp;