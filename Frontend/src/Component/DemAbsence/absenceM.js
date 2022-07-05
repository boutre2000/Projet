import * as React from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { ActionTypes } from "@mui/base";
import * as RiIcons from "react-icons/ri";
import "./Absence.css";
import isAuth from "../isAuth";
import useToken from "../useToken";

export default function CongeM() {
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
      headerName: "Employé",
      field: "userId",
      width: 150,
      editable: true,
      renderCell: (cellValues) => {
        return <p className="congenom">{cellValues.value}</p>;
      },
    },
    {
      headerName: "Date début",
      field: "dateDebut",
      width: 100,
      type: "date",
      editable: true,
    },
    {
      headerName: "Date fin",
      field: "dateFin",
      type: "date",
      width: 100,
      editable: true,
    },

    {
      headerName: "Motif",
      field: "motif",
      width: 100,
    },

    // {
    //   headerName: 'Autorisation Admin',
    //   field: 'autoAdmin',
    //   width: 150,
    //   renderCell: (cellValues) => {
    //     return (
    //       <p className='congeautoad'>
    //         {cellValues.value}
    //       </p>
    //     );
    //   }
    // },
    // {
    //   headerName: 'Autorisation Manager',
    //   field: 'autoManag',
    //   width: 150,
    //   renderCell: (cellValues) => {
    //     return (
    //       <p className='congeautomg'>
    //         {cellValues.value}
    //       </p>
    //     );
    //   }
    // },
    {
      headerName: "Actions",
      field: "actions",
      type: "actions",
      width: "80",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<RiIcons.RiEye2Line />}
          onClick={() => navigate(`/previewas/${params.id}`)}
          label="Preview"
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
          "http://localhost:4000/demAbs/group",
          config
        );
        console.log(data);

        data &&
          data.length > 0 &&
          data.map((item) => {
            let d = new Date(item?.dateDebut);
            d = d?.getDate() + "/" + d?.getMonth() + "/" + d?.getFullYear();
            setDb(d);
            d = new Date(item?.dateFin);
            d = d?.getDate() + "/" + d?.getMonth() + "/" + d?.getFullYear();
            setDf(d);
            item.dateDebut = db;
            item.dateFin = df;
            cpt++;
            item.userId = item?.userId?.Nom + " " + item?.userId?.Prenom;
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
      <h1>Demandes d'absences</h1>
      <button
        className="congebtn"
        onClick={() => {
          navigate("/absenceu");
        }}
      >
        {" "}
        Mes demandes{" "}
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
          style={{ position: "absolute", width: "71%" }}
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
