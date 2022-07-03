import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import lottieJson from "./91001-success.json";
import Lottie from "react-lottie-player";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions } from "@mui/material";
import { useNavigate } from "react-router";
import useToken from "../useToken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function Update() {
  const notify = () => toast("Wow so easy!");

  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const [Date, setDate] = useState("");
  const [Titre, setTitre] = useState("");
  const [Contenu, setContenu] = useState("");

  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    if (!error) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();

  const { token, setToken } = useToken();
  const user = token.token;

  let config = {
    headers: {
      Authorization: "Bearer " + user,
    },
  };

  React.useEffect(() => {
    const fetchFCT = async () => {
      try {
        const req = await axios.get(
          `http://localhost:4000/ComInterne/getone/${id}`,
          config
        );
        console.log(req.data);
        setDate(req?.data?.Date);
        setTitre(req?.data?.Titre);
        setContenu(req?.data?.Contenu);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const com = await axios.post(
      `http://localhost:4000/ComInterne/add`,
      { Date, Titre, Contenu },
      config
    );
    if (com.data === "modificaation sauvegarde") {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="postup">
      <h1> Ajouter Une communication interne</h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListCom")}>
          Retour
        </button>
        <div className="postuptit"> Créer une nouvelle Communication </div>
        <button className="postupret" onClick={handleSubmit}>
          Ajouter
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="Lottie">
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 99, height: 99 }}
              />
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ajouté avec succès{" "}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button onClick={() => navigate(`/ListCom`)}>Retour</Button>
            </Typography>
          </Box>
        </Modal>
        {/* <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {" Communication interne est créé "}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              La communication interne a bien été ajouté .
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => navigate(`/ListCom`)}> Retour </Button>
          </DialogActions>
        </Dialog> */}
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupform">
            <div className="colone">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                onChange={(e) => setDate(e.target.value)}
              />
              <label htmlFor="titre">Titre</label>
              <input
                type="text"
                name="titre"
                onChange={(e) => setTitre(e.target.value)}
              />
              <label htmlFor="contenu">Contenu</label>
              <input
                type="text"
                name="contenu"
                onChange={(e) => setContenu(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
