import React from "react";
import { Grid } from "@mui/material";
import { InputField, SelectField } from "../FormFields";
import axios from "axios";
import useToken from "../../../useToken";

export const Managers = [];

export default function ContactForm(props) {
  const [data, setData] = React.useState([]);
  const { token, setToken } = useToken();
  const user = token.token;
  let config = {
    headers: {
      Authorization: "Bearer " + user,
    },
  };
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/AjoutEmp/ListManager",
          config
        );
        const formattedDate = data.map((item) => ({
          label: `${item.Nom} ${item.Prenom}`,
          value: item._id,
        }));
        setData(formattedDate);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const {
    formField: { adresse, mobile, email, managId, droitCong, idP },
  } = props;
  return (
    <React.Fragment>
      <div className="postup">
        <div className="postupformcont">
          <div className="postupform">
            <div className="colone">
              <label> Adresse : </label>{" "}
              <InputField name={adresse.name} label={adresse.label} fullWidth />{" "}
              <br />
              <label> Mobile : </label>{" "}
              <InputField name={mobile.name} label={mobile.label} fullWidth />
            </div>
            <label> Email : </label>{" "}
            <InputField name={email.name} label={email.label} fullWidth />
            <div className="coltwo">
              <label> IDP : </label>{" "}
              <InputField name={idP.name} label={idP.label} fullWidth />
              <label> Droit de Congé : </label>{" "}
              <InputField
                name={droitCong.name}
                label={droitCong.label}
                fullWidth
              />
              <SelectField
                name={managId.name}
                label={managId.label}
                data={data}
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
