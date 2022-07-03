import * as React from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import * as RiIcons from "react-icons/ri";
import "../DemConge/Conge.css";
import useToken from "../useToken";
import dayjs from "dayjs";

export default function ListCU() {
  const [rows, setRows] = React.useState([]);

  let navigate = useNavigate();

  const { token, setToken } = useToken();
  const user = token.token;

  const columns = [
    {
      headerName: "Poste",
      field: "nomP",
      width: 300,
      editable: true,
    },

    {
      headerName: "Date d'édition",
      field: "dateEd",
      width: 500,
      type: "date",
      editable: true,
    },

    {
      headerName: "Actions",
      field: "actions",
      type: "actions",
      width: "80",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<RiIcons.RiEye2Line style={{ color: "#2D3436" }} />}
          onClick={() => navigate(`/`)}
          label="Visualiser"
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
          "http://localhost:4000/contrat/usercont",
          config
        );

        data.map((item) => {
          item.dateEd = item?.dateEd;
          item.nomP = item?.posteId?.nomP;
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
      <h1>Contrats</h1>

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
          style={{ position: "sticky", width: "70%" }}
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
