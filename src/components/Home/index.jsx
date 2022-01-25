import React, { Fragment, useEffect, useState } from 'react';
// components
import Cards from './Cards';
// styled components
// react router
import { Link } from 'react-router-dom'
// icons
import { StarOutlined } from '@ant-design/icons';
// react redux
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../redux-toolkit/slice/auth';

function Home() {
  const auth = useSelector(state => state.auth.value);
  const dispatch = useDispatch();
  const [firstName, setfirstName] = useState('');  
  const [user, setUser] = useState([]);
  const getInfoUser = async (_token) => {
    const info = await fetch('http://imagesfredvel.herokuapp.com/api/users/user', {
      method: 'get',
      headers: {
        'access-token': _token
      }
    });
    const res = await info.json();
    setUser(res);
    const name = res.name;
    const firstName = name.split(" ");
    setfirstName(firstName);
  }
  useEffect(() => {
    getInfoUser(auth.token); 
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const logOutApp = () => {
    dispatch(setAuth( {
      isLogged: false,
      token: ''
    }))
  }
  // code to know name user

  return(
    <Fragment>
      <h2>Images App</h2>
      <Link to={`../${user._id}`} >
        <StarOutlined />
          <h3>{firstName[0]}</h3>
      </Link>
      {/* <button onClick={getFirstName} >
        infodasd
      </button> */}
      <Link to='/' >
        <h2 onClick={logOutApp} >Log Out</h2>
      </Link>
      <Cards />
    </Fragment>
  )
}

export default Home;