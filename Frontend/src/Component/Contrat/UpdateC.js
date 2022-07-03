// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router";
// import axios from "axios";
// import useToken from "../useToken";
// import "../Post/preview.css";
// import * as GrIcons from "react-icons/gr";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import dayjs from "dayjs";

// export default function UpdateC() {
//   const [email, setEmail] = useState("");
//   const [dateEd, setDateEd] = useState("");
//   const [nomP, setNomP] = useState("");
//   const [file, setFile] = useState();
//   const [pj, setPj] = useState("");
//   const [formu, setForm] = React.useState({});

//   const [open, setOpen] = React.useState(false);
//   const [datad, setDatad] = React.useState([]);
//   const [datap, setDatap] = React.useState([]);
//   const [error, setError] = React.useState(false);

//   const { id } = useParams();

//   let navigate = useNavigate();

//   const { token, setToken } = useToken();
//   const user = token.token;

//   let config = {
//     headers: {
//       Authorization: "Bearer " + user,
//     },
//   };
//   const Send = async (event) => {
//     // const data = new FormData();
//     // data.append("email", email);
//     // data.append("dateEd", dateEd);
//     // data.append("nomP", nomP);
//     // data.append("file", file);

//     // axios.put(`http://localhost:4000/contrat/edit/${id}`, data, config)
//     //   .then(res =>
//     //     {
//     //       if(res.data=== 'modificaation sauvegarde')

//     //      { setError(false)
//     //       setOpen(true);

//     //   } else {
//     //     setError(true);

//     //   }

//     //     }
//     //     )
//     //   .catch(err => console.log(err));
//     event.preventDefault();

//     const post = await axios.put(
//       `http://localhost:4000/contrat/edit/${id}`,
//       formu,
//       config
//     );
//     if (post.data === "Modification sauvegardee") {
//       setError(false);
//       setOpen(true);
//     } else {
//       setError(true);
//     }
//   };

//   React.useEffect(() => {
//     const fetchFCT = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:4000/contrat/getone/${id}`,
//           config
//         );

//         setForm((curr) => ({
//           nomP: data?.posteId?.nomP,
//           email: data?.posteId?.userId?.email,
//           dateEd: dayjs(data?.dateEd)?.format("YYYY-MM-DD"),
//           pj: data?.pj,
//         }));
//         console.log(form.email);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     if (id) fetchFCT();
//   }, [id]);

//   React.useEffect(() => {
//     axios
//       .get("http://localhost:4000/user/list", config)
//       .then((res) => {
//         setDatap(res?.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   React.useEffect(() => {
//     axios
//       .get("http://localhost:4000/post/list", config)
//       .then((res) => {
//         setDatad(res?.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const handleChange = (e) => {
//     setFile(e.target.files[0]);
//     setForm({ pj: e.target.files[0].name });
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className="postup">
//       <h1> Contrat</h1>
//       <div className="postupstep">
//         <button className="postupret" onClick={() => navigate("/ListCont")}>
//           Retour
//         </button>
//         <div className="postuptit"> Faire des modification </div>
//         <button className="postupret" onClick={Send}>
//           Modifier
//         </button>
//       </div>
//       <div className="postupformcont">
//         <form action="#">
//           <div className="postupform">
//             <div className="colone">
//               <label htmlFor="email">Employé</label>
//               <select
//                 name="email"
//                 defaultValue={formu?.email}
//                 onChange={(e) => setEmail(e.target.value)}
//               >
//                 {datap.map((d, index) => (
//                   <option key={index}>{d.email}</option>
//                 ))}
//               </select>

//               <label htmlFor="postId">Poste</label>
//               <select
//                 name="postId"
//                 defaultValue={formu?.nomP}
//                 onChange={(e) => setNomP(e.target.value)}
//               >
//                 {datad.map((d, index) => (
//                   <option key={index}>{d.nomP}</option>
//                 ))}
//               </select>

//               <label htmlFor="dateEd">Date d'édition</label>
//               <input
//                 type="date"
//                 name="dateEd"
//                 defaultValue={formu?.dateEd}
//                 onChange={(e) => setDateEd(e.target.value)}
//               />
//             </div>

//             <div className="coltwo">
//               <div className="ficont">
//                 <label className="postupfi" htmlFor="file">
//                   {formu?.pj} <GrIcons.GrUpload />{" "}
//                 </label>
//                 <input
//                   className="fiinp"
//                   type="file"
//                   id="file"
//                   placeholder="Choisir un fichier"
//                   style={{ display: "none", border: "dashed" }}
//                   onChange={(e) => {
//                     handleChange(e);
//                   }}
//                 />
//               </div>
//             </div>

//             {!error && open && (
//               <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//               >
//                 <DialogTitle id="alert-dialog-title">
//                   {" Modification sauvegardée "}
//                 </DialogTitle>
//                 <DialogContent>
//                   <DialogContentText id="alert-dialog-description">
//                     Les informations changées ont bien été sauvegardées.
//                   </DialogContentText>
//                 </DialogContent>
//               </Dialog>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import * as React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import * as GrIcons from "react-icons/gr";

import useToken from "../useToken";
import dayjs from "dayjs";

import "./../Post/preview.css";

export default function UpdatePM() {
  const { id } = useParams();
  const [form, setForm] = React.useState({});
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

  React.useEffect(() => {
    const fetchFCT = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/contrat/getone/${id}`,
          config
        );
        setForm((curr) => ({
          nomP: data?.posteId?.nomP,
          email: data?.posteId?.userId?.email,
          dateEd: dayjs(data?.dateEd)?.format("YYYY-MM-DD"),
          pj: data?.pj,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/user/list", config)
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

  const send = async (e) => {
    e.preventDefault();

    const post = await axios.put(
      `http://localhost:4000/contrat/edit/${id}`,
      form,
      config
    );
    if (post.data === "Modification sauvegardee") {
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
      <h1> Contrat </h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListCont")}>
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
              <label htmlFor="email">Employé</label>
              <select
                name="email"
                defaultValue={form?.email}
                onChange={(e) => setForm({ email: e.target.value })}
              >
                {datap.map((d, index) => (
                  <option key={index}>{d.email}</option>
                ))}
              </select>

              <label htmlFor="postId">Poste</label>
              <select
                name="postId"
                defaultValue={form?.nomP}
                onChange={(e) => setForm({ nomP: e.target.value })}
              >
                {datad.map((d, index) => (
                  <option key={index}>{d.nomP}</option>
                ))}
              </select>

              <label htmlFor="dateEd">Date d'édition</label>
              <input
                type="date"
                name="dateEd"
                defaultValue={form?.dateEd}
                onChange={(e) => setForm({ dateEd: e.target.value })}
              />
            </div>

            <div className="coltwo">
              <label className="postupfi" htmlFor="file">
                {form?.pj} <GrIcons.GrUpload />{" "}
              </label>
              <input
                className="fiinp"
                type="file"
                id="file"
                placeholder="Choisir un fichier"
                style={{ display: "none", border: "dashed" }}
                onChange={(e) => setForm({ pj: e.target.value })}
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
                  style={{ width: 200, height: 200 }}
                />
                <DialogTitle id="alert-dialog-title">
                  {" Modification sauvegardée "}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Les informations modifiées ont bien été sauvegardées.
                  </DialogContentText>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button onClick={() => navigate(`/ListPost`)}>Retour</Button>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
