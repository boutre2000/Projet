import React from 'react';
import img from './img.png'
import './Header.css'


export default function Navbar({setIsLoggeddin}){
     
    
  const logout = () => {
    localStorage.removeItem('token');
      window.location.href='/login'
    
  };
    return(
   
    <div className='nav'>
        <img src={img}  alt='logo' />
        <button onClick={logout}>  Logout </button>
    </div>
   

    )

}


