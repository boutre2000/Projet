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



  const [formu, setFormu] = React.useState({  Situation: "", Salaire: "", StatusP: "", DateE: "", DateS: "" })
  const [datad, setDatad] = React.useState([]);
  const [datap, setDatap] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [nomP, setNomP] = React.useState("");
  const [NomD, setNomD] = React.useState("");
  const [Salaire, setSalaire] = React.useState(null);
  const [Situation, setSituation] = React.useState("");
  const [StatusP, setStatusP] = React.useState("");
  const [DateE, setDateE] = React.useState("");
  const [DateS, setDateS] = React.useState("");




  let navigate = useNavigate()
  const { token, setToken } = useToken();
  const user = token.token;
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
  }, [])


  React.useEffect(() => {
    axios.get('http://localhost:4000/dep/list', config)
      .then(res => {
        console.log("getting from :::", res.data)
        setDatad(res?.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])









  const send = async e => {
    e.preventDefault();
    console.log(formu)
    const post = await axios.post(`http://localhost:4000/post/add`, {email,nomP,NomD,Salaire,Situation,StatusP,DateE,DateS}
    , config)
    if (post.data === 'poste enregistre !') {
      setError(false)
      setOpen(true);

    } else {
      setError(true);
      alert('Une erreur est survenue !')

    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    console.log(formu(e.target.name))
    setFormu(formu => ( {...formu,  [e.target.name]: e.target.value}));
  };




  return (


    <div className="postup">
      <h1> Postes</h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate('/ListPost')}>Retour</button>
        <div className="postuptit"> Créer un nouveau poste </div>
        <button className="postupret" onClick={send} >Ajouter</button>
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupform">

            <div className="colone">

              <label htmlFor="nomP">Fonction</label>
              <input
                type="text"
                name="nomP"
                id="nomP"
                onChange={(e)=>setNomP(e.target.value)}/>

              <label htmlFor="Situation">Situation</label>
              <select name="Situation" id="Situation" onChange={(e)=>setSituation(e.target.value)}   >
                <option hidden value="">--Choisir--</option>
                <option key="En phase d'essai">  En phase d'essai    </option>
                <option key="Intégré">  Intégré   </option>    </select>



              <label htmlFor="Salaire">Salaire</label>
              <input
                type="number"
                name="Salaire"
                id="Salaire"

                onChange={(e)=>setSalaire(e.target.value)} />
            </div>


            <div className="coltwo">
              <label htmlFor="StatutsP">Statut</label>
              <select name="StatusP" id="StatusP"  onChange={(e)=>setStatusP(e.target.value)}   >
                <option hidden value="">--Choisir--</option>
                <option key="Actif">  Actif   </option>
                <option key="Non-Actif">  Non-Actif  </option>    </select>


              <label htmlFor="DateE">Date d'occupation</label>
              <input type="date" name="DateE" id="DateE"
               onChange={(e)=>setDateE(e.target.value)}/>

              <label htmlFor="DateS">Date de libération</label>
              <input type="date" name="DateS" id="DateS"
              onChange={(e)=>setDateS(e.target.value)} />

            </div>

            <div className="colthree">
              <label htmlFor="email">Employé</label>
              <select name="email" id="email"  onChange={(e)=>setEmail(e.target.value)}   >
                <option hidden value="">--Choisir--</option>

                {datap.map((d, index) => (
                  <option key={index} >
                    {d.email}
                  </option>
                ))}
              </select>

              <label htmlFor="depId">Département</label>
              <select name="depId" id="depId" onChange={(e)=>setNomD(e.target.value)}   >
                <option hidden value="">--Choisir--</option>
                {datad.map((d, index) => (
                  <option key={index} >
                    {d.NomD}
                  </option>))}
              </select>
            </div>

            {!error && open &&
              (<Dialog
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




