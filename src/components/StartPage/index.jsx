import React, { Fragment } from 'react';
// react router
import { Link } from 'react-router-dom';
// styled componetns
import { Nav, StartDiv } from '../../styles/StartPage/index';

function StartPage() {
  return(
    <StartDiv>
      <h2>Images app</h2>
      <p>
        You need an account for access at this app, you can create a new account in the "SignUp" section 
        or if you already have an account you can go through "LogIn" section.
      </p>
      <Nav>
        <Link to='/signup' >Sign Up</Link>
        <Link to='/login' >Log In</Link>
      </Nav>
    </StartDiv>
  )
}

export default StartPage;