import * as React from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { ActionTypes } from "@mui/base";
import * as RiIcons from "react-icons/ri";
import "../DemConge/Conge.css";

import useToken from "../useToken";

export default function ListerD() {
  const [rows, setRows] = React.useState([]);

  let cpt = 0;
  let navigate = useNavigate();

  const { token, setToken } = useToken();
  const user = token.token;

  const columns = [
    {
      headerName: "Date",
      field: "Date",
      width: 280,
      type: "date",
      editable: true,
    },
    {
      headerName: "Titre",
      field: "Titre",
      width: 280,
      type: "text",
      editable: true,
    },
    {
      headerName: "Contenu",
      field: "Contenu",
      width: 280,
      type: "text",
      editable: true,
    },

    {
      headerName: "Actions",
      field: "actions",
      type: "actions",
      width: "280",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<RiIcons.RiEye2Line />}
          onClick={() => navigate(`/UpdateCom/${params.id}`)}
          label="Modifier"
          showInMenu
        />,
      ],
    },
  ];

  React.useEffect(() => {
    const fetchFCT = async () => {
      try {
        let config = {
          headers: {
            Authorization: "Bearer " + user,
          },
        };

        const { data } = await axios.get(
          "http://localhost:4000/ComInterne/list",
          config
        );

        data.map((item) => {
          cpt++;
        });
        setRows(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFCT();
  }, []);

  return (
    <div className="conge">
      <h1>Les communications internes</h1>
      <button className="congebtn" onClick={() => navigate(`/AjoutCom`)}>
        {" "}
        Ajouter une cominterne{" "}
      </button>
      <div
        style={{
          height: 400,
          width: "100%",
          position: "fixed",
          left: "300px",
          top: "218px",
        }}
      >
        <DataGrid
          rows={rows}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          style={{ position: "absolute", width: "70%" }}
          sx={{
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
          }}
        />
      </div>
    </div>
  );
}
