import React from "react";
import Pagina6 from "../../img/PAGINA 6.jpg";
import Pagina7 from "../../img/PAGINA 7.jpg";
import Pagina8 from "../../img/PAGINA 8.jpg";

function Carouselqh() {
  return (
    <div id="carouselExample" className="carousel slide c-qh" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-6 txt-c">
              <h2>Dirección de Arte</h2>
              <p>
                Conceptualizamos y diseñamos la estética visual 
                que define cada espacio/proyecto. <br/><br/>
                Seleccionamos cuidadosamente el color, la forma y la textura para crear espacios/escenarios mágicos que cuenten historias. <br/><br/>
                “La <b>Dirección de Arte</b> no es solo un aspecto del diseño; es la esencia misma que transforma un simple entorno en un ambiente donde la mágia, la experiencia y las historias se hacen realidad.”
              </p>
            </div>
            <div className="col-6">
              <img src={Pagina6} className="d-block q-h-foto" alt="Página 6" />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-6 txt-c">
              <h2>ESCENOGRAFÍA/TEXTURAS</h2>
              <p>
                Fabricamos, construimos y montamos espacios, decorados y props personalizados que refuercen la narrativa dentro de cada espacio/escenario.
                <br/><br/>
                Creamos texturas sobre diferentes superficies, 
                simulando diferentes acabados como cemento, 
                madera, mármol o acabados personalizados
                pintados 100% a mano.
              </p>
            </div>
            <div className="col-6 ">
              <img src={Pagina7} className="d-block q-h-foto" alt="Página 7" />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-6 txt-c">
              <h2>FONDOS/PROPS</h2>
              <p>
                Creamos fondos pintados a mano o impresos,
                props geométricos personalizados en color, forma y 
                textura.
              </p>
            </div>
            <div className="col-6">
              <img src={Pagina8} className="d-block q-h-foto" alt="Página 8" />
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carouselqh;
