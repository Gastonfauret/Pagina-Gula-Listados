import React from "react";
import "./../styles/Switch.css";
import { NavLink } from "react-router-dom";

function Switch() {
  
  return (
    <div className="switch-container">
      <p><NavLink to={"/"} style={({ isActive }) => {
        return {color : isActive ? "black" : null}
      }}>Clientes</NavLink></p>
      <p>|</p>
      <p><NavLink to={"/proveedores"} style={({ isActive }) => {
        return {color : isActive ? "black" : null}
      }}>Proveedores</NavLink></p>
    </div>
  )
}

export default Switch;
