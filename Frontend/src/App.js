import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Login from './Component/Login/login';
import useToken from './Component/useToken';
import Navbar from './Component/Header/Header';
import ForgotPass from './Component/Forgotpassword/ForgotPass';
import Reset from './Component/Forgotpassword/reset';
import Sidebar from './Component/Sidebar/sidebar'

//demandeConger
import Conge from './Component/DemConge/conge'
import Preview from './Component/DemConge/preview';
import Addconge from './Component/DemConge/Addconge';
import CongeM from './Component/DemConge/congeM';
import PreviewM from './Component/DemConge/previewM'
import CongeU from './Component/DemConge/congeU';
import PreviewU from './Component/DemConge/previewU';


//demandePapier

import Papier from './Component/DemPapier/Papier'
import PapierU from './Component/DemPapier/PapierU';
import PreviewPAU from './Component/DemPapier/previewU';
import PreviewP from './Component/DemPapier/preview';
import Addpapier from './Component/DemPapier/Addpapier';

//departement
import ListerD from './Component/Departement/Lister';
import AjoutD from './Component/Departement/Ajout';
import UpdateD from './Component/Departement/UpdateD';
import ListDU from './Component/Departement/ListDU';

//poste

import AjoutP from './Component/Post/AjoutP';
import ListerP from './Component/Post/ListerP';
import UpdatePM from './Component/Post/UpdateP';
import PreviewPU from './Component/Post/PreviewPU';
import ListPU from './Component/Post/ListPU';

//contrat
import AjoutC from './Component/Contrat/AjoutC';
import ListerC from './Component/Contrat/ListerC';
import UpdateC from './Component/Contrat/UpdateC';
import PreviewCU from './Component/Contrat/PreviewCU';
import ListCU from './Component/Contrat/ListCU'

import Pj from './Component/Contrat/Pj';
import PjV from './Component/Contrat/Visualiser';


//precence

import Listpres from './Component/Presence/listpres';
import Listabs from './Component/Presence/listabs';
import Addpres from './Component/Presence/ajoutpres';




//Employee

import ListEmpA from "./Component/Employé/ListEmpA/ListEmp";
import ListEmpM from "./Component/Employé/ListEmpM/ListEmpParManag";
import AjoutEmpA from "./Component/Employé/AjoutEmpA/AjoutEmp";
import PreviewInfo from "./Component/Employé/AjoutEmpA/Preview";
import UpdateInfo from "./Component/Employé/AjoutEmpA/Update";
import PreviewInfoU from "./Component/Employé/ListEmpU/PreviewInfoU";
import UpdateInfoU from "./Component/Employé/ListEmpU/UpdateInfoU";

//DemandeAbs
import Absence from "./Component/DemAbsence/absence";
import Addabsence from "./Component/DemAbsence/addAbsence";
import AbsenceM from "./Component/DemAbsence/absenceM";
import PreviewaMS from "./Component/DemAbsence/previewM";
import PreviewAUS from "./Component/DemAbsence/previewU";
import AbsenceU from "./Component/DemAbsence/absenceU";
import PreviewAS from "./Component/DemAbsence/preview";


