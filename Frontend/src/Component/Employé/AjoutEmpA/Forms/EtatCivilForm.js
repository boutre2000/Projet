import React from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { InputField, SelectField } from "../FormFields";
import "./Forms.css";
export const Situations = [
  {
    value: "1",
    label: "Célibataire",
  },
  {
    value: "2",
    label: "Marié",
  },
  {
    value: "3",
    label: "Divorcé",
  },
  {
    value: "3",
    label: "Veuf",
  },
];

export default function EtatCivilForm(props) {
  const {
    formField: {
      situationFamiliale,
      nomEps,
      prenomEps,
      nbrEnfant,
      Enfant,
      nomMere,
      prenomMere,
      prenomPere,
      prenomEpsAr,
      nomEpsAr,
    },
    formik,
  } = props;
  return (
    <React.Fragment>
      <div className="postup">
        <div className="postupformcont">
          <div className="postupform">
            <div className="colone">
              <SelectField
                name={situationFamiliale.name}
                label={situationFamiliale.label}
                defaultValue="Célébataire"
                data={Situations}
                fullWidth
              />
              <label> Nom Eps : </label>{" "}
              <InputField name={nomEps.name} label={nomEps.label} fullWidth />
              <label> Prenom Eps : </label>{" "}
              <InputField
                name={prenomEps.name}
                label={prenomEps.label}
                fullWidth
              />
              <br />
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  name={Enfant.name}
                  label={Enfant.label}
                  fullWidth
                  onChange={(event, value) =>
                    formik.setFieldValue("Enfant", value)
                  }
                >
                  Enfant
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Oui"
                    control={<Radio />}
                    label="Oui"
                  />
                  <FormControlLabel
                    value="Non"
                    control={<Radio />}
                    label="Non"
                  />
                </RadioGroup>
              </FormControl>{" "}
            </div>
            <label> Nombre Enfant : </label>{" "}
            <InputField
              name={nbrEnfant.name}
              label={nbrEnfant.label}
              type="number"
              fullWidth
            />
            <div className="coltwo">
              <label> Nom Mere : </label>{" "}
              <InputField name={nomMere.name} label={nomMere.label} fullWidth />
              <label> Prenom Mere : </label>{" "}
              <InputField
                name={prenomMere.name}
                label={prenomMere.label}
                fullWidth
              />
              <label> Prenom Pere : </label>{" "}
              <InputField
                name={prenomPere.name}
                label={prenomPere.label}
                fullWidth
              />
              <label> Nom Eps Arabe : </label>{" "}
              <InputField
                name={nomEpsAr.name}
                label={nomEpsAr.label}
                fullWidth
              />
              <label> Prenom Eps Arabe : </label>{" "}
              <InputField
                name={prenomEpsAr.name}
                label={prenomEpsAr.label}
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
