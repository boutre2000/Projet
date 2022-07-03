// // import React from "react";
// // import axios from "axios";
// // import { useParams, useNavigate } from "react-router-dom";
// // import Typography from "@mui/material/Typography";
// // import Modal from "@mui/material/Modal";
// // import Box from "@mui/material/Box";
// // import Button from "@mui/material/Button";
// // import "./Update.css";
// // import lottieJson from "./91001-success.json";
// // import Lottie from "react-lottie-player";
// // // // function formatDate(date) {
// // // //   if (!date) return "-";
// // // //   const current = new Date(date);
// // // //   const year = current.getFullYear();
// // // //   const month = current.getMonth() + 1;
// // // //   const day = current.getDay();
// // // //   return `${year}/${month}/${day}`;
// // // }
// // function Update() {
// //   let navigate = useNavigate();
// //   const routes = () => {
// //     let path = `/ListEmp`;
// //     navigate(path);
// //   };
// //   const { id } = useParams();
// //   const [form, setForm] = React.useState({
// //     Role: "",
// //     // email: "",
// //     // Nom: "",
// //     // Prenom: "",
// //     // // sexe: "",
// //     // dateNaiss: "",
// //   });
// //   console.log(form);

// //   React.useEffect(() => {
// //     const fetchFCT = async () => {
// //       try {
// //         const { data } = await axios.get(`http://localhost:4000/AjoutEmp`);
// //         setForm((curr) => ({
// //           Role: data?.Role,
// //         }));
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //     if (id) fetchFCT();
// //   }, [id]);

// //   const handleChange = (e) => {
// //     setForm((curr) => ({ ...curr, [e.target.name]: e.target.value }));
// //   };
// //   const style = {
// //     position: "absolute",
// //     top: "50%",
// //     left: "50%",
// //     transform: "translate(-50%, -50%)",
// //     width: 400,
// //     bgcolor: "background.paper",
// //     border: "2px solid #000",
// //     boxShadow: 24,
// //     p: 4,
// //   };
// //   const [open, setOpen] = React.useState(false);
// //   const handleOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);

