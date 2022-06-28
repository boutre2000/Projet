import React, { useState } from "react";
import { useNavigate } from "react-router";
import Axios from "axios";
import useToken from '../useToken'
import './Addpapier.css'
import * as FiIcons from 'react-icons/fi';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Addpapier() {
  const [Nom, setNom] = useState();
  const [format, setformat] = useState();
  const [open, setOpen]= React.useState(false);
  let navigate= useNavigate()


  const { token, setToken } = useToken();
  const user= token.token


  let config = {
    headers: {
      'Authorization': 'Bearer ' + user
    }
}
  const send = event => {
    const data = new FormData();
    data.append("Nom", Nom);
    data.append("format", format);
  
   

    Axios.post('http://localhost:4000/demPap/add', data, config)
      .then(res => setOpen(true))
      .catch(err => console.log(err));

     
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="addpapier">
        <h1> Demande des papiers</h1>
        <div className="addcgstep">
        <button className="addcgret" onClick={()=>navigate('/papier')}>Retour</button>
        <div className="addcgtit"> Créer une demande  </div>
        <button className="addcgret"  onClick={send}>Créer</button>
        </div>
        <div className="addcgformcont">
        <form action="#">
          <div className="addcgform">
            <label className="dblab" htmlFor="Nom">Nom</label>
            <input 
            className="dbinp"
              type="text"
              name="Nom"
              onChange={event => {
                const { value } = event.target;
                setNom(value);
              }}
            />
        <label className="tplab" htmlFor="format">Format </label>
            <input
            className="tpinp"
              type="text"
              name="format"
              placeholder="Electronique, Physique"
              onChange={event => {
                const { value } = event.target;
                setformat(value);
              }}
            />
            </div>
     
        </form>
        
     </div>
     { open &&(
            <div>
         <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Demande créée"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Votre demande a bien été sauvegardée.
          </DialogContentText>
        </DialogContent>
        </Dialog>
        </div>
          )}
           
        </div>
  
  
       
  )
}
