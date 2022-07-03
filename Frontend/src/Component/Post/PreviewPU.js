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


export default function PreviewPU() {
  
  
  const [form, setForm] = React.useState({});
  const { id } = useParams();

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
        
        const { data } = await axios.get(`http://localhost:4000/post/preview/${id}`, config );
        
        
        setForm((curr) => ({   
          Situation: data?.Situation,
          Salaire: data?.Salaire,
          StatusP: data?.StatusP,
          userId: data?.userId,
          depId: data?.depId,
          DateE: dayjs(data?.DateE)?.format('DD-MM-YYYY'),
          DateS: dayjs(data?.DateS)?.format('DD-MM-YYYY'),
          nomP: data?.nomP,
          
        }));
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);
  
 

           


  return(

    
    <div className="postup">
    <h1> Postes</h1>
    <div className="postupstep">
    <button className="postupret" onClick={()=>navigate('/ListPost')}>Retour</button>
    <div className="postuptit"> Visualiser un poste </div>
    </div>
    <div className="postupformcont">
    <form action="#">
      <div className="postupform">
        <div className="colone">
           <fieldset >
                <legend>Département:</legend>
                <span> {form?.depId?.NomD} </span>
            </fieldset>
            <fieldset >
                <legend>Fonction:</legend>
                <span> {form.nomP} </span>
            </fieldset>
            <fieldset >
                <legend>Situation:</legend>
                <span> {form.Situation} </span>
            </fieldset>
            </div>
            <div className="coltwo">
            <fieldset >
                <legend>Statut:</legend>
                <span> {form.StatusP} </span>
            </fieldset>
            <fieldset >
                <legend>Salaire:</legend>
                <span> {form.Salaire} </span>
            </fieldset>
            </div>
            <div className="colthree">
            <fieldset >
                <legend>Date d'occupation:</legend>
                <span> {form.DateE} </span>
            </fieldset>
            <fieldset >
                <legend>Date de libération:</legend>
                <span> {form.DateS} </span>
            </fieldset>
            </div>
     </div>
    </form>
    </div>
 </div>
  )



}