// //   return (
// //     <div className="up">
// //       <div className="update">
// //         <p>Mise à jour d'informations de l'employé :</p>
// //         <form onSubmit={(e) => ajt(e, id)}>
// //           <label for="role">Role </label>
// //           <br />
// //           <input
// //             type="text"
// //             id="role"
// //             value={form.Role}
// //             onChange={handleChange}
// //             name="Role"
// //           ></input>
// //           <br /> <br />
// //           {/* <label for="fname">Nom </label>
// //           <br />
// //           <input
// //             type="text"
// //             id="fname"
// //             value={form.Nom}
// //             onChange={handleChange}
// //             name="Nom"
// //           ></input>
// //           <br /> <br />
// //           <label for="lname">Prénom </label>
// //           <br />
// //           <input
// //             type="text"
// //             id="lname"
// //             value={form.Prenom}
// //             onChange={handleChange}
// //             name="Prenom"
// //           ></input>
// //           <br /> <br />
// //           <label for="email">Email </label>
// //           <br />
// //           <input
// //             type="text"
// //             id="email"
// //             value={form.email}
// //             onChange={handleChange}
// //             name="email"
// //           ></input>
// //           <br /> <br />
// //           <label for="sexe">Sexe </label>
// //           <br />
// //           <input
// //             type="text"
// //             id="sexe"
// //             value={form.sexe}
// //             onChange={handleChange}
// //             name="sexe"
// //           ></input>
// //           <br /> <br />
// //           <label for="date">Date De Naissance </label>
// //           <br />
// //           <input
// //             type="date"
// //             id="dateNaiss"
// //             value={form.dateNaiss}
// //             defaultValue={form.dateNaiss}
// //             onChange={handleChange}
// //             name="dateNaiss"
// //           /> */}
// //           <br /> <br /> <br />
// //           {/* &nbsp; &nbsp; &nbsp;<label for="lname">Mail de responsable:</label><br /><br />
// //                 &nbsp; &nbsp; &nbsp;<input type="text" id="lname"  value={form.email} onChange={handleChange} name="email" ></input><br /> */}
// //           <input
// //             onClick={handleOpen}
// //             className="modify"
// //             id="bb"
// //             type="submit"
// //             value="Modifier"
// //           ></input>
// //           <Modal
// //             open={open}
// //             onClose={handleClose}
// //             aria-labelledby="modal-modal-title"
// //             aria-describedby="modal-modal-description"
// //           >
// //             <Box sx={style}>
// //               <div className="Lottie">
// //                 <Lottie
// //                   loop
// //                   animationData={lottieJson}
// //                   play
// //                   style={{ width: 99, height: 99 }}
// //                 />
// //               </div>
// //               <Typography id="modal-modal-title" variant="h6" component="h2">
// //                 Modification avec succès
// //               </Typography>
// //               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
// //                 <Button onClick={routes}>Liste des Employés</Button>
// //               </Typography>
// //             </Box>
// //           </Modal>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// // function ajt(e, id) {
// //   e.preventDefault();
// //   let request = {
// //     Role: document.getElementById("role").value,
// //     // email: document.getElementById("email").value,
// //     // Nom: document.getElementById("fname").value,
// //     // Prenom: document.getElementById("lname").value,
// //     // sexe: document.getElementById("sexe").value,
// //     // dateNaiss: document.getElementById("dateNaiss")?.value,
// //   };
// //   axios
// //     .put(`http://localhost:4000/AjoutEmp/UIE/${id}`, request)
// //     .then((resp) => {
// //       alert(resp.data);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // }
// // export default Update;
// import { Grid, RadioGroup, FormControlLabel, Radio } from "@mui/material";
// import { InputField } from "../AjoutEmpA/FormFields";
// import React from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import lottieJson from "./91001-success.json";
// import Lottie from "react-lottie-player";
// import "./Update.css";
// import useToken from "../../useToken";
// export default function update(props) {
//   const {
//     formField: {
//       Nom,
//       Prenom,
//       prenomAr,
//       nomAr,
//       dateNaiss,
//       situationFamiliale,
//       nbrEnfant,
//       nomEps,
//       prenomEps,
//       nomMere,
//       prenomMere,
//       prenomPere,
//       prenomEpsAr,
//       nomEpsAr,
//       adresse,
//       mobile,
//       email,
//       role,
//     },
//     formik,
//   } = props;
//   let navigate = useNavigate();
//   const routes = () => {
//     let path = `/ListEmp`;
//     navigate(path);
//   };
//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const { id } = useParams();
//   const [form, setForm] = React.useState({
//     Nom: "",
//     Prenom: "",
//     prenomAr: "",
//     nomAr: "",
//     dateNaiss: "",
//     situationFamiliale: "",
//     nbrEnfant: "",
//     nomEps: "",
//     prenomEps: "",
//     nomMere: "",
//     prenomMere: "",
//     prenomPere: "",
//     prenomEpsAr: "",
//     nomEpsAr: "",
//     adresse: "",
//     mobile: "",
//     email: "",
//     role: "",
//   });

