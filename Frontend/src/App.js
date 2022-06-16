import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Login from './Component/Login/login';
import useToken from './Component/useToken';
import Navbar from './Component/Header/Header';
import ForgotPass from './Component/Forgotpassword/ForgotPass';
import Reset from './Component/Forgotpassword/reset';
import Sidebar from './Component/Sidebar/sidebar'
import Conge from './Component/Conge/conge'
import Preview from './Component/Conge/preview';
import Addconge from './Component/Conge/Addconge';
import CongeM from './Component/Conge/congeM';
import PreviewM from './Component/Conge/previewM'
import CongeU from './Component/Conge/congeU';
import PreviewU from './Component/Conge/previewU';
function App() {

  const { token, setToken } = useToken();
  
  if(!token) {
    return( 
      
      
    <Router>
    <Routes>
    <Route path='/' element={<Login setToken={setToken} />}/>
    <Route path='/forgotPass' element={<ForgotPass/>}/>
    <Route path='/reset/:token' element={<Reset/>}/>
    </Routes>
    </Router>
    
    
    )
  }else{
   
   const role=token?.role;
   console.log(role)
   if(role==='Admin'){
  return (
    <React.Fragment>
    <div className="wrapper">
      <Router>
      <Navbar/>
      <Sidebar/>
      
      <Routes>
        <Route path='/conge' element={ <Conge/>} />
        <Route path='/congeu' element={ <CongeU/>} />
        <Route path='/preview/:id' element={ <Preview/>} />
        <Route path='/addconge' element={ <Addconge/>} />


      </Routes>
      </Router>
  </div>
  </React.Fragment>
  );
}
if(role==='Manager'){
  return (
    <React.Fragment>
    <div className="wrapper">
      <Router>
      <Navbar/>
      <Sidebar/>
      
      <Routes>
        <Route path='/conge' element={ <CongeM/>} />
        <Route path='/congeu' element={ <CongeU/>} />
        <Route path='/preview/:id' element={ <PreviewM/>} />
        <Route path='/addconge' element={ <Addconge/>} />



      </Routes>
      </Router>
  </div>
  </React.Fragment>
  );
}
if(role==='User'){
  return (
    <React.Fragment>
    <div className="wrapper">
      <Router>
      <Navbar/>
      <Sidebar/>
      
      <Routes>
        <Route path='/conge' element={ <CongeU/>} />
        <Route path='/previewu/:id' element={ <PreviewU/>} />
        <Route path='/addconge' element={ <Addconge/>} />


      </Routes>
      </Router>
  </div>
  </React.Fragment>
  );
}
}

  }
export default App;