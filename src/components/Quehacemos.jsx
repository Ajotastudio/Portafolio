import React from "react";
import { Grid } from "@mui/material";
import Carouselqh from "./templates/Carouselqh";

function Quehacemos() {
  return (
    <Grid container className="que-hacemos-container">
      <Grid item xs={12}>
        <h1 className="titles">¿Qué hacemos?</h1>
      </Grid>
      <Grid item xs={12}>
            <Carouselqh/>
      </Grid>
    </Grid>
  );
}

export default Quehacemos;