//   const handleChange = (e) => {
//     setForm((curr) => ({ ...curr, [e.target.name]: e.target.value }));
//   };
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
//         console.log(data);
//         setForm((curr) => ({
//           role: data?.role,
//           Nom: data?.Nom,
//           Prenom: data?.Prenom,
//           prenomAr: data?.prenomAr,
//           nomAr: data?.nomAr,
//           dateNaiss: data?.dateNaiss,
//           situationFamiliale: data?.situationFamiliale,
//           nbrEnfant: data?.nbrEnfant,
//           nomEps: data?.nomEps,
//           prenomEps: data?.prenomEps,
//           nomMere: nomMere,
//           prenomMere: data?.prenomMere,
//           prenomPere: data?.prenomPere,
//           prenomEpsAr: data?.prenomEpsAr,
//           nomEpsAr: data?.nomEpsAr,
//           adresse: data?.adresse,
//           mobile: data?.mobile,
//           email: data?.email,
//         }));
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     if (id) fetchFCT();
//   }, [id]);
//   return (
//     <React.Fragment>
//       <Grid className="ajt" container spacing={3} onSubmit={(e) => ajt(e, id)}>
//         <Grid className="Nom" item xs={12} sm={6}>
//           <InputField
//             name={Nom.name}
//             label={Nom.label}
//             id={Nom}
//             value={form.Nom}
//             onChange={handleChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid className="Prenom" item xs={12} sm={6}>
//           <InputField
//             name={Prenom.name}
//             label={Prenom.label}
//             id={Prenom}
//             value={form.Prenom}
//             onChange={handleChange}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <InputField
//             id={nomAr}
//             value={form.nomAr}
//             onChange={handleChange}
//             className="numSs"
//             name={nomAr.name}
//             label={nomAr.label}
//             fullWidth
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <InputField
//             id={nomEps}
//             value={form.nomEps}
//             onChange={handleChange}
//             className="numSs"
//             name={nomEps.name}
//             label={nomEps.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <InputField
//             id={nomEpsAr}
//             value={form.nomEpsAr}
//             onChange={handleChange}
//             className="numSs"
//             name={nomEpsAr.name}
//             label={nomEpsAr.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <InputField
//             id={prenomMere}
//             value={form.prenomMere}
//             onChange={handleChange}
//             className="numSs"
//             name={prenomMere.name}
//             label={prenomMere.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <InputField
//             id={prenomPere}
//             value={form.prenomPere}
//             onChange={handleChange}
//             className="numSs"
//             name={prenomPere.name}
//             label={prenomPere.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <InputField
//             id={prenomEps}
//             value={form.prenomEps}
//             onChange={handleChange}
//             className="numSs"
//             name={prenomEps.name}
//             label={prenomEps.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <InputField
//             id={situationFamiliale}
//             value={form.situationFamiliale}
//             onChange={handleChange}
//             className="numSs"
//             name={situationFamiliale.name}
//             label={situationFamiliale.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <InputField
//             id={nbrEnfant}
//             value={form.nbrEnfant}
//             onChange={handleChange}
//             className="numSs"
//             name={nbrEnfant.name}
//             label={nbrEnfant.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <InputField
//             id={email}
//             value={form.email}
//             onChange={handleChange}
//             className="numCni"
//             name={email.name}
//             label={email.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <InputField
//             id={prenomAr}
//             value={form.prenomAr}
//             onChange={handleChange}
//             className="prenomAr"
//             name={prenomAr.name}
//             label={prenomAr.label}
//             fullWidth
//           />
//         </Grid>
//         <br />
//         <Grid item xs={12} sm={6}>
//           <InputField
//             id={prenomEpsAr}
//             value={form.prenomEpsAr}
//             onChange={handleChange}
//             className="nomAr"
//             name={prenomEpsAr.name}
//             label={prenomEpsAr.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid className="dateNaiss" item xs={12} sm={6}>
//           <InputField
//             id={dateNaiss}
//             value={form.dateNaiss}
//             onChange={handleChange}
//             name={dateNaiss.name}
//             label={dateNaiss.label}
//             type={Date}
//             fullWidth
//           />
//         </Grid>
//         <Grid className="dateNaiss" item xs={12} sm={6}>
//           <InputField
//             id={adresse}
//             value={form.adresse}
//             onChange={handleChange}
//             name={adresse.name}
//             label={adresse.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid className="dateNaiss" item xs={12} sm={6}>
//           <InputField
//             id={nomMere}
//             value={form.nomMere}
//             onChange={handleChange}
//             name={nomMere.name}
//             label={nomMere.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid className="dateNaiss" item xs={12} sm={6}>
//           <InputField
//             id={mobile}
//             value={form.mobile}
//             onChange={handleChange}
//             name={mobile.name}
//             label={mobile.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <InputField
//             id={role}
//             value={form.role}
//             onChange={handleChange}
//             className="numSs"
//             name={role.name}
//             label={role.label}
//             fullWidth
//           />
//         </Grid>
//         <input
//           onClick={handleOpen}
//           className="modify"
//           id="bb"
//           type="submit"
//           value="Modifier"
//         ></input>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <div className="Lottie">
//               <Lottie
//                 loop
//                 animationData={lottieJson}
//                 play
//                 style={{ width: 99, height: 99 }}
//               />
//             </div>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Modification avec succès
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//               <Button onClick={routes}>Liste des Employés</Button>
//             </Typography>
//           </Box>
//         </Modal>
//       </Grid>
//     </React.Fragment>
//   );
//   function ajt(e, id) {
//     e.preventDefault();
//     let request = {
//       role: document.getElementById("role").value,
//       email: document.getElementById("email").value,
//       Nom: document.getElementById("Nom").value,
//       Prenom: document.getElementById("Prenom").value,
//       nomAr: document.getElementById("nomAr").value,
//       prenomAr: document.getElementById("prenomAr").value,
//       dateNaiss: document.getElementById("dateNaiss")?.value,
//       nbrEnfant: document.getElementById("nbrEnfant")?.value,
//       situationFamiliale: document.getElementById("situationFamiliale")?.value,
//       mobile: document.getElementById("mobile")?.value,
//       adresse: document.getElementById("adresse")?.value,
//       prenomPere: document.getElementById("prenomPere")?.value,
//       nomMere: document.getElementById("nomMere")?.value,

