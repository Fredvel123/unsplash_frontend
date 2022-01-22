import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return(
    <Fragment>
      <h2>Unsplush fake app</h2>
      <p>You need an account for get in at this app, you can craete a new accout in the SignUp section 
         or if you already have an account you can go through Log In section.
      </p>
      <nav>
        <Link to='/signup' >Sign up</Link>
        <Link to='/login' >Log In</Link>
      </nav>
    </Fragment>
  )
}

export default StartPage;