
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions } from '@mui/material';
import './Lis.css';
import useToken from '../useToken';

async function Ajt(conf,request){
 

   console.log('heyyyy');

    
   
   return  axios.post('http://localhost:4000/dep/add',request, conf)
    .then(resp => {
        alert(resp.data);
    })
    .catch(err => {
        console.log(err);
    })
}






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

function Ajout() {
  const [open, setOpen] = React.useState(false);
  const[data,setDate]=useState([]);
  const [NomD, setNomD]= useState(null);
  const [email, setEmail]= useState(null);
  const [error, setError]= useState(false);
  const { token, setToken } = useToken();
  

  

        
   const handleClickOpen = () => {
    if(!error)
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


let navigate = useNavigate();
 
 



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



     


      const handleSubmit = async e => {
        e.preventDefault();
        const dep = await Ajt(config,{NomD, email});
        if (dep.data === 'departement enregistre !') {
          setError(false)
          
      } else {
        setError(true); 
        
      }

      }







 


    /*let navigate=useNavigate();
    const routeChange=() => {
      let path=`/Inter`;
      navigate(path);
    };*/
    return (
        <div className='ajout'> 
         
         
            
         <br />
         &nbsp;<h1>Ajouter un  département :</h1>
            <form onSubmit={handleSubmit}>
                &nbsp; &nbsp; &nbsp;<label htmlFor="fname" className='flab'>Nom du département :</label><br /><br />
                &nbsp; &nbsp; &nbsp;<input type="text" id="fname" name="fname" onChange={e => setNomD(e.target.value)} ></input><br />
                <select name="email" defaultValue={'DEFAULT'}  id="lname" value={data.email} onChange={e => setEmail(e.target.value)}  >
                <option value="none" selected disabled hidden> 
            </option> 
                       {data.map((d)=>(
                        <option key={d}  >
                        {d.email}


                     </option>))}
                       </select>
                &nbsp; &nbsp; &nbsp;<input id='bb' type="submit" value="Ajouter" onClick={handleClickOpen}></input>
               
            
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


           {
            error && (
              alert('Une erreur est survenue')
            )
           }
            </form>
        </div>






    )

}

export default Ajout;
