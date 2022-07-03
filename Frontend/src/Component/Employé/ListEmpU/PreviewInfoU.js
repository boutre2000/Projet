// import React from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import useToken from "../../useToken";
// import Button from "@mui/material/Button";
// import "./preview.css";

// function Preview() {
//   let navigate = useNavigate();
//   const routes = () => {
//     let path = `/ListEmp`;
//     navigate(path);
//   };
//   const { id } = useParams();
//   const [form, setForm] = React.useState({
//     //   Role: "",
//     //   email: "",
//     //   Nom: "",
//     //   Prenom: "",
//     //   sexe: "",
//     //   dateNaiss: "",
//   });

//   const { token, setToken } = useToken();
//   const user = token.token;
//   let config = {
//     headers: {
//       Authorization: "Bearer " + user,
//     },
//   };
//   React.useEffect(() => {
//     const fetchFCT = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:4000/AjoutEmp/user`,
//           config
//         );
//         setForm((curr) => ({
//           Role: data?.Role,
//           email: data?.email,
//           droitCong: data?.droitCong,
//           idP: data?.idP,
//           Nom: data?.Nom,
//           Prenom: data?.Prenom,
//           sexe: data?.sexe,
//           dateNaiss: data?.dateNaiss,
//           prenomAr: data?.prenomAr,
//           nomAr: data?.nomAr,
//           situationFamiliale: data?.situationFamiliale,
//           adresse: data?.adresse,
//           ccp: data?.ccp,
//           rib: data?.rib,
//           numSs: data?.numSs,
//           numCni: data?.numCni,
//           mobile: data?.mobile,
//           Enfant: data?.Enfant,
//           nbrEnfant: data?.nbrEnfant,
//           nomEps: data?.nomEps,
//           prenomEps: data?.prenomEps,
//           nomMere: data?.nomMere,
//           prenomMere: data?.prenomMere,
//           prenomPere: data?.prenomPere,
//           prenomEpsAr: data?.prenomEpsAr,
//           nomEpsAr: data?.nomEpsAr,
//         }));
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     if (id) fetchFCT();
//   }, [id]);

//   //   const style = {
//   //     position: "absolute",
//   //     top: "50%",
//   //     left: "50%",
//   //     transform: "translate(-50%, -50%)",
//   //     width: 400,
//   //     bgcolor: "background.paper",
//   //     border: "2px solid #000",
//   //     boxShadow: 24,
//   //     p: 4,
//   //   };

