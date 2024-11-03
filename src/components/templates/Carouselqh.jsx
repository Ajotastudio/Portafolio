import React from "react";
import Grid from '@mui/material/Grid2';
import Pagina6 from "../../img/PAGINA 6.jpg";
import Pagina7 from "../../img/PAGINA 7.jpg"
import Pagina8 from "../../img/"


function Carouselqh() {
  

  return (
    <Grid id="carouselExample" className="carousel slide">
      <h1>Que Hacemos</h1>
      <Grid className="carousel-inner">
        <Grid className="carousel-item active" container spacing={2}>
          <Grid item xs={12} md={6} className="carousel-text">
            <h2>DIRECCIÓN DE ARTE:</h2>
            <p>
              Conceptualizamos y diseñamos la estética visual que define cada
              espacio/proyecto. Seleccionamos cuidadosamente el color, la forma y la
              textura para crear espacios/escenarios mágicos que cuenten historias.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className="carousel-image">
            <img src={Pagina6} className="img-qh" alt="Pagina 5" />
          </Grid>
        </Grid>
        <Grid className="carousel-item" container spacing={2}>
          <Grid item xs={12} md={6} className="carousel-text">
            <h2>ESCENOGRAFíA/TEXTURAS:</h2>
            <p>
            Fabricamos, construimos y montamos espacios, decorados y props personalizados que refuercen la narrativa dentro de cada espacio/escenario. <br/><br/> Creamos texturas sobre diferentes superficies, simulando diferentes acabados como cemento, madera, mármol o acabados personalizados pintados 100% a mano.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className="carousel-image">
            <img src={Pagina7} className="img-qh" alt="Pagina 5" />
          </Grid>
        </Grid>
        <Grid className="carousel-item" container spacing={2}>
          <Grid item xs={12} md={6} className="carousel-text">
            <h2>FONDOS/PROPS:</h2>
            <p>
            Creamos fondos pintados a mano o impresos, props geométricos personalizados en color, forma y textura.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className="carousel-image">
            <img src={Pagina8} className="img-qh" alt="Pagina 5" />
          </Grid>
        </Grid>
       
      </Grid>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </Grid>
  );
}

export default Carouselqh;
