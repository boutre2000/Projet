import React from "react";
import img from "./img.png";
import "./Header.css";
import { Avatar, Grid } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";
import { FcManager } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";

export default function Navbar({ setIsLoggeddin }) {
  let navigate = useNavigate();
  const { id } = useParams();

  const logout = () => {
    localStorage.removeItem("token");
  //  window.location.href = '/login';
  let path = '/login';
  navigate(path);
  };
  const AfficheInfoUser = () => {
    // let path = `/PreviewInfoU`;
    // navigate(path);
    console.log(id);
    let path = `/PreviewInfoU`;
    navigate(path);
  };
  const ModifierInfoUser = () => {
    let path = `/UpdateInfoU/${id}`;
    navigate(path);
  };
  return (
    <div className="nav">
      <img src={img} alt="logo" />

      <Dropdown>
        <Dropdown.Button flat>
          <Grid.Container gap={2}>
            <Grid>
              {" "}
              <FcManager size={20} />
            </Grid>
          </Grid.Container>
        </Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
          <Dropdown.Item key="new">
            <button  onClick={AfficheInfoUser}>Afficher mon Profile </button>
          </Dropdown.Item>
          <Dropdown.Item key="copy">
            <button onClick={ModifierInfoUser}>Modifier Mon Profile</button>
          </Dropdown.Item>
          <Dropdown.Item key="delete" withDivider color="error">
            <button style={{backgroundColor: '#009AD2'}} onClick={logout}>Se déconnecter </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <Grid.Container gap={2}>
        <Grid>
          <Avatar
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
            color="gradient"
            bordered
            squared
            onClick={logout}
          />
        </Grid>
      </Grid.Container> */}
      {/* <button onClick={logout}>  Logout </button> */}
    </div>
  );
}
