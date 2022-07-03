/*import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';

import {useParams} from 'react-router-dom'

function PJ() {
const {id} = useParams()
const[data,setDate]=useState([])
const [form,setForm] = React.useState({pj:""})

useEffect(() => {
    const fetchFCT = async()=>{
        try{
             await axios.get(`http://localhost:4000/contrat/pj/${id}`)
             setForm(curr=>({pj:data?.pj}))
           
        }catch(err){
            console.log(err)
        }
    }
    if(id) fetchFCT()
},[id])


    
}
export default PJ;
*/

import axios from 'axios';
import React from 'react'; 
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router';
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom'
import useToken from '../useToken';





function Lister() {
  


  
    const {id} = useParams()
 const[data,setDate]=useState([])
 const [form,setForm] = React.useState({})

 const { token, setToken } = useToken();
 const user= token.token


 let config = {
   headers: {
     'Authorization': 'Bearer ' + user
   }
}

 useEffect(() => {

    const fetchFCT = async()=>{
        try{
             await axios.get(`http://localhost:4000/contrat/viewpj/${id}`, config)
             setForm(curr=>({}))
           
        }catch(err){
            console.log(err)
        }
    }
    if(id) fetchFCT()
},[id])

 const arr = data.map((d) => {
   return(
     <tr>
       <td>{d.pj}</td>
       
   </tr>
     
   )
 })
 
 return(
   <React.Fragment>
   
   <table>
       <tr>
          <th>Nom de l'employé</th>
          
           
         
         
          
       </tr>
       {arr}
   </table>



 
  </React.Fragment>



    )
    
}
export default Lister;