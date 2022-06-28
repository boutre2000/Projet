import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios'
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import { ActionTypes } from '@mui/base';
import * as RiIcons from 'react-icons/ri';
import './Papier.css'
import isAuth from '../isAuth';
import useToken from '../useToken'




export default function PapierU() {

const [rows,setRows]= React.useState([])
const [db,setDb]= React.useState(null)
const [df,setDf]= React.useState(null)
let cpt=0;
let navigate= useNavigate()

//const user = isAuth() ? isAuth().user : ''
//const user = (localStorage.getItem('token'));
const { token, setToken } = useToken();
const user= token.token




const columns = [

    {
        headerName: 'Employé',
        field: 'userId',
        width: 150,
        editable: true,
        renderCell: (cellValues) => {
          return (
            <p className='papiernom'>
              {cellValues.value}
            </p>
          );
        }
      
        
      },
      {
        headerName: 'Nom',
        field: 'Nom',
        width: 100,
      },
      {
        headerName: 'Format',
        field: 'format',
        width: 100,
      },
     
      
      {
        headerName: 'Etat',
        field: 'etatD',
        width: 100, 
        renderCell: (cellValues) => {
          return (
            <p className='congeautoad'>
              {cellValues.value}
            </p>
          );
        }
      }, 
  { headerName: 'Actions',
    field: 'actions',
    type: 'actions',
    width: '80',
    getActions: (params) => [
      <GridActionsCellItem icon={<RiIcons.RiEye2Line/>}   onClick={()=>
        navigate(`/previewpau/${params.id}`)
      }  label="Preview" showInMenu />
      
    ]
  }
 
];


React.useEffect(()=>{
  const fetchFCT = async()=>{
      try{
        let config = {
          headers: {
            'Authorization': 'Bearer ' + user
          }
        }
      
     
          const {data} = await axios.get('http://localhost:4000/demPap/user', config)
          
          data.map(item=>{
        cpt++;
        
          })
        setRows(data)
      }catch(err){
          console.log(err)
      }
  }
   fetchFCT()
},[])



  return (
    <div className='papier'>
    <h1>Demandes de papier</h1>
    <button className='congebtn' onClick={()=>
        navigate(`/addpapier`)}> Créer une demande </button>
    <div style={{ height: 400, width: '100%' ,position: 'fixed',
   left: '300px', top:'218px'}}>
      <DataGrid
        rows={rows}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        style={{position: 'absolute',width: '70%'}}
        sx={{
          "& .MuiDataGrid-columnSeparator": {
            display: "none"
          }
        }}

      />
      
    </div>
    
    </div>
    
   
  );
}

