import React from "react";
import "../styles/Header.css";
import logo from "../assets/Logo Gula Blanco PNG.png";
import profile from "../assets/User-Milagros.png";

function Header() {
  return (
    <>
      <div className="HP-components-container">
        <div className="header-container">
          <img src={logo} alt="Logo Gula" />
          <p className="user"></p>
            <ul>
                <li>Inicio</li>
                <li>Listados</li>
                <li>Nosotros</li>
                <li>Contacto</li>
                <li>Salir</li>
            </ul>
          <div className="user-container">
            <p className="user">Bienvenida Milagros</p>
            <img
              className="user-profile"
              src={profile}
              alt="User Profile photo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
