import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios'
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import { ActionTypes } from '@mui/base';
import * as RiIcons from 'react-icons/ri';
import '../DemConge/Conge.css'

import useToken from '../useToken'



export default function ListerD() {

const [rows,setRows]= React.useState([])

let cpt=0;
let navigate= useNavigate()


const { token, setToken } = useToken();
const user= token.token




const columns = [
  {
    headerName: 'Département',
    field: 'NomD',
    width: 200,
    type: 'date',
    editable: true,
  },
  {
    headerName: 'Responsable',
    field: 'RespId',
    width: 610,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <p className='congenom'>
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
        navigate(`/UpdateDep/${params.id}`)
      }  label="Modifier" showInMenu />
      
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
      
     
          const {data} = await axios.get('http://localhost:4000/dep/list', config)
          
          data.map(item=>{
         
        cpt++;
        item.RespId= item?.RespId?.Nom +' '+ item?.RespId?.Prenom;
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
    <h1>Départements</h1>
    <button className='congebtn' onClick={()=>
        navigate(`/AjoutDep`)}> Ajouter un département </button>
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

