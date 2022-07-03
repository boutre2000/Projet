import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import useToken from "../useToken";
import "../Post/preview.css";
import * as GrIcons from "react-icons/gr";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AjoutC() {
  const [email, setEmail] = useState("");
  const [dateEd, setDateEd] = useState("");
  const [nomP, setNomP] = useState("");
  const [file, setFile] = useState();
  const [pj, setPj] = useState("Support");
  const [open, setOpen] = React.useState(false);
  const [datad, setDatad] = React.useState([]);
  const [datap, setDatap] = React.useState([]);
  const [error, setError] = React.useState(false);

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
    data.append("email", email);
    data.append("dateEd", dateEd);
    data.append("nomP", nomP);
    data.append("file", file);

    axios
      .post("http://localhost:4000/contrat/add", data, config)
      .then((res) => {
        if (res.data === "Contrat cree !") {
          setError(false);
          setOpen(true);
        } else {
          setError(true);
        }
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/user/list", {
        ...config,
        params: {
          havePost: true,
        },
      })
      .then((res) => {
        console.log(res.data);
        setDatap(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/post/list", config)
      .then((res) => {
        console.log("getting from :::", res.data);
        setDatad(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setPj(e.target.files[0].name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="postup">
      <h1> Contrat</h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListCont")}>
          Retour
        </button>
        <div className="postuptit"> Créer un nouveau contrat </div>
        <button className="postupret" onClick={send}>
          Ajouter
        </button>
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupform">
            <div className="colone">
              <label htmlFor="email">Employé</label>
              <select
                name="email"
                defaultValue=""
                onChange={(e) => setEmail(e.target.value)}
              >
                <option hidden value="" style={{ color: "#B9C4C8" }}>
                  --Choisir--
                </option>

                {datap.map((d, index) => (
                  <option key={index}>{d.email}</option>
                ))}
              </select>

              <label htmlFor="postId">Poste</label>
              <select
                name="postId"
                defaultValue=""
                onChange={(e) => setNomP(e.target.value)}
              >
                <option hidden value="" style={{ color: "#B9C4C8" }}>
                  --Choisir--
                </option>
                {datad.map((d, index) => (
                  <option key={index}>{d.nomP}</option>
                ))}
              </select>

              <label htmlFor="dateEd">Date d'édition</label>
              <input
                type="date"
                name="dateEd"
                onChange={(e) => setDateEd(e.target.value)}
              />
            </div>

            <div className="coltwo">
              <div className="ficont">
                <label className="postupfi" htmlFor="file">
                  {pj} <GrIcons.GrUpload />{" "}
                </label>
                <input
                  className="fiinp"
                  type="file"
                  id="file"
                  placeholder="Choisir un fichier"
                  style={{ display: "none", border: "dashed" }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            {!error && open && (
              <Dialog
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
                    Le contrat créé a bien été sauvegardé.
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
