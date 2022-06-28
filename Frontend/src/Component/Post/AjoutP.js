import * as React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as RiIcons from 'react-icons/ri';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useToken from '../useToken'

import "./preview.css";


export default function AjoutP() {
  
  
  
  
  const [formu, setFormu] = React.useState({});
  const [datad, setDatad] = React.useState([]);
  const [datap, setDatap] = React.useState([]);
   const [open, setOpen]= React.useState(false);
   const [error, setError]= React.useState(false);




   let navigate= useNavigate()
const { token, setToken } = useToken();
const user= token.token;
let config = {
  headers: {
    'Authorization': 'Bearer ' + user
  }
}


        

  
  React.useEffect(() => {
    axios.get('http://localhost:4000/user/list', config)
    .then(res => {
        console.log(res.data)
        setDatap(res?.data)
    })
    .catch(err => {
        console.log(err);
    })
  },[])


  React.useEffect(() => {
    axios.get('http://localhost:4000/dep/list', config)
    .then(res => {
        console.log("getting from :::",res.data)
        setDatad(res?.data)
    })
    .catch(err => {
        console.log(err);
    })
  },[])

           







const send = async e => {
  e.preventDefault();

  const post= await axios.post(`http://localhost:4000/post/add`,formu, config)
        if (post.data === 'poste enregistre !') {
          setError(false)
          setOpen(true);
          
      } else {
        setError(true); 
        
      }
  }

  const handleClose = () => {
    setOpen(false);
    };

   
    
    
   

  return(


    <div className="postup">
    <h1> Postes</h1>
    <div className="postupstep">
    <button className="postupret" onClick={()=>navigate('/ListPost')}>Retour</button>
    <div className="postuptit"> Créer un nouveau poste </div>
    <button className="postupret" onClick={send} >Ajouter</button>
    </div>
    <div className="postupformcont">
    <form action="#">
      <div className="postupform">

      <div className="colone">
      <label  htmlFor="nomP">Fonction</label>
        <input 
          type="text"
          name="nomP"
          onChange={e => setFormu({nomP: e.target.value})} /> 

      <label  htmlFor="Situation">Situation</label>
      <select name="Situation" defaultValue=""   onChange={e => setFormu({Situation: e.target.value})}   >
      <option hidden value="">--Choisir--</option>
            <option  key="En phase d'essai">  En phase d'essai    </option> 
            <option key="Intégré">  Intégré   </option>    </select>



        <label htmlFor="Salaire">Salaire</label>
        <input 
        
          type="text"
          name="Salaire"
        
          onChange={e => setFormu({Salaire: e.target.value})} /> 
          </div>
         

         <div className="coltwo">
         <label  htmlFor="StatutsP">Statut</label>
      <select name="StatusP" defaultValue=""  onChange={e => setFormu({StatusP: e.target.value})}   >
      <option hidden value="">--Choisir--</option>
            <option  key="Actif">  Actif   </option> 
            <option key="Non-Actif">  Non-Actif  </option>    </select>
         
         
         <label  htmlFor="DateE">Date d'occupation</label>
          <input  type="date"  name="DateE"         
           onChange={e => setFormu({DateE: e.target.value})} /> 

          <label  htmlFor="DateS">Date de libération</label>
           <input  type="date" name="DateS" 
          onChange={e => setFormu({DateS: e.target.value})} /> 
         
         </div>

         <div className="colthree">
        <label  htmlFor="userId">Employé</label>
        <select name="userId" defaultValue=""   onChange={e =>setFormu({emp: e.target.value})}   >
        <option hidden value="">--Choisir--</option>
        
                       {datap.map((d, index)=>(
                        <option key={index} >
                        {d.email}
                     </option>))}
                       </select>

        <label  htmlFor="depId">Département</label>
        <select name="depId" defaultValue="" onChange={e => setFormu({dep: e.target.value})}   >
        <option hidden value="">--Choisir--</option>
                       {datad.map((d, index)=>(
                        <option key={index} >
                        {d.NomD}
                     </option>))}
                       </select>
        </div> 
                 
        {       !error && open && 
              (  <Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		  >
			<DialogTitle id="alert-dialog-title">
			  {" Création sauvegardée "}
			</DialogTitle>
			<DialogContent>
			  <DialogContentText id="alert-dialog-description">
			Le poste créé a bien été  sauvegardé.
			  </DialogContentText>
			</DialogContent>
            
			</Dialog>)}
        </div>
    </form>
    </div>
 </div>
  )



}




