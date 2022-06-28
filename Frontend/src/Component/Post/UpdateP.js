import * as React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as RiIcons from 'react-icons/ri';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useToken from '../useToken'
import dayjs from 'dayjs'

import "./preview.css";


export default function UpdatePM() {
  
  
  
  const { id } = useParams();
  const [form, setForm] = React.useState({});
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
    const fetchFCT = async () => {
      try {
        const { data } = await axios.get(  `http://localhost:4000/post/preview/${id}`, config );
        setForm((curr) => ({   
          Situation: data?.Situation,
          Salaire: data?.Salaire,
          StatusP: data?.StatusP,
          userId: data?.userId,
          depId: data?.depId,
          DateE: dayjs(data?.DateE)?.format('YYYY-MM-DD'),
          DateS: dayjs(data?.DateS)?.format('YYYY-MM-DD'),
          nomP: data?.nomP,
          
        }));
      } catch (err) {
        console.log(err);  } };
    if (id) fetchFCT();
  }, [id]);
  
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

  const post= await axios.put(`http://localhost:4000/post/edit/${id}`,formu, config)
        if (post.data === 'Modification sauvegardee') {
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
    <div className="postuptit"> Faires des modifications  </div>
    <button className="postupret" onClick={send} >Modifier</button>
    </div>
    <div className="postupformcont">
    <form action="#">
      <div className="postupform">

      <div className="colone">
      <label  htmlFor="nomP">Fonction</label>
        <input 
          type="text"
          name="nomP"
          defaultValue={form.nomP}
          onChange={e => setFormu({nomP: e.target.value})} /> 

      <label  htmlFor="Situation">Situation</label>
      <select name="Situation"  defaultValue={form.Situation}  onChange={e => setFormu({Situation: e.target.value})}   >
            <option  key="En phase d'essai">  En phase d'essai    </option> 
            <option key="Intégré">  Intégré   </option>    </select>



        <label htmlFor="Salaire">Salaire</label>
        <input 
        
          type="text"
          name="Salaire"
          defaultValue={form.Salaire}
          onChange={e => setFormu({Salaire: e.target.value})} /> 
          </div>
         

         <div className="coltwo">
         <label  htmlFor="StatutsP">Statut</label>
      <select name="StatusP"  defaultValue={form.StatusP}  onChange={e => setFormu({StatusP: e.target.value})}   >
            <option  key="Actif">  Actif   </option> 
            <option key="Non-Actif">  Non-Actif  </option>    </select>
         
         
         <label  htmlFor="DateE">Date d'occupation</label>
          <input  type="date"  name="DateE"         
          defaultValue={form.DateE}  onChange={e => setFormu({DateE: e.target.value})} /> 

          <label  htmlFor="DateS">Date de libération</label>
           <input  type="date" name="DateS" defaultValue={form.DateS}
          onChange={e => setFormu({DateS: e.target.value})} /> 
         
         </div>

         <div className="colthree">
        <label  htmlFor="userId">Employé</label>
        <select name="userId"  defaultValue={form.userId?.email}   onChange={e =>setFormu({emp: e.target.value})}   >
        
                       {datap.map((d, index)=>(
                        <option key={index} >
                        {d.email}
                     </option>))}
                       </select>

        <label  htmlFor="depId">Département</label>
        <select name="depId" defaultValue={form.depId?.NomD}  onChange={e => setFormu({dep: e.target.value})}   >
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
			  {" Modification sauvegardée "}
			</DialogTitle>
			<DialogContent>
			  <DialogContentText id="alert-dialog-description">
			Les informations modifiées  ont bien été  sauvegardées.
			  </DialogContentText>
			</DialogContent>
            
			</Dialog>)}
        </div>
    </form>
    </div>
 </div>
  )



}




