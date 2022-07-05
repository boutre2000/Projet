import * as React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useToken from "../../useToken";
import lottieJson from "./91001-success.json";
import Lottie from "react-lottie-player";
import "./update.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@mui/material/Modal";
export default function UpdatePM() {
  const { id } = useParams();
  const [form, setForm] = React.useState({});
  const [formu, setFormu] = React.useState({});
  const [datad, setDatad] = React.useState([]);
  const [datap, setDatap] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  let navigate = useNavigate();
  const { token, setToken } = useToken();
  const user = token.token;
  let config = {
    headers: {
      Authorization: "Bearer " + user,
    },
  };
  const routes = () => {
    let path = `/ListEmp`;
    navigate(path);
  };
  React.useEffect(async () => {
    const fetchFCT = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/AjoutEmp/user`,
          config
        );
        setForm((curr) => ({
          role: data?.role,
          Nom: data?.Nom,
          Prenom: data?.Prenom,
          prenomAr: data?.prenomAr,
          nomAr: data?.nomAr,
          situationFamiliale: data?.situationFamiliale,
          Enfant: data?.Enfant,
          nbrEnfant: data?.nbrEnfant,
          nomEps: data?.nomEps,
          prenomEps: data?.prenomEps,
          nomMere: data?.nomMere,
          prenomMere: data?.prenomMere,
          prenomPere: data?.prenomPere,
          prenomEpsAr: data?.prenomEpsAr,
          nomEpsAr: data?.nomEpsAr,
          adresse: data?.adresse,
          mobile: data?.mobile,
          email: data?.email,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    if (id) await fetchFCT();
  }, [id]);
  // }, []);
  const notify = () => toast("Update Success!");
  const send = async (e) => {
    e.preventDefault();
    console.log(id);
    const post = await axios.put(
      `http://localhost:4000/AjoutEmp/UIU}`,
      // `http://localhost:4000/AjoutEmp/UIU/${id}`,
      formu,
      config
    );
    if (post.data === "Modification effectuee") {
      setError(false);
      setOpen(true);
    } else {
      setError(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="postup">
      <h1> Employé</h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListEmp")}>
          Retour
        </button>
        <div className="postuptit"> Faires des modifications </div>
        <button className="postupret" onDoubleClick={notify} onClick={send}>
          Modifier
        </button>
        <ToastContainer />
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupform">
            <div className="colone">
              <label htmlFor="nomP">Nom</label>
              <input
                type="text"
                name="Nom"
                defaultValue={form.Nom}
                onChange={(e) => setFormu({ Nom: e.target.value })}
              />
              <label htmlFor="Prenom">Prenom</label>
              <input
                type="text"
                name="Prenom"
                defaultValue={form.Prenom}
                onChange={(e) => setFormu({ Prenom: e.target.value })}
              />
              <label htmlFor="nomAr">nomAr</label>
              <input
                type="text"
                name="nomAr"
                defaultValue={form.nomAr}
                onChange={(e) => setFormu({ nomAr: e.target.value })}
              />
              <label htmlFor="prenomAr">prenomAr</label>
              <input
                type="text"
                name="prenomAr"
                defaultValue={form.prenomAr}
                onChange={(e) => setFormu({ prenomAr: e.target.value })}
              />

              <label htmlFor="nomMere">nomMere</label>
              <input
                type="text"
                name="nomMere"
                defaultValue={form.nomMere}
                onChange={(e) => setFormu({ nomMere: e.target.value })}
              />

              <label htmlFor="prenomEpsAr">prenomEpsAr</label>
              <input
                type="text"
                name="prenomEpsAr"
                defaultValue={form.prenomEpsAr}
                onChange={(e) => setFormu({ prenomEpsAr: e.target.value })}
              />
            </div>

            <div className="coltwo">
              <label htmlFor="mobile">mobile</label>
              <input
                type="text"
                name="mobile"
                defaultValue={form.mobile}
                onChange={(e) => setFormu({ mobile: e.target.value })}
              />

              <label htmlFor="adresse">adresse</label>
              <input
                type="text"
                name="adresse"
                defaultValue={form.adresse}
                onChange={(e) => setFormu({ adresse: e.target.value })}
              />
              <label htmlFor="nomEpsAr">nomEpsAr</label>
              <input
                type="text"
                name="nomEpsAr"
                defaultValue={form.nomEpsAr}
                onChange={(e) => setFormu({ nomEpsAr: e.target.value })}
              />
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                defaultValue={form.email}
                onChange={(e) => setFormu({ email: e.target.value })}
              />
              <label htmlFor="prenomMere">prenomMere</label>
              <input
                type="text"
                name="prenomMere"
                defaultValue={form.prenomMere}
                onChange={(e) => setFormu({ prenomMere: e.target.value })}
              />
              <label htmlFor="prenomPere">prenomPere</label>
              <input
                type="text"
                name="prenomPere"
                defaultValue={form.prenomPere}
                onChange={(e) => setFormu({ prenomPere: e.target.value })}
              />
            </div>

            <div className="colthree">
              <label htmlFor="Enfant">Enfant</label>
              <select
                name="Enfant"
                defaultValue={form.Enfant}
                onChange={(e) => setFormu({ Enfant: e.target.value })}
              >
                <option key="oui">Oui </option>
                <option key="non"> Non </option>{" "}
              </select>
              <label htmlFor="nbrEnfant">nbrEnfant</label>
              <input
                type="number"
                name="nbrEnfant"
                defaultValue={form.nbrEnfant}
                onChange={(e) => setFormu({ nbrEnfant: e.target.value })}
              />
              <label htmlFor="situationFamiliale">Situation Familiale</label>
              <select
                name="situationFamiliale"
                defaultValue={form.situationFamiliale}
                onChange={(e) =>
                  setFormu({ situationFamiliale: e.target.value })
                }
              >
                <option key="Célibataire"> Célibataire </option>
                <option key="Marié"> Marié </option>{" "}
                <option key="Divorcé"> Divorcé </option>{" "}
                <option key="Veuf"> Veuf </option>{" "}
              </select>

              <label htmlFor="prenomEps">prenomEps</label>
              <input
                type="text"
                name="prenomEps"
                defaultValue={form.prenomEps}
                onChange={(e) => setFormu({ prenomEps: e.target.value })}
              />

              <label htmlFor="idP">idP</label>
              <input
                type="number"
                name="idP"
                defaultValue={form.idP}
                onChange={(e) => setFormu({ idP: e.target.value })}
              />
              <label htmlFor="nomEps">nomEps</label>
              <input
                type="text"
                name="nomEps"
                defaultValue={form.nomEps}
                onChange={(e) => setFormu({ nomEps: e.target.value })}
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
                  {" Modification sauvegardée "}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Les informations modifiées ont bien été sauvegardées.
                  </DialogContentText>
                </DialogContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Button onClick={routes}>Liste des Employés</Button>{" "}
                </Typography>
              </Dialog>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
