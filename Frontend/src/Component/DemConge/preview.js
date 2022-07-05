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
import dayjs from 'dayjs'



import "./preview.css";


export default function Preview() {
  
  
  
  const { id } = useParams();
  const [form, setForm] = React.useState({});
   const [db, setDb]= React.useState(null);
   const [pj, setPj]= React.useState("");
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
          `http://localhost:4000/demCong/preview/${id}`, config
        );
        
        setForm((curr) => ({   
          type: data?.type,
          motif: data?.motif,
          userId: data?.userId?.Nom +' '+  data?.userId?.Prenom,
         
          cause: data?.cause
          
        }));
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);
  
  

    const accepter =(e) =>{
       e.preventDefault();
       axios.put(`http://localhost:4000/demCong/repad/${id}`, {autoAdmin: 'Acceptée'}, config)
       .then(data=>{
        if(data!=='modification sauvegardee')
        setErroru(true);
       })
       setOpen(true);
    }
    
    const refuser =(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:4000/demCong/repad/${id}`, {autoAdmin: 'Refusée'}, config)
        .then(dem=>{
            if(dem!=='modification sauvegardee')
            setErroru(true);
           })
        setOpen(true);
     }
     const handleClose = () => {
        setOpen(false);
      };
    const telecharger= (e) =>{
        e.preventDefault();
        axios.get(`http://localhost:4000/demCong/fileview/${id}`)
        .then(dem=>{
            setPj(`http://localhost:4000/${dem.data}`)
            console.log(dem.data)
           
           
           })
    }
 



    React.useEffect(() => {  
      const fetchFCT = async () => {
        try {
          
          const { data } = await axios.get(
            `http://localhost:4000/demCong/fileview/${id}`, config
          );
          
          // var file = new Blob([dem.data]);
        // const fileURL = URL.createObjectURL(file);
        // setPj(fileURL);
        
          setPj(`http://localhost:4000/${data}`);
          
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      };
      if (id) fetchFCT();
    }, [id]);
    
   
  
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
                <iframe src={pj} />
            </fieldset>
            <button className="prevbtntel" onClick={(e)=>{telecharger(e)}}><RiIcons.RiFileDownloadLine/> Télécharger</button>
            
           {/* { <a href={pj} target='_blank' > click </a>} */}


            <button className="prevbtnacc"  onClick={(e)=>{accepter(e)}}>Accepter</button>
            <button className="prevbtnref" onClick={(e)=>{refuser(e)}}>Refuser</button>
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