//   return (
//     <div className="infoo">
//       <div className="info">
//         <p>Les informations de l'employé :</p>
//         <form>
//           <label for="fname">Mon Nom </label>
//           <br />
//           <input
//             type="text"
//             id="fname"
//             value={form.Nom}
//             name="Nom"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="lname">Mon Prénom </label>
//           <br />
//           <input
//             type="text"
//             id="lname"
//             value={form.Prenom}
//             name="Prenom"
//             disabled
//           ></input>
//           <br />
//           <br />
//           <label for="faname"> اللقب </label>
//           <br />
//           <input
//             type="text"
//             id="faname"
//             value={form.prenomAr}
//             name="prenomAr"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="fanme">الاسم </label>
//           <br />
//           <input
//             type="text"
//             id="fanme"
//             value={form.nomAr}
//             name="nomAr"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="role">Role </label>
//           <br />
//           <input
//             type="text"
//             id="role"
//             value={form.Role}
//             name="Role"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="droitCong">Droit De Congé </label>
//           <br />
//           <input
//             type="number"
//             id="droitCong"
//             value={form.droitCong}
//             name="droitCong"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="idP">idP </label>
//           <br />
//           <input
//             type="number"
//             id="idP"
//             value={form.idP}
//             name="idP"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="l">Situation familiale </label>
//           <br />
//           <input
//             type="text"
//             id="l"
//             value={form.situationFamiliale}
//             name="situationFamiliale"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="Enfant">Enfant </label>
//           <br />
//           <input
//             type="string"
//             id="Enfant"
//             value={form.Enfant}
//             name="Enfant"
//             disabled
//           />
//           <br />
//           <br /> <label for="nbrEnfant">Nombre d'Enfants </label>
//           <br />
//           <input
//             type="number"
//             id="nbrEnfant"
//             value={form.nbrEnfant}
//             name="nbrEnfant"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="email">Email </label>
//           <br />
//           <input
//             type="text"
//             id="email"
//             value={form.email}
//             name="email"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="sexe">Sexe </label>
//           <br />
//           <input
//             type="text"
//             id="sexe"
//             value={form.sexe}
//             name="sexe"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="date">Date De Naissance </label>
//           <br />
//           <input
//             type="date"
//             id="date"
//             value={form.dateNaiss}
//             name="dateNaiss"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="adresse">Adresse </label>
//           <br />
//           <input
//             type="text"
//             id="adresse"
//             value={form.adresse}
//             name="adresse"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="te">Numéro compte CCP </label>
//           <br />
//           <input type="text" id="te" value={form.ccp} name="ccp" disabled />
//           <br />
//           <br />
//           <label for="numCni">Numéro d’identifiant nationale </label>
//           <br />
//           <input
//             type="number"
//             id="numCni"
//             value={form.numCni}
//             name="numCni"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="rib">Numéro de compte bancaire (RIB) </label>
//           <br />
//           <input type="number" id="rib" value={form.rib} name="rib" disabled />
//           <br />
//           <br />
//           <label for="numSs">Numéro Sécurité Social </label>
//           <br />
//           <input
//             type="number"
//             id="numSs"
//             value={form.numSs}
//             name="numSs"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="nomEps">Mobile </label>
//           <br />
//           <input
//             type="string"
//             id="nomEps"
//             value={form.nomEps}
//             name="nomEps"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="nomMere">Nom Mère </label>
//           <br />
//           <input
//             type="string"
//             id="nomMere"
//             value={form.nomMere}
//             name="nomMere"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="prenomMere">Prénom Mère </label>
//           <br />
//           <input
//             type="string"
//             id="prenomMere"
//             value={form.prenomMere}
//             name="prenomMere"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="prenomPere">Prénom Père </label>
//           <br />
//           <input
//             type="string"
//             id="prenomPere"
//             value={form.prenomPere}
//             name="prenomPere"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="prenomEpsAr">اسم الزوجة </label>
//           <br />
//           <input
//             type="string"
//             id="prenomEpsAr"
//             value={form.prenomEpsAr}
//             name="prenomEpsAr"
//             disabled
//           />
//           <br />
//           <br />
//           <label for="nomEpsAr">لقب الزوجة </label>
//           <br />
//           <input
//             type="string"
//             id="nomEpsAr"
//             value={form.nomEpsAr}
//             name="nomEpsAr"
//             disabled
//           />
//           <br />
//           <br />
//           {/* <Button onClick={routes}>Liste des employés</Button> */}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Preview;
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
  React.useEffect(() => {
    const fetchFCT = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/AjoutEmp/user`,
          config
        );
        setForm((curr) => ({
          role: data?.role,
          email: data?.email,
          droitCong: data?.droitCong,
          idp: data?.idp,
          Nom: data?.Nom,
          Prenom: data?.Prenom,
          sexe: data?.sexe,
          dateNaiss: data?.dateNaiss,
          prenomAr: data?.prenomAr,
          nomAr: data?.nomAr,
          situationFamiliale: data?.situationFamiliale,
          adresse: data?.adresse,
          ccp: data?.ccp,
          rib: data?.rib,
          numSs: data?.numSs,
          numCni: data?.numCni,
          mobile: data?.mobile,
          Enfant: data?.Enfant,
          nbrEnfant: data?.nbrEnfant,
          nomEps: data?.nomEps,
          prenomEps: data?.prenomEps,
          nomMere: data?.nomMere,
          prenomMere: data?.prenomMere,
          prenomPere: data?.prenomPere,
          prenomEpsAr: data?.prenomEpsAr,
          nomEpsAr: data?.nomEpsAr,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);
  // }, []);

  // const send = async (e) => {
  //   e.preventDefault();

  //   const post = await axios.put(
  //     `http://localhost:4000/User/UIU/${id}`,
  //     formu,
  //     config
  //   );
  //   if (post.data === "Modification effectuee") {
  //     setError(false);
  //     setOpen(true);
  //   } else {
  //     setError(true);
  //   }
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="postup">
      <h1> Mon Profile </h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListEmp")}>
          Retour
        </button>
        <div className="postuptit"> Mes Cordonnées </div>
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupform">
            <div className="colone">
              <label htmlFor="nomP">Nom</label>
              <input type="text" name="Nom" defaultValue={form.Nom} disabled />
              <label htmlFor="Prenom">Prenom</label>
              <input
                type="text"
                name="Prenom"
                defaultValue={form.Prenom}
                disabled
              />
              <label htmlFor="nomAr">nomAr</label>
              <input type="text" name="nomAr" defaultValue={form.nomAr} />
              <label htmlFor="prenomAr">prenomAr</label>
              <input type="text" name="prenomAr" defaultValue={form.prenomAr} />

              <label htmlFor="nomMere">nomMere</label>
              <input type="text" name="nomMere" defaultValue={form.nomMere} />

              <label htmlFor="prenomEpsAr">prenomEpsAr</label>
              <input
                type="text"
                name="prenomEpsAr"
                defaultValue={form.prenomEpsAr}
              />

              <label htmlFor="nomEps">nomEps</label>
              <input type="text" name="nomEps" defaultValue={form.nomEps} />
            </div>

            <div className="coltwo">
              <label htmlFor="mobile">mobile</label>
              <input type="number" name="mobile" defaultValue={form.mobile} />

              <label htmlFor="adresse">adresse</label>
              <input type="text" name="adresse" defaultValue={form.adresse} />
              <label htmlFor="nomEpsAr">nomEpsAr</label>
              <input type="text" name="nomEpsAr" defaultValue={form.nomEpsAr} />
              <label htmlFor="email">email</label>
              <input type="text" name="email" defaultValue={form.email} />
              <label htmlFor="prenomMere">prenomMere</label>
              <input
                type="text"
                name="prenomMere"
                defaultValue={form.prenomMere}
              />
              <label htmlFor="prenomPere">prenomPere</label>
              <input
                type="text"
                name="prenomPere"
                defaultValue={form.prenomPere}
              />
            </div>

            <div className="colthree">
              <label htmlFor="Enfant">Enfant</label>
              <select name="Enfant" defaultValue={form.Enfant}>
                <option key="oui">Oui </option>
                <option key="non"> Non </option>{" "}
              </select>
              <label htmlFor="nbrEnfant">nbrEnfant</label>
              <input
                type="number"
                name="nbrEnfant"
                defaultValue={form.nbrEnfant}
              />
              <label htmlFor="situationFamiliale">Situation Familiale</label>
              <select
                name="situationFamiliale"
                defaultValue={form.situationFamiliale}
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
              />
              <label htmlFor="prenomEpsAr">prenomEpsAr</label>
              <input
                type="text"
                name="prenomEpsAr"
                defaultValue={form.prenomEpsAr}
              />
              <label htmlFor="idP">idP</label>
              <input type="number" name="idP" defaultValue={form.idP} />
              <label htmlFor="droitCong">Droit De Congé</label>
              <input type="number" name="droitCong" defaultValue={form.idP} />
            </div>

            {!error && open && (
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{ width: 99, height: 99 }}
                />
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
