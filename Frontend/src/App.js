import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Login from './Component/Login/Login';
import useToken from './Component/useToken';
import Navbar from './Component/Navbar/Navbar';

function App() {

  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <Navbar/>
    <h1>Application</h1>
          <Dashboard />
       
  </div>
  );
}
export default App;