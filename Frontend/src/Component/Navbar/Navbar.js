import React, { useState } from 'react';
import PropTypes from 'prop-types';
import img from './img.png'
import './Navbar.css'


export default function Navbar({setIsLoggeddin}){
     
    
  const logout = () => {
    localStorage.removeItem('token');
      window.location.href='/'
    
  };
    return(
    <div className='nav'>
    <div>
        <img src={img}  alt='logo' />
    </div>

    <div className='btn'> 
        <button onClick={logout}>  Logout </button>

    </div>
    </div>

    )

}


