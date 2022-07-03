import * as React from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import * as RiIcons from "react-icons/ri";
import "../DemConge/Conge.css";
import useToken from "../useToken";
import dayjs from "dayjs";
import fileDownload from "js-file-download";
import { Link } from "react-router-dom";

export default function ListerC() {
  const [rows, setRows] = React.useState([]);
  const [pj, setPj] = React.useState("");

  let cpt = 0;
  let navigate = useNavigate();

  //const user = isAuth() ? isAuth().user : ''
  //const user = (localStorage.getItem('token'));
  const { token, setToken } = useToken();
  const user = token.token;

  let config = {
    headers: {
      Authorization: "Bearer " + user,
    },
  };

  const columns = [
    {
      headerName: "Employé",
      field: "userId",
      width: 250,
      editable: true,
      renderCell: (cellValues) => {
        return <p className="congenom">{cellValues.value}</p>;
      },
    },

    {
      headerName: "Poste",
      field: "posteId",
      width: 190,
      editable: true,
    },

    {
      headerName: "Date Edition",
      field: "dateEd",
      width: 370,
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
          icon={<RiIcons.RiEditLine style={{ color: "#2D3436" }} />}
          onClick={() => navigate(`/edit/${params.id}`)}
          label="Modifier"
          showInMenu
        />,
        <GridActionsCellItem
          icon={<RiIcons.RiEditLine style={{ color: "#2D3436" }} />}
          onClick={(e) => telecharger(e, params.id)}
          label="Voir Support"
          showInMenu
        />,
      ],
    },
  ];

  React.useEffect(() => {
    const fetchFCT = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/contrat/list",
          config
        );

        data.map((item) => {
          item.userId =
            item?.posteId?.userId?.Nom + " " + item?.posteId?.userId?.Prenom;
          item.posteId = item?.posteId?.nomP;
        });
        setRows(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFCT();
  }, []);

  const telecharger = (e, id) => {
    e.preventDefault();
    axios
      .get(`http://localhost:4000/contrat/viewpj/${id}`, config, {
        responseType: "blob",
      })
      .then((dem) => {
        fileDownload(dem.data, "Support.pdf");
      });
  };

  return (
    <div className="conge">
      <h1>Contrats</h1>
      <button className="congebtna" onClick={() => navigate(`/listcu`)}>
        {" "}
        Mes contrats
      </button>
      <button className="congebtn" onClick={() => navigate(`/AjoutCont`)}>
        {" "}
        Nouveau contrat
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
