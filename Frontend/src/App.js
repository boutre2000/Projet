import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Login from './Component/Login/Login';
import useToken from './Component/useToken';
import Navbar from './Component/Navbar/Navbar';
import ForgotPass from './Component/Forgotpassword/ForgotPass';
import Reset from './Component/Forgotpassword/reset';

function App() {

  const { token, setToken } = useToken();
  if(!token ) {
    return( 
      
    <Router>
     
    <Routes>
    <Route path='/' element={<Login setToken={setToken} />}/>
    <Route path='/forgotPass' element={<ForgotPass/>}/>
    <Route path='/reset/:token' element={<Reset/>}/>
    </Routes>
    </Router>
    
    
    )
  }
  return (
    <div className="wrapper">
      <Navbar/>
      < Dashboard/>
  </div>
  );
}
export default App;