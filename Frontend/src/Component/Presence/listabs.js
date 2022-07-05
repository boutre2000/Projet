import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios'
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import * as RiIcons from 'react-icons/ri';
import '../DemConge/Conge.css'
import useToken from '../useToken'




export default function Listabs() {

const [rows,setRows]= React.useState([])
const [date,setDate]= React.useState(null)


let navigate= useNavigate()


const { token, setToken } = useToken();
const user= token.token




const columns = [
  {
    headerName: 'Employé',
    field: 'userId',
    width: 330,
    
    renderCell: (cellValues) => {
      return (
        <p className='congenom'>
          {cellValues.value}
        </p>
      );
    }
  
    
  },
  {
    headerName: 'Date',
    field: 'date',
    width: 280,
    type: 'date',
    
  },
  {
    headerName: "Motif d'absence",
    field: 'typeAbs',
    width: 200, 
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
        navigate(`/updatepres/${params.id}`)
      }  label="Visualiser" showInMenu />
      
    ]
  }
 
];

let config = {
    headers: {
      'Authorization': 'Bearer ' + user
    }
  }


React.useEffect(()=>{
  const fetchFCT = async()=>{
    
      try{
      
          const {data} = await axios.get('http://localhost:4000/pres/list',config)
          
           var arr= [];
            data.map((item)=>{
                setDate(item?.date);
            console.log(date);
            item.absence.map(p=>{
                let os={}
            //p.enrepos= dayjs(data?.p?.enrepos)?.format('YYYY-MM-DD');
           // p.enservice= dayjs(data?.p?.enservice)?.format('YYYY-MM-DD');
            p.userId= p?.userId?.Nom +' '+ p?.userId?.Prenom;
            p.date=date;
            
            arr.push(p);
            })
         
        })
        setRows(arr)
      }catch(err){
          console.log(err)
      }
  }
   fetchFCT()
},[])





// async function fetchData() {
//     const {data} = await axios.get('http://localhost:4000/pres/list',{params:{date:}},config)
//     setFetchedData(data)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   const handleSubmit = e => {
//     e.preventDefault()
//     fetchData()
//   }




  return (
    <div className='conge'>
    <h1>Assiduités</h1>
    <button className='congebtn' onClick={()=>
        navigate(`/presenceu`)}> Mes assiduités</button>
          <button onClick={()=>
        navigate(`/listpres`)} className='congebtna'  > Les presences</button>
        <div className='datesearche'>
       <label  htmlFor="date">Entrer une date</label>
        <input 
          type="date"
          name="date"
          onChange={e => setDate(e.target.value)} /> 
          </div>
         
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