//       prenomMere: document.getElementById("prenomMere")?.value,
//       nomEps: document.getElementById("nomEps")?.value,
//       prenomEpsAr: document.getElementById("prenomEpsAr")?.value,
//       nomEpsAr: document.getElementById("nomEpsAr")?.value,
//       prenomEps: document.getElementById("prenomEps")?.value,
//     };
//     axios
//       .put(`http://localhost:4000/AjoutEmp/UIE/${id}`, request)
//       .then((resp) => {
//         alert(resp.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

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
import "./Update.css";
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
          `http://localhost:4000/AjoutEmp/emp/${id}`,
          config
        );
        setForm((curr) => ({
          role: data?.role,
          Nom: data?.Nom,
          Prenom: data?.Prenom,
          prenomAr: data?.prenomAr,
          nomAr: data?.nomAr,
          dateNaiss: data?.dateNaiss,
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
          idp: data?.idp,
          droitCong: data?.droitCong,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);

  // React.useEffect(() => {
  //   axios.get('http://localhost:4000/user/list', config)
  //   .then(res => {
  //       console.log(res.data)
  //       setDatap(res?.data)
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   })
  // },[])

  // React.useEffect(() => {
  //   axios.get('http://localhost:4000/dep/list', config)
  //   .then(res => {
  //       console.log("getting from :::",res.data)
  //       setDatad(res?.data)
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   })
  // },[])

  const send = async (e) => {
    e.preventDefault();

    const post = await axios.put(
      `http://localhost:4000/AjoutEmp/UIE/${id}`,
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
        <button className="postupret" onClick={send}>
          Modifier
        </button>
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

              <label htmlFor="nomEps">nomEps</label>
              <input
                type="text"
                name="nomEps"
                defaultValue={form.nomEps}
                onChange={(e) => setFormu({ nomEps: e.target.value })}
              />
            </div>

            <div className="coltwo">
              <label htmlFor="mobile">mobile</label>
              <input
                type="number"
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
              <label htmlFor="droitCong">droitCong</label>
              <input
                type="number"
                name="droitCong"
                defaultValue={form.droitCong}
                onChange={(e) => setFormu({ droitCong: e.target.value })}
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
              {/* <label htmlFor="depId">Enfant</label>
              <select
                name="depId"
                defaultValue={form.depId?.NomD}
                onChange={(e) => setFormu({ dep: e.target.value })}
              >
                {datad.map((d, index) => (
                  <option key={index}>{d.NomD}</option>
                ))}
              </select> */}
              <label htmlFor="dateNaissance">dateNaissance</label>
              <input
                type="date"
                name="dateNaissance"
                defaultValue={form.PrdateNaissanceenom}
                onChange={(e) => setFormu({ dateNaissance: e.target.value })}
              />
              <label htmlFor="prenomEps">prenomEps</label>
              <input
                type="text"
                name="prenomEps"
                defaultValue={form.prenomEps}
                onChange={(e) => setFormu({ prenomEps: e.target.value })}
              />
              <label htmlFor="prenomEpsAr">prenomEpsAr</label>
              <input
                type="text"
                name="prenomEpsAr"
                defaultValue={form.prenomEpsAr}
                onChange={(e) => setFormu({ prenomEpsAr: e.target.value })}
              />
              <label htmlFor="idP">idP</label>
              <input
                type="number"
                name="idP"
                defaultValue={form.idp}
                onChange={(e) => setFormu({ idp: e.target.value })}
              />
              <label htmlFor="idP">role</label>
              <input
                type="text"
                name="idP"
                defaultValue={form.role}
                onChange={(e) => setFormu({ role: e.target.value })}
              />
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
