import React, { useState } from 'react';
import PropTypes from 'prop-types';
import img1 from './img1.png';
import img2 from './img2.png'
import './login.css'

async function loginUser(credentials) {
	return fetch('http://localhost:4000/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	})
	  .then(data => data.json())
   }
export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  
	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
		  email,
		  password
		});
		setToken(token);
	  }

  return(
    <div className="login">
	<div className='logocontent'>
		
		<div className='imgd'> 
			<img src={img1} alt='Decor logo'/>
		</div>
		
		<div className='imgl'> 
			
		</div>

	</div>
	<div className='formcont'>
      <h1>Login</h1>
      <form  onSubmit={handleSubmit}>
		<div className='form'>
        <label>
          <p>Email</p>
          <input type="email" placeholder='aaaa@legal-doctrine.com' onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={e => setPassword(e.target.value)} />
        </label>
        <div className='button'>
          <button type="login">Login</button>
        </div>
		<p>
		Forgot password?
		</p>
		</div>

      </form>
    </div>
	</div>
	
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};