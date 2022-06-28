import * as React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import fileDownload from 'js-file-download'
import FileViewer from "react-file-viewer";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import useToken from '../useToken'
import dayjs from 'dayjs'


import "./preview.css";


export default function PreviewU() {
  
  
  
  const { id } = useParams();
  const [form, setForm] = React.useState({});
   const [db, setDb]= React.useState(null);
   const [open, setOpen]= React.useState(false);
   const [erroru, setErroru]= React.useState(false);




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
        
        const { data } = await axios.get(
          `http://localhost:4000/demCong/preview/${id}`, config
        );
        
        
        setForm((curr) => ({   
          type: data?.type,
          motif: data?.motif,
          userId: data?.userId?.Nom +' '+  data?.userId?.Prenom,
          dateDebut: dayjs(data?.dateDebut)?.format('DD-MM-YYYY'),
          dateFin: dayjs(data?.dateFin)?.format('DD-MM-YYYY'),
          cause: data?.cause,
          
        }));
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);
  
  

    
   
     const handleClose = () => {
        setOpen(false);
      };
    const telecharger= (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:4000/demCong/fileview/${id}`, {responseType: 'blob'}, config)
        .then(dem=>{
            fileDownload(dem, form.cause)
           })
    }
    const onError = e => {
      console.log(e, "error in file-viewer");
    };
    const docs=[{ uri: (form.cause) }]

  return(

    <div className="preview">
    <h1>Demande de congé</h1>    
    <ul>
    <li> <span className="prevtit"> Employé:</span><span className="prevemp">{form.userId} </span>&nbsp; &nbsp;</li>
    <li><span className="prevtit">Date début:</span> {form.dateDebut} &nbsp; &nbsp;</li>
    <li> <span className="prevtit">Date fin:</span> {form.dateFin} &nbsp; &nbsp;</li>
    </ul>
            <fieldset className='prevtype'>
                <legend>Type:</legend>
                <span> {form.type} </span>
            </fieldset>
            <fieldset className='prevmotif'>
                <legend>Motif:</legend>
                <span> {form.motif} </span>
            </fieldset>
            <fieldset className='prevcause'>
                <legend>Justification:</legend>
                
            </fieldset>
            <button className="prevbtntel" onClick={(e)=>{telecharger(e)}}><RiIcons.RiFileDownloadLine/> Télécharger</button>
            
           
        
   </div>
  )



}



//<DocViewer documents={docs}  pluginRenderers={DocViewerRenderers}/>
//        var fileExtension = data?.cause.split('.').pop(); 
