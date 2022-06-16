
import React from 'react';
import axios from 'axios'
import {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './forgotpwd.css';

async function userEmail(credentials) {
	return fetch('http://localhost:4000/login/forgotPass', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	})
	  .then(data => data.json())
   }
   export default function ForgotPass() {
    const [email, setEmail] = useState();
    const [error, setError] = useState(false);
   const [openE, setOpenE]= useState(false)
   const [open, setOpen] = useState(false);

   
 
   const handleClose = () => {
     setOpen(false);
   };
      const handleSubmit = async e => {
          e.preventDefault();
          const user = await userEmail({
            email
          });
          if(user!=='un email est envoye')
            setError(true)
      }
    
      const handleClickOpen = () => {
        if(!error)
        setOpen(true);
      };
        
    return(
      <div className="forgotpass">
        <div className='forgotform'>
          <h1>Forgot password</h1>
        <form   onSubmit={handleSubmit}>
          <div className='form'>
          <label>
            <p>Email</p>
            <input type="email" placeholder='aaaa@legal-doctrine.com' onChange={e => setEmail(e.target.value)} />
          </label>
          <div className='button'>
            <button type="login" onClick={handleClickOpen}>Send</button>
          { !error&& open &&(
            <div>
         <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Email envoyé "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Veuillez vérifier votre boite email, un lien de réinitialisation est envoyé .
          </DialogContentText>
        </DialogContent>
        </Dialog>
        </div>
          )}
        
       {error && open &&(
        <div>
        
          <h1>Une erreur est survenue </h1>
            <p>
          Veuillez ressaisir votre addresse email  .
         </p>
        </div>
       )}
          </div>
         </div>
          
  
        </form>
        </div>
      </div>
      
      
    )
  }