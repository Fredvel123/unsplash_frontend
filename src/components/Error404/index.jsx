import React, { Fragment } from 'react';
// images
import errorimg from './images/error.png'
// router
import { Link } from 'react-router-dom';

function Erro404() {
  return(
    <Fragment>
      <h1>Sorry, You have no access here. </h1>
      <img src={errorimg} width={250} alt="" />
      <Link to='/' >Go Home</Link>
      <Link to='/signup' >Sign Up</Link>
      <Link to='/login' >Log In</Link>
    </Fragment>
  )
}

export default Erro404;