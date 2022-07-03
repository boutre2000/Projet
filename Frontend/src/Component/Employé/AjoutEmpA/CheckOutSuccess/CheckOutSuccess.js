import React from "react";
import { Typography } from "@mui/material";

function CheckOutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Ajouté avec succès
      </Typography>
      <Typography variant="subtitle1">
        La création de l'employé faite avec succeés.
        <button>Liste des employés</button>
      </Typography>
    </React.Fragment>
  );
}

export default CheckOutSuccess;
