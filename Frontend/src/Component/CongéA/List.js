import * as React from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { ActionTypes } from "@mui/base";
import * as RiIcons from "react-icons/ri";
import "../Conge/Conge.css";

import useToken from "../useToken";

export default function Lister() {
  const [rows, setRows] = React.useState([]);

  let cpt = 0;
  let navigate = useNavigate();

  const { token, setToken } = useToken();
  const user = token.token;

  const columns = [
    {
      headerName: "Date de début",
      field: "DateDebut",
      width: 200,
      type: "date",
      editable: true,
    },
    {
      headerName: "Date de fin",
      field: "DateFin",
      width: 310,
      editable: true,
    },
    {
      headerName: "Status",
      field: "Status",
      width: 310,
      editable: true,
    },

    {
      headerName: "Actions",
      field: "actions",
      type: "actions",
      width: "80",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<RiIcons.RiEye2Line />}
          onClick={() => navigate(`/UpdateCongA/${params.id}`)}
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
          "http://localhost:4000/conge/list",
          config
        );

        data.map((item) => {});
        setRows(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFCT();
  }, []);

  return (
    <div className="conge">
      <h1>Congé annuel</h1>
      <button className="congebtn" onClick={() => navigate(`/AjoutCongA`)}>
        {" "}
        Ajouter un congé annuel{" "}
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
