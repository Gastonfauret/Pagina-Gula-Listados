import React, { useState } from "react";
import "./../styles/Switch.css";
import { Link } from "react-router-dom";

function Switch() {
  
  return (
    <div className="switch-container">
      <p><Link to="/clientes">Clientes</Link></p>
      <p>|</p>
      <p><Link to="/proveedores">Proveedores</Link></p>
    </div>
  );
}

export default Switch;
