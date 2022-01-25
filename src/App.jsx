import React, { useEffect } from 'react';
// components
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import StartPage from './components/StartPage';
import Home from './components/Home';
import Erro404 from './components/Error404';
import User from './components/Home/User';
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAuth } from './redux-toolkit/slice/auth';

function App() {
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  // local storage for the token
  // never forget set up the LOCAL STORAGE in the index component if you will use router.
  useEffect(() => {
    const data = localStorage.getItem('auth');
    if(data !== null) {
      dispatch(setAuth(JSON.parse(data)))
    }
  }, [dispatch]);
  
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth))
  }, [auth]);  
  return (
    <BrowserRouter>
      <Routes>
        <Route path=':id' element={auth.isLogged ? <User /> : <Erro404 />}/>
        <Route index element={<StartPage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<LogIn />} />
        <Route path='home' element={auth.isLogged ? <Home /> : <Erro404 /> } />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
