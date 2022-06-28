import * as React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as RiIcons from 'react-icons/ri';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import fileDownload from 'js-file-download'
import FileViewer from "react-file-viewer";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import useToken from '../useToken'



import "./preview.css";


export default function Preview() {
  
  
  
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
const role= token.role;






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
  
  

    const accepter =(e) =>{
       e.preventDefault();
       axios.put(`http://localhost:4000/demPap/repad/${id}`, {etatD: 'Envoyé'}, config)
       .then(data=>{
        if(data!=='modification sauvegardee')
        setErroru(true);
       })
       setOpen(true);
    }
    
   
     const handleClose = () => {
        setOpen(false);
      };
    
  

  return(

    <div className="preview">
    <h1>Demande de Papier</h1>    
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
            <button className="prevbtnacc"  onClick={(e)=>{accepter(e)}}>Accepter</button>
        
            { open &&(
            <div>
         <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Réponse sauvegardée "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Votre réponse a bien été sauvegardée, d'en l'employé  sera notifée.
          </DialogContentText>
        </DialogContent>
        </Dialog>
        </div>
          )}
           
        
   </div>
  )



}



//<DocViewer documents={docs}  pluginRenderers={DocViewerRenderers}/>
//        var fileExtension = data?.cause.split('.').pop(); 
