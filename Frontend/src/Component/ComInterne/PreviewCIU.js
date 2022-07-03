import * as React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import fileDownload from "js-file-download";
import FileViewer from "react-file-viewer";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import useToken from "../useToken";

import "./../DemPapier/previewU";

export default function PreviewU() {
  const { id } = useParams();
  const [form, setForm] = React.useState({});
  const [db, setDb] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [erroru, setErroru] = React.useState(false);

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
          Date: data?.Nom,
          Titre: data?.format,
          Contenu: data?.etatD,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);

  const handleClose = () => {
    setOpen(false);
  };

  const onError = (e) => {
    console.log(e, "error in file-viewer");
  };

  return (
    <div className="preview">
      <h1>Lister Une communication interne </h1>
      <fieldset className="prevtype">
        <legend>Date:</legend>
        <span> {form.Date} </span>
      </fieldset>
      <fieldset className="prev">
        <legend>Titre:</legend>
        <span> {form.Titre} </span>
      </fieldset>
      <fieldset className="prevmotif">
        <legend>Contenu:</legend>
        <span> {form.Contenu} </span>
      </fieldset>
    </div>
  );
}

//<DocViewer documents={docs}  pluginRenderers={DocViewerRenderers}/>
//        var fileExtension = data?.cause.split('.').pop();
