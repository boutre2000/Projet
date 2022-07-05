import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import img1 from './img1.png';
import img2 from './img2.png'
import * as AiIcons from 'react-icons/ai';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './login.css'

async function loginUser(credentials) {
	return fetch('http://localhost:4000/login/login', {
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
  const [error,setError]= useState(false);

  const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
	   if(error)
     setOpen(true);

   };
 
   const handleClose = () => {
     setOpen(false);
   };
	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
		  email,
		  password
		});
		setToken(token);
		if(token.message!=='login succeeded !'){
			setError(true)
			console.log(token)
		}
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
          <input type="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={e => setPassword(e.target.value)} 
		  
		  />
		  <AiIcons.AiFillEye className='logineye'/>
        </label>
        <div className='button'>
          <button type="login" onClick={handleClickOpen}>Login</button>
        </div>
		{error && (
			<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		  >
			<DialogTitle id="alert-dialog-title">
			  {" Coordonnées incorrectes "}
			</DialogTitle>
			<DialogContent>
			  <DialogContentText id="alert-dialog-description">
			 Veuillez vérifier votre coordonnées, l'email n'existe pas ou le mot de passe est incorrecte  .
			  </DialogContentText>
			</DialogContent>
			</Dialog>
		)
}
		<Link to='/ForgotPass' className='loginfp' >
		Forgot password?
		</Link>
		</div>

      </form>
    </div>
	</div>
	
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};