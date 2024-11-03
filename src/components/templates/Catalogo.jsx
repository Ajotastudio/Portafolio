import React from "react";
import Grid from '@mui/material/Grid';


function Catalogo(information) {
    return (
        <Grid className={`catalogo-container ${information.containerClass}`}>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} className="opcion1" style={{ backgroundColor: information.color1 }}>
               <a href="www.google.com">
                    <img className="catalogo-img" src={information.img1} alt={information.alt1} />
                    <p className={`catalogo-p ${information.catpclass1}`}>{information.opcion1}</p>
                </a> 
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} className="opcion2" style={{ backgroundColor: information.color2 }}>
                <a href="www.google.com">
                    <img className="catalogo-img" src={information.img2} alt={information.alt2} />
                    <p className={`catalogo-p ${information.catpclass2}`}>{information.opcion2}</p>
                </a>
            </Grid>
        </Grid>
    )
}

export default Catalogo;
