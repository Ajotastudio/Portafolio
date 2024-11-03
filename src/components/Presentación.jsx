import React from "react";
import Info from "./templates/Info";
import Fotodiego from "../img/FOTO DIEGO.jpg"
import Fotoandre from "../img/FOTO ANDREA.jpg"
import Fotoquienes from "../img/FOTO QUIENES SOMOS.jpg"
import Grid from '@mui/material/Grid';


function Presentación () {
    return(
        <div >
            
             <Info
                claseFoto="p-foto"
                containerClass="quines-somos-container quienes"
                title="Quienes somos"
                class= "presentacion-p"
                text1="Somos AJOTA STUDIO, creemos que cada idea tiene el potencial de convertirse en algo MÁGICO."
                text2= "Escuchamos la visión de nuestros clientes y combinamos creatividad, conocimiento, colores , formas y texturas para dar vida a espacios/escenarios  que cuenten historias y generen experiencias visuales únicas. "
                img={Fotoquienes}
                alt="FOTO QUIENES SOMOS"
            />
            <Grid className="info-container quines-somos-container andi" container item xs={12} md={12} >
                <Grid container item xs={12} md={12} >
                    <Grid className="text-p-container"item xs={12} md={6} >
                        <p className="presentacion-p-ad">HELLO!, Soy Andrea! Diseñadora de Espacios/Escenario, Fotógrafa y Docente. <br /><br /> Soy la creadora de Ajota Studio y aquí hago Dirección de arte, escenografías, pinto, creo texturas, hablo con ustedes todos los días y de todo un poquito…</p>
                    </Grid>
                    <Grid className="image-container" item xs={12} md={6} >
                        <img className="presentacion-foto" src={Fotoandre} alt="Foto Andrea" />
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={12}>
                    <Grid className="image-container" item xs={12} md={6} >
                        <img className="presentacion-foto" src={Fotodiego} alt="Foto Diego" />
                    </Grid>
                    <Grid className="text-p-container" item xs={12} md={6} >
                        <p className="presentacion-p-ad">HELLO! Soy Diego! Diseñador industrial, especialista en gerencia de mercadeo, Docente de diseño. <br /><br /> En Ajota Studio hago las planimetrías y renders de tus proyectos , diseños estructurales, búsqueda y exploración de materiales para la fabricación de espacios y/o productos. </p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
       
    )
}

export default Presentación;