function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return (


      <Router>
        <Routes>
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/forgotPass' element={<ForgotPass />} />
          <Route path='/reset/:token' element={<Reset />} />
        </Routes>
      </Router>


    )
  } else {

    const role = token?.role;
    console.log(role)
    if (role === 'Admin') {
      return (
        <React.Fragment>
          <div className="wrapper">
            <Router>
              <Navbar />
              <Sidebar />

              <Routes>
                   

              <Route path='/login' element={<Login setToken={setToken} />} />



                <Route path='/' element={<Dashboard />} />

                <Route path='/conge' element={<Conge />} />
                <Route path='/congeu' element={<CongeU />} />
                <Route path='/preview/:id' element={<Preview />} />
                <Route path='/addconge' element={<Addconge />} />



                <Route path="/ListDep" element={<ListerD />} />
                <Route path="/AjoutDep" element={<AjoutD />} />
                <Route path="/UpdateDep/:id" element={<UpdateD />} />

                <Route path='/papier' element={<Papier />} />
                <Route path='/papeu' element={<PapierU />} />
                <Route path='/previewP/:id' element={<PreviewP />} />


                <Route path="ListPost" element={<ListerP />} />
                <Route path="/AjoutPost" element={<AjoutP />} />
                <Route path="UpdatePost/:id" element={<UpdatePM />} />



                <Route path="/ListCont" element={<ListerC />} />
                <Route path="/AjoutCont" element={<AjoutC />} />
                <Route path="/UpdateCont/:id" element={<UpdateC />} />
                <Route path="/previewcu/:id" element={<PreviewCU />} />
                <Route path="/listcu" element={<ListCU />} />
                <Route path="Pj/:id" element={<Pj />} />
                <Route path="Visualiser/:id" element={<PjV />} />

                
                <Route path="/listpres" element={<Listpres />} />
                <Route path="/listabs" element={<Listabs />} />
                <Route path="/addpres" element={<Addpres />} />




                <Route path="/AjoutEmp" element={<AjoutEmpA />} />
              <Route path="/PreviewInfo/:id" element={<PreviewInfo />} />
              <Route path="/UpdateInfo/:id" element={<UpdateInfo />} />
              <Route path="/ListEmp" element={<ListEmpA />} />
              <Route path="/UpdateInfoU/:id" element={<UpdateInfoU />} />
              <Route path="/PreviewInfoU" element={<PreviewInfoU />} />



              <Route path="/absence" element={<Absence />} />
              <Route path="/absenceu" element={<AbsenceU />} />
              <Route path="/addabsence" element={<Addabsence />} />
              <Route path='/previewaus/:id' element={<PreviewAUS />} />
              <Route path='/previewas/:id' element={<PreviewAS />} />


              </Routes>
            </Router>
          </div>
        </React.Fragment>
      );
    }
    if (role === 'Manager') {
      return (
        <React.Fragment>
          <div className="wrapper">
            <Router>
              <Navbar />
              <Sidebar />

              <Routes>

              <Route path='/login' element={<Login setToken={setToken} />} />


                <Route path='/' element={<Dashboard />} />


                <Route path="/ListDep" element={<ListDU />} />



                <Route path='/conge' element={<CongeM />} />
                <Route path='/congeu' element={<CongeU />} />
                <Route path='/preview/:id' element={<PreviewM />} />
                <Route path='/addconge' element={<Addconge />} />

                <Route path='ListPost' element={<ListPU />} />
                <Route path='previewpu/:id' element={<PreviewPU />} />




                <Route path='/papier' element={<PapierU />} />
                <Route path='/addpapier' element={<Addpapier />} />
                <Route path='/previewpau/:id' element={<PreviewPAU />} />



                <Route path="/ListCont" element={<ListCU />} />
                <Route path="/previewcu/:id" element={<PreviewCU />} />


                <Route path="/ListEmpParManager" element={<ListEmpM />} />
                <Route path="/PreviewInfo/:id" element={<PreviewInfo />} />
                <Route path="/PreviewInfo/:id" element={<PreviewInfoU />} />
              <Route path="/UpdateInfo/:id" element={<UpdateInfoU />} />
               

              <Route path="/absenceu" element={<AbsenceU />} />
              <Route path="/absence" element={<AbsenceM />} />
              <Route path="/addabsence" element={<Addabsence />} />
              <Route path='/previewaus/:id' element={<PreviewAUS />} />
              <Route path='/previewas/:id' element={<PreviewAS />} />


              </Routes>
            </Router>
          </div>
        </React.Fragment>
      );
    }
    if (role === 'User') {
      return (
        <React.Fragment>
          <div className="wrapper">
            <Router>
              <Navbar />
              <Sidebar />

              <Routes>
                 

              <Route path='/login' element={<Login setToken={setToken} />} />

                <Route path='/' element={<Dashboard />} />


                <Route path="/ListDep" element={<ListDU />} />

                <Route path='/conge' element={<CongeU />} />
                <Route path='/previewu/:id' element={<PreviewU />} />
                <Route path='/addconge' element={<Addconge />} />

                <Route path='ListPost' element={<ListPU />} />
                <Route path='previewpu/:id' element={<PreviewPU />} />


                <Route path='/papier' element={<PapierU />} />
                <Route path='/addpapier' element={<Addpapier />} />
                <Route path='/previewpau/:id' element={<PreviewPAU />} />

                <Route path="/previewcu/:id" element={<PreviewCU />} />
                <Route path="/ListCont" element={<ListCU />} />




                <Route path="/PreviewInfo/:id" element={<PreviewInfoU />} />
              <Route path="/UpdateInfo/:id" element={<UpdateInfoU />} />


              <Route path="/absence" element={<AbsenceU />} />
             
              <Route path="/addabsence" element={<Addabsence />} />
              <Route path='/previewaus/:id' element={<PreviewAUS />} />



              </Routes>
            </Router>
          </div>
        </React.Fragment>
      );
    }
  }

}
export default App;