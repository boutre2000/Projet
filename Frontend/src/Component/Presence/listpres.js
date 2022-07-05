import * as React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios'
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import '../DemConge/Conge.css'
import useToken from '../useToken'

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




export default function Listpres() {

const [rows,setRows]= React.useState([])
const [date,setDate]= React.useState(null)
const [file, setFile] = useState();
const [pj, setPj] = useState("Ajouter le document ");
const [open, setOpen]= React.useState(false);
const [error, setError]= React.useState(false);
let cpt=0;
let navigate= useNavigate()

//const user = isAuth() ? isAuth().user : ''
//const user = (localStorage.getItem('token'));
const { token, setToken } = useToken();
const user= token.token


let config = {
  headers: {
    'Authorization': 'Bearer ' + user
  }
}



const columns = [
  {
    headerName: 'Employé',
    field: 'userId',
    width: 230,
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
    headerName: 'En service',
    field: 'enservice',
    width: 170,
    type: 'date',
    editable: true,
  },
  {
    headerName: 'En repos',
    field: 'enrepos',
    type: 'date',
    width: 170,
    editable: true,
  },
  {
    headerName: 'Temps de retard',
    field: 'retard',
    width: 120,
    
   } ,
  {
    headerName: 'Temps de départ tôt',
    field: 'avance',
    width: 120,
    
  },
  
  
 
  { headerName: 'Actions',
    field: 'actions',
    type: 'actions',
    width: '80',
    getActions: (params) => [
      <GridActionsCellItem icon={<RiIcons.RiEye2Line/>}   onClick={()=>
        navigate(`/updatepres/${params.id}`)
      }  label="Visualiser" showInMenu />
      
    ]
  }
 
];




React.useEffect(()=>{
  const fetchFCT = async()=>{
    
      try{
        
          const {data} = await axios.get('http://localhost:4000/pres/list',config)
          
           var arr= [];
            data.map((item)=>{
            console.log(data.presence);
            item.presence.map(p=>{
            //p.enrepos= dayjs(data?.p?.enrepos)?.format('YYYY-MM-DD');
           // p.enservice= dayjs(data?.p?.enservice)?.format('YYYY-MM-DD');
            p.userId= p?.userId?.Nom +' '+ p?.userId?.Prenom;
            arr.push(p)
            })
         
        })
        setRows(arr)
      }catch(err){
          console.log(err)
      }
  }
   fetchFCT()
},[])






















  return (
    <div className='conge'>
    <h1>Assiduités</h1>
    <button className='congebtnm' onClick={()=>
        navigate(`/presenceu`)}> Mes assiduités</button>
       {/* <label  htmlFor="date">Fonction</label>
        <input 
          type="date"
          name="date"
          onChange={e => setDate(e.target.value)} />  */}
        <button className='congebtnf' onClick={()=>
        navigate(`/addpres`)} > Inserer le fichier POINTAGE</button>
        
           <button className='congebtna' onClick={()=>
        navigate(`/listabs`)} > Les absences</button>
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

