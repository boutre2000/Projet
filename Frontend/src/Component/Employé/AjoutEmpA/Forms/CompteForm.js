import React from "react";
import { Grid } from "@mui/material";
import "./Forms.css";

import { InputField, SelectField } from "../FormFields";

export const Roles = [
  {
    value: "1",
    label: "Responsible",
  },
  {
    value: "2",
    label: "Admin",
  },
  {
    value: "3",
    label: "Manager",
  },
  {
    value: "4",
    label: "Developer",
  },
  {
    value: "5",
    label: "Documentalist",
  },
  {
    value: "6",
    label: "Designer",
  },
];
export default function ContactForm(props) {
  const {
    formField: { Role, password, RépéterLeMotDePasse, email },
  } = props;

  return (
    <div className="postup">
      <div className="postupformcont">
        <div className="postupform">
          <div className="colone">
            <label> Email : </label>{" "}
            <InputField name={email.name} label={email.label} fullWidth />
            <label> Mot De Passe : </label>{" "}
            <InputField name={password.name} label={password.label} fullWidth />
            <label> Répéter Le Mot De Passe : </label>{" "}
            <InputField
              name={RépéterLeMotDePasse.name}
              label={RépéterLeMotDePasse.label}
              fullWidth
            />
            {/* <InputField name={Role.name} label={Role.label} fullWidth /> */}
            <label> Role : </label>{" "}
            <SelectField
              name={Role.name}
              label={Role.label}
              data={Roles}
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}
