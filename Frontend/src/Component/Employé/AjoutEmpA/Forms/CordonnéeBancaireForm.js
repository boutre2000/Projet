import React from "react";
import { Grid } from "@mui/material";
import { InputField } from "../FormFields";
import "./cor.css";

export default function CordonnéeBancaireForm(props) {
  const {
    formField: { ccp, rib },
  } = props;
  return (
    <React.Fragment>
      <div className="postup">
        <div className="postupformcont">
          <div className="postupform">
            <div className="colone">
              <label> CCP : </label>{" "}
              <InputField name={ccp.name} label={ccp.label} fullWidth /> <br />
              <br />
              <br />
              <br />
              <label> RIB : </label>{" "}
              <InputField name={rib.name} label={rib.label} fullWidth />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
