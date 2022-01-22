import React,  { useState } from 'react';
// components
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import StartPage from './components/StartPage';
import Home from './components/Home';
// icons 
// import { LeftOutlined } from '@ant-design/icons';
// istyled componetns

// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erro404 from './components/Error404';

function App() {
  const [register, setregister] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<LogIn />} />
        <Route path='home' element={register ? <Home /> : <Erro404 /> } />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
