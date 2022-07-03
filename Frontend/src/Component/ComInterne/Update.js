import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions } from "@mui/material";
import { useNavigate } from "react-router";
import useToken from "../useToken";

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

export default function Update() {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();

  const [form, setForm] = React.useState({});

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
        const { data } = await axios.get(
          `http://localhost:4000/ComInterne/getone/${id}`,
          config
        );
        setForm((curr) => ({
          Date: data?.Date,
          Titre: data?.Titre,
          Contenu: data?.Contenu,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Com = await axios.put(
      `http://localhost:4000/ComInterne/edit/${id}`,
      form,
      config
    );
    if (Com.data === "modificaation sauvegarde") {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="postup">
      <h1> Communication interne</h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListCom")}>
          Retour
        </button>
        <div className="postuptit"> Faires des modifications </div>
        <button className="postupret" onClick={handleSubmit}>
          Modifier
        </button>
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupform">
            <div className="colone">
              <label htmlFor="nomP">Date</label>
              <input
                type="date"
                name="nomP"
                defaultValue={form.Date}
                onChange={(e) => setForm({ Date: e.target.value })}
              />

              <label htmlFor="Salaire">Titre</label>
              <input
                type="text"
                name="Salaire"
                defaultValue={form.Salaire}
                onChange={(e) => setForm({ Titre: e.target.value })}
              />
              <label htmlFor="Salair">Contenu</label>
              <textarea
                type="text"
                name="Salair"
                defaultValue={form.Contenu}
                onChange={(e) => setForm({ Contenu: e.target.value })}
              />
            </div>

            {!error && open && (
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {" Cominterne modifie "}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    La cominterne a bien été modifie .
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => navigate(`/ListCom`)}> Retour </Button>
                </DialogActions>
              </Dialog>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
