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
          `http://localhost:4000/demPap/preview/${id}`, config
        );
       
        let u=  data?.userId.Nom +' '+  data?.userId.Prenom;
        setForm((curr) => ({   
          Nom: data?.Nom,
          format: data?.format,
          etatD: data?.etatD,
          userId: u,
       
          
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
   
    const onError = e => {
      console.log(e, "error in file-viewer");
    };


  return(

    <div className="preview">
    <h1>Demande de papier</h1>    
    <ul>
    <li> <span className="prevtit"> Employé:</span><span className="prevemp">{form.userId} </span>&nbsp; &nbsp;</li>
    </ul>
            <fieldset className='prevtype'>
                <legend>Nom:</legend>
                <span> {form.Nom} </span>
            </fieldset>
            <fieldset className='prevmotif'>
                <legend>Format:</legend>
                <span> {form.format} </span>
            </fieldset>
            <fieldset className='prevmotif'>
                <legend>Etat:</legend>
                <span> {form.etatD} </span>
            </fieldset>
            
           
            
           
        
   </div>
  )



}



//<DocViewer documents={docs}  pluginRenderers={DocViewerRenderers}/>
//        var fileExtension = data?.cause.split('.').pop(); 
