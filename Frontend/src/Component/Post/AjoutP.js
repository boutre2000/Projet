import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions } from "@mui/material";
import "./preview.css";
import useToken from "../useToken";

export default function Ajt() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 200,
    bgcolor: "background.paper",
    fontSize: 20,
    border: "2px solid #000",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };
  const styl = {
    position: "absolute",
    top: "70%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 70,
    bgcolor: "background.paper",
    border: "2px solid #00CCFF",
    boxShadow: 24,
    borderRadius: 10,
    backgroundColor: "#009AD2",
    color: "#000",
    fontSize: 15,
    p: 3,
  };

  const [open, setOpen] = React.useState(false);
  const [dataE, setDataE] = useState([]);
  const [dataD, setDataD] = useState([]);

  const [nomP, setnomP] = useState("");
  const [Situation, setSituation] = useState("");
  const [Salaire, setSalaire] = useState("");
  const [StatutsP, setStatutsP] = useState("");
  const [DateE, setDateE] = useState("");

  const [DateS, setDateS] = useState("");
  const [email, setemail] = useState("");
  const [NomD, setNomD] = useState();

  const [error, setError] = useState(false);

  const { token, setToken } = useToken();

  const handleClickOpen = () => {
    if (!error) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();

  const user = token.token;

  let config = {
    headers: {
      Authorization: "Bearer " + user,
    },
  };

  const send = (event) => {
    const data = new FormData();
    data.append("email", email);
    data.append("DateE", DateE);
    data.append("DateS", DateS);
    data.append("NomD", NomD);
    data.append("nomP", nomP);
    data.append("StatutsP", StatutsP);
    data.append("Salaire", Salaire);
    data.append("Situation", Situation);

    axios
      .post("http://localhost:4000/post/add", data, config)
      .then((resp) => {
        if (resp.data === "Poste créee !") {
          setError(false);
          setOpen(true);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/dep/list", config)
      .then((res) => {
        console.log("getting from :::", res.data);
        setDataD(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/list", config)
      .then((res) => {
        console.log("getting from :::", res.data);
        setDataE(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const post = await Ajt(config, {
  //     nomP,
  //     Situation,
  //     Salaire,
  //     StatutsP,
  //     DateE,
  //     DateS,
  //     NomD,
  //     email,
  //   });
  //   if (post?.data === "post enregistre !") {
  //     setError(false);
  //   } else {
  //     setError(true);
  //   }
  // };

  const handleChange = (e) => {
    setForm((curr) => ({ /*...curr,*/ [e.target.name]: e.target.files[0] }));
  };

  return (
    <div className="postup">
      <h1> Postes</h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListPost")}>
          Retour
        </button>
        <div className="postuptit"> Créer un nouveau poste </div>
        <button className="postupret" onClick={send}>
          Ajouter
        </button>
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupform">
            <div className="colone">
              <label htmlFor="nomP">Fonction</label>
              <input
                type="text"
                name="nomP"
                onChange={(e) => setnomP(e.target.value)}
              />

              <label htmlFor="Situation">Situation</label>
              <select
                name="Situation"
                defaultValue=""
                onChange={(e) => setSituation(e.target.value)}
              >
                <option hidden value="">
                  --Choisir--
                </option>
                <option key="En phase d'essai"> En phase d'essai </option>
                <option key="Intégré"> Intégré </option>{" "}
              </select>

              <label htmlFor="Salaire">Salaire</label>
              <input
                type="text"
                name="Salaire"
                onChange={(e) => setSalaire(e.target.value)}
              />
            </div>

            <div className="coltwo">
              <label htmlFor="StatutsP">Statut</label>
              <select
                name="StatusP"
                defaultValue=""
                onChange={(e) => setStatutsP(e.target.value)}
              >
                <option hidden value="">
                  --Choisir--
                </option>
                <option key="Actif"> Actif </option>
                <option key="Non-Actif"> Non-Actif </option>{" "}
              </select>

              <label htmlFor="DateE">Date d'occupation</label>
              <input
                type="date"
                name="DateE"
                onChange={(e) => setDateE(e.target.value)}
              />

              <label htmlFor="DateS">Date de libération</label>
              <input
                type="date"
                name="DateS"
                onChange={(e) => setDateS(e.target.value)}
              />
            </div>
            <div className="colthree">
              <label htmlFor="userId">Employé</label>
              <select
                name="userId"
                defaultValue=""
                onChange={(e) => setemail(e.target.value)}
              >
                <option hidden value="">
                  --Choisir--
                </option>

                {dataE.map((d, index) => (
                  <option key={index}>{d.email}</option>
                ))}
              </select>

              <label htmlFor="depId">Département</label>
              <select
                name="depId"
                defaultValue=""
                onChange={(e) => setNomD(e.target.value)}
              >
                <option hidden value="">
                  --Choisir--
                </option>
                {dataD.map((d, index) => (
                  <option key={index}>{d.NomD}</option>
                ))}
              </select>
            </div>
          </div>
          {/* &nbsp; &nbsp; &nbsp;
          <input
            id="bb"
            type="submit"
            value="Ajouter"
            onClick={handleClickOpen}
          ></input> */}
          {!error && open && (
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{" post créé "}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Le post a bien été enregistré .
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => navigate(`/ListPost`)}> Retour </Button>
              </DialogActions>
            </Dialog>
          )}
          {error && alert("Une erreur est survenue")}
        </form>
      </div>
    </div>
  );
}
