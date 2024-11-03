import React from "react";
import Catalogo from "./templates/Catalogo";
import Pagina9 from "../img/PAGINA 9.jpg"  

function Fondos() {
    return (
        <Catalogo
        opcion1= "Fondos Impresos"
        opcion2= "Fondos pintados a mano"
        color1="rgb(198,26,23)"
        color2="#ffe8a9"
        img1={Pagina9}
        img2={Pagina9}
        catpclass1="fondos-p-1"
        catpclass2="fondos-p-2"
        />
    )
}

export default Fondos;
