import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardA from "./Component/Dashboard/Dashboard";
import DashboardM from "./Component/Dashboard/Dashboard";
import DashboardU from "./Component/Dashboard/Dashboard";

import Login from "./Component/Login/login";
import useToken from "./Component/useToken";
import Navbar from "./Component/Header/Header";
import ForgotPass from "./Component/Forgotpassword/ForgotPass";
import Reset from "./Component/Forgotpassword/reset";
import Sidebar from "./Component/Sidebar/sidebar";
import Conge from "./Component/Conge/conge";
import Absence from "./Component/Absence/absence";

import Preview from "./Component/Conge/preview";
import PreviewA from "./Component/Absence/preview";
import Addconge from "./Component/Conge/Addconge";
import Addabsence from "./Component/Absence/addAbsence";

import CongeM from "./Component/Conge/congeM";
import AbsenceM from "./Component/Absence/absenceM";

import PreviewM from "./Component/Conge/previewM";
import PreviewaM from "./Component/Absence/previewM";
import PreviewAU from "./Component/Absence/previewU";
import CongeU from "./Component/Conge/congeU";
import AbsenceU from "./Component/Absence/absenceU";

import ListEmpA from "./Component/Employé/ListEmpA/ListEmp";
import ListEmpM from "./Component/Employé/ListEmpM/ListEmpParManag";
import AjoutEmpA from "./Component/Employé/AjoutEmpA/AjoutEmp";
import PreviewInfo from "./Component/Employé/AjoutEmpA/Preview";
import UpdateInfo from "./Component/Employé/AjoutEmpA/Update";
// import ListerDpU from "./Component/Papier/DemPapierU/ListerDP";
// import ListerDpA from "./Component/Papier/PapierA/Lister";
import PreviewInfoU from "./Component/Employé/ListEmpU/PreviewInfoU";
import UpdateInfoU from "./Component/Employé/ListEmpU/UpdateInfoU";
// import AjouterDpU from "./Component/Papier/DemPapierU/AjoutDP";
// import UpdateDP from "./Component/Papier/DemPapierU/UpdateDP";

import PreviewU from "./Component/Conge/previewU";
import PreviewaU from "./Component/Absence/previewU";

//departement
import ListerD from "./Component/Departement/Lister";
import AjoutD from "./Component/Departement/Ajout";
import UpdateD from "./Component/Departement/UpdateD";
import ListDU from "./Component/Departement/ListDU";
//poste

import AjoutP from "./Component/Post/AjoutP";
import ListerP from "./Component/Post/ListerP";
import UpdatePM from "./Component/Post/UpdateP";
import PreviewPU from "./Component/Post/PreviewPU";
import ListPU from "./Component/Post/ListPU";

//demandePapier

import Papier from "./Component/DemPapier/Papier";
import PapierU from "./Component/DemPapier/PapierU";
import PreviewPAU from "./Component/DemPapier/previewU";
import PreviewP from "./Component/DemPapier/preview";
import Addpapier from "./Component/DemPapier/Addpapier";
//contrat
import AjoutC from "./Component/Contrat/AjoutC";
import ListerC from "./Component/Contrat/ListerC";
import UpdateC from "./Component/Contrat/UpdateC";
import PreviewCU from "./Component/Contrat/PreviewCU";
import ListCU from "./Component/Contrat/ListCU";

import Pj from "./Component/Contrat/Pj";
import PjV from "./Component/Contrat/Visualiser";
//congeannuel
import ListerCA from "./Component/CongéA/List";
import AjoutCA from "./Component/CongéA/Ajout";
import UpdateCA from "./Component/CongéA/Update";
import ListerCAU from "./Component/CongéA/ListU";
//Cominterne
import ListerCI from "./Component/ComInterne/List";
import ListerCIU from "./Component/ComInterne/ListU";

