import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios'
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import * as RiIcons from 'react-icons/ri';
import '../DemConge/Conge.css'
import useToken from '../useToken'



export default function Papier() {

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
    width: 300,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <p className='congenom'>
          {cellValues.value}
        </p>
      );
    }
  
    
  },
  {
    headerName: 'Nom',
    field: 'Nom',
    width: 180,
  },
  {
    headerName: 'Format',
    field: 'format',
    width: 150,
  },
 
  
  {
    headerName: 'Etat',
    field: 'etatD',
    width: 150, 
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
        navigate(`/previewP/${params.id}`)
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
      
     
          const {data} = await axios.get('http://localhost:4000/demPap/list', config)
          
          data.map(item=>{
          
        cpt++;
        item.userId= item?.userId?.Nom +' '+ item?.userId?.Prenom;
          })
        setRows(data)
      }catch(err){
          console.log(err)
      }
  }
   fetchFCT()
},[])



  return (
    <div className='conge'>
    <h1>Demandes de papier</h1>
    
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

