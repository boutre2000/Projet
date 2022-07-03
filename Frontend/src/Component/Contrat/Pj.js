import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import './Contrat.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
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

function AjoutC() {


    const { token, setToken } = useToken();
    const user= token.token
  
  
    let config = {
      headers: {
        'Authorization': 'Bearer ' + user
      }
  }
    let navigate=useNavigate();
    const routeChange=() => {
    let path=`/ListCont`;
         navigate(path);
      };
   
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

const {id} = useParams()
const [form,setForm] = React.useState({})
/*
React.useEffect(()=>{
    const fetchFCT = async()=>{
        try{
            const {data} = await axios.get(`http://localhost:4000/contrat/${id}`)
            

        }catch(err){
            console.log(err)
        }
    }
    if(id) fetchFCT()
},[id])*/

const handleChange = (e)=>{
        setForm(curr=>({/*...curr,*/[e.target.name]:e.target.files[0]}))
}

    return (
        <div className='ajoutC'> 
        <br /><br />
        &nbsp;<h1>Inserer votre contrat :</h1>
            <form onSubmit={(e) => Ajt(e,id)}>
                
                <br /><br /><br />
                <input type="file" accept='image/*,.pdf' id="Co" onChange={handleChange} name="pj"></input><br />
               

                <input  id="cb" type="submit" value="Insérer" onClick={handleOpen}></input>

                <Modal
               open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            insertion avec succès 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <Button sx={styl} onClick={routeChange}>
           Liste des contrat </Button>
          </Typography>
        </Box>
      </Modal>
            </form>
        </div>






    )

}
function Ajt(e,id){

    const { token, setToken } = useToken();
    const user= token.token
  
  
    let config = {
      headers: {
        'Authorization': 'Bearer ' + user
      }
  }
    e.preventDefault();
    let request={
        
        pj:document.getElementById('Co').files[0],
        
    }
    const formData = new FormData()
    formData.append('file',request.pj)
    axios.put(`http://localhost:4000/contrat/sendpj/${id}`,formData, config)
    .then(resp => {
        alert(resp.data.message);
    })
    .catch(err => {
        console.log(err);
    })
}
export default AjoutC;
