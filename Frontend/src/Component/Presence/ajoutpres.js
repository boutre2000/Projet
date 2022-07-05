import React, { useState } from "react";
import { useNavigate } from "react-router";
import Axios from "axios";
import useToken from '../useToken'
import './style.css'

import * as FiIcons from 'react-icons/fi';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function Addpres() {
 
  const [file, setFile] = useState();
  const [pj, setPj] = useState("Ajouter la justification");
  const [open, setOpen]= React.useState(false);
  const [error, setError]= React.useState(false);
  let navigate= useNavigate()


  const { token, setToken } = useToken();
  const user= token.token


  let config = {
    headers: {
      'Authorization': 'Bearer ' + user
    }
}
  const send = event => {
    event.preventDefault();
    const data = new FormData();
   
    data.append("file", file);

   

  Axios.post('http://localhost:4000/pres/set', data, config)
      .then(res => {
        
        if (res.data === 'presence creee!') {
        setError(false);
        setOpen(true);
      
      
      }else{

          setError(true)
          setOpen(false)
          alert('une erreur est survenue')
        }
        
  })
      .catch(err => {console.log(err)
      alert('une erreur est survenue')}
      );

     
  };


    
 


  const handleClose = () => {
    setOpen(false);
  };


       
  const handleClickOpen = () => {
    if(!error)
  setOpen(true);
};

  const handleChange = (e) => {
    setFile(e.target.files[0])
    setPj(e.target.files[0].name)

  };

  return (
    <div className='ajout'> 
         
    <br />
    &nbsp;<h1>Ajouter le document de pointage:</h1>
       <form >
       <label  className="filab" htmlFor="file">{pj} <FiIcons.FiUpload/> </label>
            <input
              className="fiinp"
              type="file"
              name="file"
              id="file"
              placeholder="Choisir un fichier"
              style={{display: "none", border: 'dashed'}}
              onChange={e => {
                handleChange(e)
              }}
            />
          
        </form>
        <button type="submit"  className='pressub'
            onClick={send}>Insérer</button>
    
     { !error && open &&(
            <div>
         <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Assiduitiées créées"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Le fichier des pointages  a bien été sauvegardé.
          </DialogContentText>
        </DialogContent>
        </Dialog>
        </div>
          )}
           
        </div>
  
  
       
  )
}
