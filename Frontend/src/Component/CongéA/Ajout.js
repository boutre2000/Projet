// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { DialogActions } from "@mui/material";
// import useToken from "../useToken";

// async function Ajt(conf, request) {
//   console.log("heyyyy");

//   return axios
//     .post("http://localhost:4000/conge/add", request, conf)
//     .then((resp) => {
//       alert(resp.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 500,
//   height: 200,
//   bgcolor: "background.paper",
//   fontSize: 20,
//   border: "2px solid #000",
//   borderRadius: 5,
//   boxShadow: 24,
//   p: 4,
// };
// const styl = {
//   position: "absolute",
//   top: "70%",
//   left: "45%",
//   transform: "translate(-50%, -50%)",
//   width: 350,
//   height: 70,
//   bgcolor: "background.paper",
//   border: "2px solid #00CCFF",
//   boxShadow: 24,
//   borderRadius: 10,
//   backgroundColor: "#009AD2",
//   color: "#000",
//   fontSize: 15,
//   p: 3,
// };

// function Ajout() {
//   const [open, setOpen] = React.useState(false);
//   const [data, setDate] = useState([]);
//   const [DateDebut, setDateDebut] = useState(null);
//   const [DateFin, setDateFin] = useState(null);
//   const [error, setError] = useState(false);
//   const { token, setToken } = useToken();

//   const handleClickOpen = () => {
//     if (!error) setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   let navigate = useNavigate();

//   const user = token.token;

//   let config = {
//     headers: {
//       Authorization: "Bearer " + user,
//     },
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const conge = await Ajt(config, { DateDebut, DateFin });
//     if (conge.data === "Conge annuel enregistre !") {
//       setError(false);
//     } else {
//       setError(true);
//     }
//   };

//   return (
//     <div className="ajout">
//       <br />
//       &nbsp;<h1>Ajouter un congé annuel :</h1>
//       <form onSubmit={handleSubmit}>
//         &nbsp; &nbsp; &nbsp;
//         <label htmlFor="fname" className="flab">
//           Date de debut :
//         </label>
//         <br />
//         <br />
//         &nbsp; &nbsp; &nbsp;
//         <input
//           type="date"
//           id="fname"
//           name="fname"
//           onChange={(e) => setDateDebut(e.target.value)}
//         ></input>
//         <br />
//         &nbsp; &nbsp; &nbsp;
//         <label htmlFor="fname" className="flab">
//           Date de fin :
//         </label>
//         <br />
//         <br />
//         &nbsp; &nbsp; &nbsp;
//         <input
//           type="date"
//           id="fname"
//           name="fname"
//           onChange={(e) => setDateFin(e.target.value)}
//         ></input>
//         <br />
//         &nbsp; &nbsp; &nbsp;
//         <input
//           id="bb"
//           type="submit"
//           value="Ajouter"
//           onClick={handleClickOpen}
//         ></input>
//         {!error && open && (
//           <Dialog
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//             <DialogTitle id="alert-dialog-title">
//               {" congé annuel créé "}
//             </DialogTitle>
//             <DialogContent>
//               <DialogContentText id="alert-dialog-description">
//                 Le congé annuel a bien été enregistré .
//               </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={() => navigate(`/ListCongA`)}> Retour </Button>
//             </DialogActions>
//           </Dialog>
//         )}
//         {error && alert("Une erreur est survenue")}
//       </form>
//     </div>
//   );
// }

// export default Ajout;
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
  const handleOpen = () => setOpen(true);
  const { id } = useParams();
  const [DateDebut, setDateDebut] = useState(null);
  const [DateFin, setDateFin] = useState(null);
  const [Status, setStatus] = useState(null);

  const [error, setError] = useState(false);

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
          `http://localhost:4000/conge/getone/${id}`,
          config
        );
        console.log(req.data);
        setDateDebut(req?.data?.DateDebut);
        setDateFin(req?.data?.DateFin);
        setStatus(req?.data?.Status);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const com = await axios.post(
      `http://localhost:4000/conge/add`,
      { DateDebut, DateFin, Status },
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
      <h1> Congé Annuel</h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListCongA")}>
          Retour
        </button>
        <div className="postuptit"> Planifier un Congé Annuel </div>
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
              <Button onClick={() => navigate(`/ListCongA`)}>Retour</Button>
            </Typography>
          </Box>
        </Modal>
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupform">
            <div className="colone">
              <label htmlFor="dateD">Date Debut</label>
              <input
                type="date"
                name="dateD"
                onChange={(e) => setDateDebut(e.target.value)}
              />
              <label htmlFor="titre">Date Fin </label>
              <input
                type="date"
                name="titre"
                onChange={(e) => setDateFin(e.target.value)}
              />
              <select
                name="status"
                defaultValue=""
                onChange={(e) => setStatus(e.target.value)}
              >
                <option hidden value="">
                  --Choisir--
                </option>
                <option key="En cour"> En cour </option>
                <option key="Terminé"> Terminé </option>{" "}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
