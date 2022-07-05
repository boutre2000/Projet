import React, { useState } from "react";
import { useNavigate } from "react-router";
import Axios from "axios";
import useToken from '../useToken'
import './addcong.css'
import * as FiIcons from 'react-icons/fi';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function Addconge() {
  const [dateDebut, setDateDebut] = useState();
  const [dateFin, setDateFin] = useState();
  const [type, setType] = useState();
  const [motif, setMotif] = useState();
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
    data.append("dateDebut", dateDebut);
    data.append("dateFin", dateFin);
    data.append("motif", motif);
    data.append("type", type);
    data.append("file", file);

   

  Axios.post('http://localhost:4000/demCong/add', data, config)
      .then(res => {
        
        if (res.data === 'request saved !') {
        setError(false);
        setOpen(true);
      
      }else{

          setError(true)
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
    <div className="addconge">
        <h1> Demande des congés</h1>
        <div className="addcgstep">
        <button className="addcgret" onClick={()=>navigate('/conge')}>Retour</button>
        <div className="addcgtit"> Créer une demande  </div>
        <button className="addcgret"  onClick={send}>Créer</button>
        
        </div>
        <div className="addcgformcont">
        <form>
          <div className="addcgform">
            <label className="dblab" htmlFor="dateDebut">Date début</label>
            <input 
            className="dbinp"
              type="date"
              name="dateDebut"
              id="dateDebut"
              onChange={event => {
                const { value } = event.target;
                setDateDebut(value);
              }}
            />
          
          
            <label  className="dflab"htmlFor="dateFin">Date Fin</label>
            <input
            className="dfinp"
              type="date"
              name="dateFin"
              id="dateFin"
              onChange={event => {
                const { value } = event.target;
                setDateFin(value);
              }}
            />
          
         
            <label className="tplab" htmlFor="type">Type </label>
            <input
            className="tpinp"
              type="text"
              name="type"
              id="type"
              placeholder="Exceptionnel, Sans-solde"
              onChange={event => {
                const { value } = event.target;
                setType(value);
              }}
            />
          
         
            <label className="molab" htmlFor="motif">Motif</label>
            <input
            className="moinp"
              type="text"
              name="motif"
              id="motif"
              onChange={event => {
                const { value } = event.target;
                setMotif(value);
              }}
            />
          
            <div className="ficont">
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
            </div>
          </div>
          
        </form>
        
     </div>
     { !error && open &&(
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
