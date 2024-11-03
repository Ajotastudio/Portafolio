import React from "react";
import Grid from '@mui/material/Grid';

function Info(information) {
    return (
        <Grid container className={`info-container ${information.containerClass}`} style={{ width: '100vw', margin: 0 }} >
           
            {/* Contenedor de imagen */}
            <Grid 
                item 
                xs={12} 
                md={5} 
                order={{ xs: 2 }} // Cambia el orden a 2 en móviles, 1 en escritorio
                className="info-img-container"
            >
                <img className={`info-foto ${information.claseFoto}`} src={information.img} alt={information.alt} />
            </Grid>
            
            {/* Contenedor de texto */}
            <Grid 
                item 
                xs={12} 
                md={7} 
                order={{ xs: 1}} // Cambia el orden a 1 en móviles, 2 en escritorio
                className="text-container"
            >
                <h1>{information.title}</h1>
                <p className={information.class}>{information.text1}</p>
                <p className={information.class}>{information.text2}</p>
                <p className={information.class}>{information.text3}</p>
            </Grid>
        </Grid>
    );
}

export default Info;
