import React from "react";
import { Grid, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { InputField } from "../FormFields";
import "./Forms.css";

export default function IdentitéForm(props) {
  const {
    formField: { Nom, Prenom, numSs, sexe, numCni, prenomAr, nomAr, dateNaiss },
    formik,
  } = props;
  return (
    <React.Fragment>
      <div className="postup">
        <div className="postupformcont">
          <div className="postupform">
            <div className="colone"></div>
            <label>Nom : </label>{" "}
            <InputField name={Nom.name} label={Nom.label} fullWidth />
            <label>Prenom : </label>{" "}
            <InputField name={Prenom.name} label={Prenom.label} fullWidth />
            <label>Prenom Ar : </label>{" "}
            <InputField name={prenomAr.name} label={prenomAr.label} fullWidth />
            <label>Nom Ar : </label>{" "}
            <InputField name={nomAr.name} label={nomAr.label} fullWidth />
          </div>
          <div className="coltwo">
            <label>Num SS: </label>{" "}
            <InputField name={numSs.name} label={numSs.label} fullWidth />
            <label>Num CNI : </label>{" "}
            <InputField name={numCni.name} label={numCni.label} fullWidth />
          </div>
          <div className="colthree">
            <label>Date De Naissance : </label>{" "}
            <InputField
              name={dateNaiss.name}
              label={dateNaiss.label}
              type="date"
              fullWidth
            />
            <label>Sexe</label>{" "}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={(event, value) => formik.setFieldValue("sexe", value)}
            >
              <FormControlLabel
                value="Homme"
                control={<Radio />}
                label="Homme"
              />
              <FormControlLabel
                value="Femme"
                control={<Radio />}
                label="Femme"
              />
            </RadioGroup>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
