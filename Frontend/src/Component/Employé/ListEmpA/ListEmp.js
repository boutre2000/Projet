import TextField from "@mui/material/TextField";
// import React, { useState } from "react";
import React from "react";
import axios from "axios";

import "./ListEmp.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import useToken from "../../useToken";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ListEmp() {
  const [rows, setRows] = React.useState([]);
  const { token, setToken } = useToken();
  const user = token.token;
  const notify = () => toast("Ops impossible de supprimer !");
  const notify2 = () =>
    toast(
      "Le traitement de recherche des empolyés sera disponibles apres quelques jours Inshalah !"
    );

  let config = {
    headers: {
      Authorization: "Bearer " + user,
    },
  };
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/AjoutEmp/List",
          config
        );
        setRows(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/AjoutEmp`;
    navigate(path);
  };

  const route = (id) => {
    let path = `/UpdateInfo/${id}`;
    navigate(path);
  };
  const routeP = (id) => {
    let path = `/PreviewInfo/${id}`;
    navigate(path);
  };

  // function formatDate(date) {
  //   if (!date) return "-";
  //   const current = new Date(date);
  //   const year = current.getFullYear();
  //   const month = current.getMonth() + 1;
  //   const day = current.getDay();
  //   return `${year}/${month}/${day}`;
  // }

  const columns = [
    { field: "Role", headerName: "Role", width: 111 },
    { field: "email", headerName: "Email", width: 111 },
    { field: "idP", headerName: "IdP", width: 111 },
    { field: "droitCong", headerName: "DroitCongé", width: 111 },

    { field: "Nom", headerName: "Nom", width: 111 },
    { field: "Prenom", headerName: "Prenom", width: 111 },
    { field: "sexe", headerName: "Sexe", width: 111 },
    {
      field: "dateNaiss",
      headerName: "Date Naissanse",
      width: 111,
      // valueFormatter: ({ value }) => formatDate(value),
    },
    {
      field: "col7",
      headerName: "actions",
      type: "actions",
      width: 170,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          onClick={() => routeP(params.id)}
          label="Preview"
          showInMenu
        />,
        <GridActionsCellItem
          icon={<CreateIcon />}
          onClick={() => route(params.id)}
          label="Modifier"
          showInMenu
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={notify}
          label="Supprimer"
          showInMenu
        />,
        <ToastContainer />,
      ],
    },
  ];
  return (
    <div className="home">
      <div className="cont" >
        <h1>Liste des employés</h1>
        <div className="main" >
          <div className="search">
            <ToastContainer />

            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Search"
              onClick={notify2}
            />
            <button className="btn-primary-sm" onClick={routeChange}>
              Ajouter Un employé{" "}
            </button>
            {/* <button className="btn-primary">
              <FilterAltIcon />
              Filter
            </button> */}
            {/* <button className="btn-primar">
              {" "}
              <MoreHorizIcon />{" "}
            </button> */}
          </div>
        </div>{" "}
        <br />
        <br />{" "}
      </div>
      <div style={{ height: 500, width: "75%" }}>
        <DataGrid
          rows={rows ?? []}
          columns={columns}
          checkboxSelection
          getRowId={(row) => row?._id}
        />
      </div>
    </div>
  );
}

export default ListEmp;
