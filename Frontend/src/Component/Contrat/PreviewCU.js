import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import useToken from "../useToken";
import "../Post/preview.css";
import * as GrIcons from "react-icons/gr";
import * as RiIcons from "react-icons/ri";

import dayjs from "dayjs";
import fileDownload from "js-file-download";

export default function PreviewCU() {
  const [email, setEmail] = useState("");
  const [dateEd, setDateEd] = useState("");
  const [nomP, setNomP] = useState("");
  const [file, setFile] = useState();
  const [pj, setPj] = useState("");
  const [open, setOpen] = React.useState(false);
  const [datad, setDatad] = React.useState([]);
  const [datap, setDatap] = React.useState([]);
  const [error, setError] = React.useState(false);
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

  const telecharger = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:4000/contrat/downloadPj/${id}`,
        { responseType: "blob" },
        config
      )
      .then((dem) => {
        fileDownload(dem, form.pj);
      });
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
          dateEd: data?.dateEd,
          pj: data?.pj,
        }));
        console.log(form.email);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchFCT();
  }, [id]);

  return (
    <div className="postup">
      <h1> Contrat</h1>
      <div className="postupstep">
        <button className="postupret" onClick={() => navigate("/ListCont")}>
          Retour
        </button>
        <div className="postuptit"> Visualiser un contrat </div>
      </div>
      <div className="postupformcont">
        <form action="#">
          <div className="postupcform">
            <div className="colone" style={{ marginTop: "50px" }}>
              <fieldset>
                <legend>Poste:</legend>
                <span> {form?.nomP} </span>
              </fieldset>

              <fieldset>
                <legend>Date d'édition:</legend>
                <span> {form.dateEd} </span>
              </fieldset>
            </div>
            <div className="coltwo">
              <fieldset>
                <legend>Support:</legend>
                <span> {form.pj} </span>
              </fieldset>
              <button
                className="prevcbtntel"
                onClick={(e) => {
                  telecharger(e);
                }}
              >
                <RiIcons.RiFileDownloadLine /> Télécharger
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
