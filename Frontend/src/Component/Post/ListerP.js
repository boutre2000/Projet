import * as React from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import * as RiIcons from "react-icons/ri";
import "../DemConge/Conge.css";
import useToken from "../useToken";
import dayjs from "dayjs";

export default function ListerP() {
  const [rows, setRows] = React.useState([]);
  const [db, setDb] = React.useState(null);
  const [df, setDf] = React.useState(null);
  let cpt = 0;
  let navigate = useNavigate();

  //const user = isAuth() ? isAuth().user : ''
  //const user = (localStorage.getItem('token'));
  const { token, setToken } = useToken();
  const user = token.token;

  const columns = [
    {
      headerName: "Fonction",
      field: "nomP",
      width: 110,
    },

    {
      headerName: "Employé",
      field: "userId",
      width: 150,
      renderCell: (cellValues) => {
        return <p className="congenom">{cellValues.value}</p>;
      },
    },

    {
      headerName: "Département",
      field: "depId",
      width: 135,
    },

    {
      headerName: "Statut",
      field: "StatusP",
      width: 105,
    },
    {
      headerName: "Situation",
      field: "Situation",
      width: 150,
    },
    {
      headerName: "Salaire",
      field: "Salaire",
      width: 80,
    },
    {
      headerName: "Date d'occupation",
      field: "DateE",
      width: 120,
      type: "date",
    },
    {
      headerName: "Date de libération",
      field: "DateS",
      type: "date",
      width: 120,
    },

    {
      headerName: "Actions",
      field: "actions",
      type: "actions",
      width: "100",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<RiIcons.RiEditLine style={{ color: "#2D3436" }} />}
          onClick={() => navigate(`/UpdatePost/${params.id}`)}
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
          "http://localhost:4000/post/list",
          config
        );

        data.map((item) => {
          item.DateE = dayjs(data?.DateE)?.format("YYYY-MM-DD");

          item.DateS = dayjs(data?.DateS)?.format("YYYY-MM-DD");

          cpt++;
          item.userId = item?.userId?.Nom + " " + item?.userId?.Prenom;
          item.depId = item?.depId?.NomD;
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
      <h1>Postes</h1>
      <button className="congebtn" onClick={() => navigate(`/AjoutPost`)}>
        {" "}
        Nouveau poste
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
