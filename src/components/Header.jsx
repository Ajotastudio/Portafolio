import React from "react";
import Logo from "../img/logo ajota_Mesa de trabajo 1.png";

function Header() {
  return (
    <header style={{ width: '100vw', overflowX: 'hidden' }}>
      <div className="logo">
        <img className="logo-icon" src={Logo} alt="Logo de Ajota" />
      </div>
      <div className="nav-head">
        <div className="full-width-nav nav-container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link">Quienes somos</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Que hacemos</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Fondos</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Props</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Proyectos</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </header>
  );
}

export default Header;
