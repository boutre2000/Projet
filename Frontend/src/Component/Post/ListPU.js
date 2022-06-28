import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios'
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import * as RiIcons from 'react-icons/ri';
import '../DemConge/Conge.css'
import useToken from '../useToken'
import dayjs from 'dayjs'




export default function ListPU() {

const [rows,setRows]= React.useState([])

let navigate= useNavigate()


const { token, setToken } = useToken();
const user= token.token




const columns = [
  {
    headerName: 'Fonction',
    field: 'nomP',
    width: 110,
    editable: true,
   
  },

 {   headerName: 'Employé',
    field: 'userId',
    width: 150,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <p className='congenom'>
          {cellValues.value}
        </p>
      );
    }},
  
    {
      headerName: 'Département',
      field: 'depId',
      width: 110,
      editable: true,
     
    },
    
    {
      headerName: 'Statut',
      field: 'StatusP',
      width: 100,
      
     } ,
    {
      headerName: 'Situation',
      field: 'Situation',
      width: 100,
      
    },
    {
      headerName: 'Salaire',
      field: 'Salaire',
      width: 80,
      
    },
  {
    headerName: "Date d'occupation",
    field: 'DateE',
    width: 90,
    type: 'date',
    editable: true,
  },
  {
    headerName: 'Date de libération',
    field: 'DateS',
    type: 'date',
    width: 90,
    editable: true,
  },
 
  
 
  { headerName: 'Actions',
    field: 'actions',
    type: 'actions',
    width: '80',
    getActions: (params) => [
      <GridActionsCellItem icon={<RiIcons.RiEye2Line style={{color: '#2D3436'}}/>}   onClick={()=>
        navigate(`/previewpu/${params.id}`)
      }  label="Visualiser" showInMenu />
      
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
      
     
          const {data} = await axios.get('http://localhost:4000/post/user', config)
          
          data.map(item=>{
         
        item.DateE= dayjs(data?.DateE)?.format('YYYY-MM-DD');
        
        item.DateS=  dayjs(data?.DateS)?.format('YYYY-MM-DD');
      
        
        item.userId= item?.userId?.Nom +' '+ item?.userId?.Prenom;
        item.depId= item?.depId?.NomD 
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
    <h1>Postes</h1>
    
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
        style={{position: 'sticky',width: '70%'}}
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




