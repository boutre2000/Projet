import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions } from '@mui/material';
import { useNavigate } from 'react-router';
import './Lis.css';
import useToken from '../useToken';







const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 200,
    bgcolor: 'background.paper',
    fontSize: 20,
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };
  const styl = {
    position: 'absolute',
    top: '70%',
    left: '45%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 70,
    bgcolor: 'background.paper',
    border: '2px solid #00CCFF',
    boxShadow: 24,
    borderRadius: 10,
    backgroundColor: '#009AD2',
    color: '#000',
    fontSize: 15,
    p: 3,
   

  };

function Update() {

  const [open, setOpen] = React.useState(false);
const {id} = useParams()
const [NomD, setNomD]= useState("");
  const [email, setEmail]= useState("");
  const [error, setError]= useState(false);
const[data,setDate]=useState([])



      
const handleClickOpen = () => {
  if(!error)
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};


let navigate = useNavigate();

    const { token, setToken } = useToken();
    const user= token.token
  
  
    let config = {
      headers: {
        'Authorization': 'Bearer ' + user
      }
  }

  useEffect(() => {
    axios.get('http://localhost:4000/user/list', config)
    .then(res => {
        console.log("getting from :::",res.data)
        setDate(res.data)
    })
    .catch(err => {
        console.log(err);
    })
  },[])

   
   

React.useEffect(()=>{
    const fetchFCT = async()=>{
        try{
            const req = await axios.get(`http://localhost:4000/dep/getone/${id}`, config)
            console.log(req.data)
            setNomD(req?.data?.NomD)
            setEmail(req?.data?.RespId?.email)
            

        }catch(err){
            console.log(err)
        }
    }
    if(id) fetchFCT()
},[id])





const handleSubmit = async e => {
  e.preventDefault();

  const dep= await axios.put(`http://localhost:4000/dep/edit/${id}`,{NomD, email}, config)
        if (dep.data === 'modificaation sauvegarde') {
          setError(false)
          
      } else {
        setError(true); 
        
      }
  }



    return (
        
        <div className='ajout'> 
         <br />
         &nbsp;<h1>Update Département :</h1>
            <form onSubmit={handleSubmit}>
                &nbsp; &nbsp; &nbsp;<label className='flab' htmlFor="fname">Nom du departement :</label><br /><br />
                &nbsp; &nbsp; &nbsp;<input type="text" id="fname" value={NomD} onChange={e => setNomD(e.target.value)}  name="NomD" ></input><br />
                &nbsp; &nbsp; &nbsp;<label className='llab' htmlFor="lname">Mail de responsable:</label><br /><br />
                <select name="email"  id="lname" value={email}  onChange={e => setEmail(e.target.value)}   >
                       {data.map((d, index)=>(
                        <option key={index} >
                        {d.email}
                     </option>))}
                       </select> &nbsp; &nbsp; &nbsp;<input id='bb' type="submit" value="Update" onClick={handleClickOpen}></input>
                       {       !error && open && 
              (  <Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		  >
			<DialogTitle id="alert-dialog-title">
			  {" Département créé "}
			</DialogTitle>
			<DialogContent>
			  <DialogContentText id="alert-dialog-description">
			Le département a bien été  enregistré   .
			  </DialogContentText>
			</DialogContent>
            <DialogActions>
          <Button onClick={()=>navigate(`/ListDep`)}> Retour  </Button>
        </DialogActions>
			</Dialog>)}
            </form>
        </div>






    )

}

export default Update;
