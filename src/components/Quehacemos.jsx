import React from "react";
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Incluye los estilos de Swiper
import Pagina6 from "../img/PAGINA 6.jpg";
import Pagina7 from "../img/PAGINA 7.jpg";
import Pagina8 from "../img/PAGINA 8.jpg";

// Importa los módulos que necesitas de Swiper
import { Navigation, Pagination } from 'swiper';

function Quehacemos () {
    return (
        <Grid className="qh-container">
            <h1>Que Hacemos</h1>
            {/* Slider main container */}
            <Swiper
                modules={[Navigation, Pagination]} // Usa los módulos que necesitas
                navigation
                pagination={{ clickable: true }}
                loop={true} // Si deseas que el carrusel vuelva a empezar
                className="swiper"
            >
                {/* Slides */}
                <SwiperSlide>
                    <Grid item xs={12} md={6} className="carousel-text">
                        <h2>DIRECCIÓN DE ARTE:</h2>
                        <p>
                            Conceptualizamos y diseñamos la estética visual que define cada
                            espacio/proyecto. Seleccionamos cuidadosamente el color, la forma y la
                            textura para crear espacios/escenarios mágicos que cuenten historias.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={6} className="carousel-image">
                        <img src={Pagina6} className="img-qh" alt="Pagina 6" />
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid item xs={12} md={6} className="carousel-text">
                        <h2>ESCENOGRAFÍAS/TEXTURAS:</h2>
                        <p>
                            Fabricamos, construimos y montamos espacios, decorados y props personalizados que refuercen la narrativa dentro de cada espacio/escenario. <br/><br/> Creamos texturas sobre diferentes superficies, simulando diferentes acabados como cemento, madera, mármol o acabados personalizados pintados 100% a mano.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={6} className="carousel-image">
                        <img src={Pagina7} className="img-qh" alt="Pagina 7" />
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid item xs={12} md={6} className="carousel-text">
                        <h2>FONDOS/PROPS:</h2>
                        <p>
                            Creamos fondos pintados a mano o impresos, props geométricos personalizados en color, forma y textura.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={6} className="carousel-image">
                        <img src={Pagina8} className="img-qh" alt="Pagina 8" />
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </Grid>
    )
}

export default Quehacemos;