import AjoutCI from "./Component/ComInterne/Ajout";
import UpdateCI from "./Component/ComInterne/Update";
import PreviewCIU from "./Component/ComInterne/PreviewCIU";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Login />} />
  //       <Route path="/forgotPass" element={<ForgotPass />} />
  //       <Route path="/reset/:token" element={<Reset />} />

  //       <Route path="AjoutEmp" element={<AjoutEmpA />} />
  //       <Route path="PreviewInfo/:id" element={<PreviewInfo />} />
  //       <Route path="UpdateInfo/:id" element={<UpdateInfo />} />

  //       <Route path="/conge" element={<Conge />} />
  //       <Route path="/congeu" element={<CongeU />} />
  //       <Route path="/preview/:id" element={<Preview />} />
  //       <Route path="/addconge" element={<Addconge />} />
  //       <Route path="ListEmp" element={<ListEmpA />} />
  //       <Route path="ListerDP" element={<ListerDpA />} />

  //       <Route path="/conge" element={<CongeM />} />
  //       <Route path="/congeu" element={<CongeU />} />
  //       <Route path="/preview/:id" element={<PreviewM />} />
  //       <Route path="/addconge" element={<Addconge />} />
  //       <Route path="ListEmpParManager" element={<ListEmpM />} />

  //       <Route path="ListerDP" element={<ListerDpU />} />
  //       <Route path="AjoutDP" element={<AjouterDpU />} />
  //       <Route path="UpdateDP/:id" element={<UpdateDP />} />
  //       <Route path="PreviewInfo/:id" element={<PreviewInfoU />} />
  //       <Route path="UpdateInfo/:id" element={<UpdateInfoU />} />

  //       <Route path="/conge" element={<CongeU />} />
  //       <Route path="/previewu/:id" element={<PreviewU />} />
  //       <Route path="/addconge" element={<Addconge />} />
  //     </Routes>
  //   </Router>
  // );
  const { token, setToken } = useToken();
  console.log(token);

  return !token ? (
    <Router>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />

        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/reset/:token" element={<Reset />} />
      </Routes>
    </Router>
  ) : (
    <div>
      {token?.role === "Admin" && (
        <>
          <Router>
            <Navbar />
            <Sidebar />
            <Routes>
              <Route path="/Dashboard" element={<DashboardA />} />

              <Route path="/AjoutEmp" element={<AjoutEmpA />} />
              <Route path="/PreviewInfo/:id" element={<PreviewInfo />} />
              <Route path="/UpdateInfo/:id" element={<UpdateInfo />} />
              <Route path="/conge" element={<Conge />} />
              <Route path="/congeu" element={<CongeU />} />
              <Route path="/absence" element={<Absence />} />
              <Route path="/absenceu" element={<AbsenceU />} />
              <Route path="/preview/:id" element={<Preview />} />
              <Route path="/previewA/:id" element={<PreviewA />} />
              <Route path="/addconge" element={<Addconge />} />
              <Route path="/addabsence" element={<Addabsence />} />
              <Route path="/ListEmp" element={<ListEmpA />} />
              <Route path="/ListerD" element={<ListerD />} />
              <Route path="/UpdateInfoU/:id" element={<UpdateInfoU />} />
              <Route path="/PreviewInfoU" element={<PreviewInfoU />} />

              <Route path="/ListDep" element={<ListerD />} />
              <Route path="/AjoutDep" element={<AjoutD />} />
              <Route path="/UpdateDep/:id" element={<UpdateD />} />

              <Route path="/ListPost" element={<ListerP />} />
              <Route path="/AjoutPost" element={<AjoutP />} />
              <Route path="/UpdatePost/:id" element={<UpdatePM />} />
              <Route path="/papier" element={<Papier />} />

              <Route path="/papeu" element={<PapierU />} />
              <Route path="/previewpau/:id" element={<PreviewP />} />

              <Route path="/ListCont" element={<ListerC />} />

              <Route path="/AjoutCont" element={<AjoutC />} />
              <Route path="/edit/:id" element={<UpdateC />} />
              <Route path="/previewcu/:id" element={<PreviewCU />} />
              <Route path="/listcu" element={<ListCU />} />
              <Route path="/Pj/:id" element={<Pj />} />
              <Route path="/Visualiser/:id" element={<PjV />} />
              <Route path="/previewau/:id" element={<PreviewaU />} />

              <Route path="/previewu/:id" element={<PreviewU />} />

              <Route path="/ListCongA" element={<ListerCA />} />
              <Route path="/AjoutCongA" element={<AjoutCA />} />
              <Route path="/UpdateCongA/:id" element={<UpdateCA />} />

              <Route path="/ListCom" element={<ListerCI />} />
              <Route path="/AjoutCom" element={<AjoutCI />} />
              <Route path="/UpdateCom/:id" element={<UpdateCI />} />
            </Routes>
          </Router>
        </>
      )}
      {token?.role === "User" && (
        <>
          <Router>
            <Navbar />
            <Sidebar />
            <Routes>
              {/* <Route path="/conge" element={<CongeM />} />
              <Route path="/congeu" element={<CongeU />} />
              <Route path="/preview/:id" element={<PreviewM />} />
              <Route path="/addconge" element={<Addconge />} />
              <Route path="ListEmpParManager" element={<ListEmpM />} /> */}
              <Route path="/Dashboard" element={<DashboardU />} />

              <Route path="/ListDep" element={<ListDU />} />
              <Route path="/PreviewInfo/:id" element={<PreviewInfoU />} />
              <Route path="/UpdateInfo/:id" element={<UpdateInfoU />} />
              <Route path="/previewau/:id" element={<PreviewAU />} />
              <Route path="/conge" element={<CongeU />} />
              <Route path="/absenceu" element={<AbsenceU />} />

              <Route path="/previewu/:id" element={<PreviewU />} />

              <Route path="/addconge" element={<Addconge />} />
              <Route path="/addabsence" element={<Addabsence />} />
              <Route path="/ListPost" element={<ListPU />} />
              <Route path="/previewpu/:id" element={<PreviewPU />} />

              <Route path="/papier" element={<PapierU />} />
              <Route path="/addpapier" element={<Addpapier />} />
              <Route path="/previewpau/:id" element={<PreviewPAU />} />

              <Route path="/previewcu/:id" element={<PreviewCU />} />
              <Route path="/ListCont" element={<ListCU />} />
              <Route path="/ListCom" element={<ListerCIU />} />
              <Route path="/previewciu/:id" element={<PreviewCIU />} />
              <Route path="/ListCongA" element={<ListerCAU />} />
            </Routes>
          </Router>
        </>
      )}
      {token?.role === "Manager" && (
        <>
          <Router>
            <Navbar />
            <Sidebar />
            <Routes>
              <Route path="/Dashboard" element={<DashboardM />} />

              <Route path="/ListDep" element={<ListDU />} />

              <Route path="/conge" element={<CongeM />} />
              <Route path="/congeu" element={<CongeU />} />
              <Route path="/absence" element={<AbsenceM />} />
              <Route path="/absenceu" element={<AbsenceU />} />
              <Route path="/preview/:id" element={<PreviewM />} />
              <Route path="/previewM/:id" element={<PreviewaM />} />

              <Route path="/addconge" element={<Addconge />} />
              <Route path="/addabsence" element={<Addabsence />} />

              <Route path="/ListPost" element={<ListPU />} />
              <Route path="/previewpu/:id" element={<PreviewPU />} />

              <Route path="/papier" element={<PapierU />} />
              <Route path="/addpapier" element={<Addpapier />} />
              <Route path="/previewpau/:id" element={<PreviewPAU />} />

              <Route path="/ListCont" element={<ListCU />} />
              <Route path="/previewcu/:id" element={<PreviewCU />} />

              <Route path="/ListEmpParManager" element={<ListEmpM />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );

  // const role = token?.role;
  // // const role = "Admin";
  // console.log(role);
  // return <div>test</div>;
  // if (role === "Admin") {
  //   return (
  //     <React.Fragment>
  //       <div className="wrapper">
  //         <Router>
  //           <Navbar />
  //           <Sidebar />

  //           <Routes>
  //             <Route path="AjoutEmp" element={<AjoutEmpA />} />
  //             <Route path="PreviewInfo/:id" element={<PreviewInfo />} />
  //             <Route path="UpdateInfo/:id" element={<UpdateInfo />} />

  //             <Route path="/conge" element={<Conge />} />
  //             <Route path="/congeu" element={<CongeU />} />
  //             <Route path="/preview/:id" element={<Preview />} />
  //             <Route path="/addconge" element={<Addconge />} />
  //           token?.role == "Admin"  <Route path="ListEmp" element={<ListEmpA />} />
  //             <Route path="ListerDP" element={<ListerDpA />} />
  //           </Routes>
  //         </Router>
  //       </div>
  //     </React.Fragment>
  //   );
  // }
  // if (role === "Manager") {
  //   return (
  //     <React.Fragment>
  //       <div className="wrapper">
  //         <Router>
  //           <Navbar />
  //           <Sidebar />

  //           <Routes>
  //             <Route path="/conge" element={<CongeM />} />
  //             <Route path="/congeu" element={<CongeU />} />
  //             <Route path="/preview/:id" element={<PreviewM />} />
  //             <Route path="/addconge" element={<Addconge />} />
  //             <Route path="ListEmpParManager" element={<ListEmpM />} />
  //           </Routes>
  //         </Router>
  //       </div>
  //     </React.Fragment>
  //   );
  // }
  // if (role === "User") {
  //   return (
  //     <React.Fragment>
  //       <div className="wrapper">
  //         <Router>
  //           <Navbar />
  //           <Sidebar />

  //           <Routes>
  //             <Route path="ListerDP" element={<ListerDpU />} />
  //             <Route path="AjoutDP" element={<AjouterDpU />} />
  //             <Route path="UpdateDP/:id" element={<UpdateDP />} />
  //             <Route path="PreviewInfo/:id" element={<PreviewInfoU />} />
  //             <Route path="UpdateInfo/:id" element={<UpdateInfoU />} />

  //             <Route path="/conge" element={<CongeU />} />
  //             <Route path="/previewu/:id" element={<PreviewU />} />
  //             <Route path="/addconge" element={<Addconge />} />
  //           </Routes>
  //         </Router>
  //       </div>
  //     </React.Fragment>
  //   );
  // }
  // }
}
export default App;
