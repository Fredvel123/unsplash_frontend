import React, { Fragment, useEffect, useState } from 'react';
// styled components
import { ButtonLeft, DivBox, Header } from '../../styles/SignUp';
// react router dom
import { Link, useNavigate } from 'react-router-dom';
import Inputs from '../SignUp/Inputs';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux-toolkit/slice/auth';
// redux


function LogIn() {
  const auth = useSelector((state) => state.auth.value)
  const dispatch = useDispatch();

  const [email, setEmail] = useState({value: ''});
  const [password, setPassword] = useState({value: ''});
  const handlerSubmit = e => {
    e.preventDefault();
    logInUser(email.value, password.value)
  }
  // code to connect with the server
  const logInUser = async (_email, _password) => {
    const user = await fetch('http://imagesfredvel.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: _email,
        password: _password
      })
    });
    const res = await user.json();
    dispatch(setAuth(res));
  }
  // local storage for the token
  useEffect(() => {
    const data = localStorage.getItem('auth');
    if(data !== null) {
      dispatch(setAuth(JSON.parse(data)))
    }
  }, [dispatch]);
  
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth))
  }, [auth]);
  const navigate = useNavigate();

  const navigateToHome = async () => {
    const res = await auth.isLogged;
    if(res === true) {
      navigate("/home", { replace: true })
    }
  }
  useEffect(() => {
    navigateToHome();
  }, [handlerSubmit]);
  


  return(
    <DivBox>
      <Header>
        <Link to='/' >
          <ButtonLeft />
        </Link>
        <h2>Sign Up</h2>
      </Header>
      <form onSubmit={handlerSubmit} action="">
        <Inputs
          placeholder='alex_montreal@gmail.com'
          type='email'
          icon={false}
          title='email'
          state={email}
          setState={setEmail} />
        <Inputs
          placeholder='write your password'
          type='password'
          icon={false}
          title='password'
          state={password}
          setState={setPassword} />
      <button>send</button>
      </form>
      {auth.isLogged ?
       <h3>{auth.message}</h3>
      : <h3>{auth.message}</h3> }
    </DivBox>
  )
}

export default LogIn;