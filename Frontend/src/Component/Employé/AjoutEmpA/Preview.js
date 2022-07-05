// import React from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import useToken from "../../useToken";
// import Button from "@mui/material/Button";
// import "./Preview.css";

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
//           `http://localhost:4000/AjoutEmp/emp/${id}`,
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
//           <label for="fname">Nom employé </label>
//           <br />
//           <input
//             type="text"
//             id="fname"
//             value={form.Nom}
//             name="Nom"
//             disabled
//           ></input>
//           <br /> <br />
//           <label for="lname">Prénom Employé </label>
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
//           <Button onClick={routes}>Liste des employés</Button>
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
import dayjs from "dayjs";

import "./Preview.css";

export default function PreviewPU() {
  const [form, setForm] = React.useState({});
  const { id } = useParams();

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
          `http://localhost:4000/AjoutEmp/emp/${id}`,
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

  return (
    <div className="postup">
      <h1> Les informations de l'employé</h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListEmp")}>
          Retour
        </button>
        <div className="postuptit"> Visualiser les infos de l'employé </div>
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupform">
            <div className="colone">
              <fieldset>
                <legend>Role:</legend>
                <span> {form.role} </span>
              </fieldset>
              <fieldset>
                <legend>Email:</legend>
                <span> {form.email} </span>
              </fieldset>
              <fieldset>
                <legend>IdP:</legend>
                <span> {form.idP} </span>
              </fieldset>
              <fieldset>
                <legend>Droit de congé:</legend>
                <span> {form.droitCong} </span>
              </fieldset>
              <fieldset>
                <legend>Prenom Eps:</legend>
                <span> {form.prenomEps} </span>
              </fieldset>
              <fieldset>
                <legend>Prenom Eps Arabe:</legend>
                <span> {form.prenomEpsAr} </span>
              </fieldset>
              <fieldset>
                <legend>Nom Eps Arabe:</legend>
                <span> {form.nomEpsAr} </span>
              </fieldset>
            </div>
            <div className="coltwo">
              <fieldset>
                <legend>Nom:</legend>
                <span> {form.Nom} </span>
              </fieldset>
              <fieldset>
                <legend>Prenom:</legend>
                <span> {form.Prenom} </span>
              </fieldset>
              <fieldset>
                <legend>Sexe:</legend>
                <span> {form.sexe} </span>
              </fieldset>
              <fieldset>
                <legend>Date De Naissance:</legend>
                <span> {form.dateNaiss} </span>
              </fieldset>
              <fieldset>
                <legend>Nom Arabe:</legend>
                <span> {form.nomAr} </span>
              </fieldset>
              <fieldset>
                <legend>Prenom Arabe:</legend>
                <span> {form.prenomAr} </span>
              </fieldset>
              <fieldset>
                <legend>Situation familiale</legend>
                <span> {form.situationFamiliale} </span>
              </fieldset>
              <fieldset>
                <legend>Adresse:</legend>
                <span> {form.adresse} </span>
              </fieldset>
              <fieldset>
                <legend>Enfant:</legend>
                <span> {form.Enfant} </span>
              </fieldset>
              <fieldset>
                <legend>Nombre d'enfant:</legend>
                <span> {form.nbrEnfant} </span>
              </fieldset>
            </div>
            <div className="colthree">
              <fieldset>
                <legend>CCP:</legend>
                <span> {form.ccp} </span>
              </fieldset>
              <fieldset>
                <legend>RIB:</legend>
                <span> {form.rib} </span>
              </fieldset>
              <fieldset>
                <legend>NUM CNI:</legend>
                <span> {form.numCni} </span>
              </fieldset>
              <fieldset>
                <legend>NUM SS:</legend>
                <span> {form.numSs} </span>
              </fieldset>
              <fieldset>
                <legend>Nom Mere:</legend>
                <span> {form.nomMere} </span>
              </fieldset>
              <fieldset>
                <legend>Prenom Mere:</legend>
                <span> {form.prenomMere} </span>
              </fieldset>
              <fieldset>
                <legend>Prenom Pere:</legend>
                <span> {form.prenomPere} </span>
              </fieldset>
              <fieldset>
                <legend>Nom Eps:</legend>
                <span> {form.nomEps} </span>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
