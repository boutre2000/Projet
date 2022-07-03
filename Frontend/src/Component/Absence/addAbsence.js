import React, { useState } from "react";
import { useNavigate } from "react-router";
import Axios from "axios";
import useToken from "../useToken";
import "./addAbsence.css";
import * as FiIcons from "react-icons/fi";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
export default function Addabsence() {
  const [dateDebut, setDateDebut] = useState();
  const [dateFin, setDateFin] = useState();
  const [motif, setMotif] = useState();
  const [file, setFile] = useState();
  const [pj, setPj] = useState("Ajouter Une justification");
  const [open, setOpen] = React.useState(false);
  const notify = () => toast("Upload Justify Success!");

  let navigate = useNavigate();

  const { token, setToken } = useToken();
  const user = token.token;

  let config = {
    headers: {
      Authorization: "Bearer " + user,
    },
  };
  const send = (event) => {
    const data = new FormData();
    data.append("dateDebut", dateDebut);
    data.append("dateFin", dateFin);
    data.append("motif", motif);
    data.append("file", file);

    Axios.post("http://localhost:4000/demAbs/add", data, config)
      .then((res) => setOpen(true))
      .catch((err) => console.log(err));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setPj(e.target.files[0].name);
  };
  return (
    <div className="addconge">
      <h1> Demande d'absence</h1>
      <div className="addcgstep">
        <button className="addcgret" onClick={() => navigate("/absence")}>
          Retour
        </button>
        <div className="addcgtit">
          {" "}
          <br /> Créer une demande{" "}
        </div>
        <button className="addcgret" onClick={send}>
          Créer
        </button>
      </div>
      <div className="addcgformcont">
        <form action="#">
          <div className="addcgform">
            <label className="dblab" htmlFor="dateDebut">
              Date début
            </label>
            <input
              className="dbinp"
              type="date"
              name="dateDebut"
              onChange={(event) => {
                const { value } = event.target;
                setDateDebut(value);
              }}
            />

            <label className="dflab" htmlFor="dateFin">
              Date Fin
            </label>
            <input
              className="dfinp"
              type="date"
              name="dateFin"
              onChange={(event) => {
                const { value } = event.target;
                setDateFin(value);
              }}
            />

            <label className="molab" htmlFor="motif">
              Motif
            </label>
            <input
              className="moinp"
              type="text"
              name="motif"
              onChange={(event) => {
                const { value } = event.target;
                setMotif(value);
              }}
            />

            <div className="ficont">
              <label className="filab" htmlFor="file">
                {pj} <FiIcons.FiUpload />{" "}
              </label>
              <input
                className="fiinp"
                type="file"
                id="file"
                placeholder="Choisir un fichier"
                style={{ display: "none", border: "dashed" }}
                // onChange={(event) => {
                //   const file = event.target.files[0];
                //   setFile(file);
                onChange={(e) => {
                  handleChange(e);
                }}
                onClick={notify}
              />
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
      {open && (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Demande créée"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Votre demande a bien été sauvegardée.
              </DialogContentText>
              <Button onClick={() => navigate(`/absenceu`)}>
                Ma liste d'absence
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
