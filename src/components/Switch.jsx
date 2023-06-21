import React, { useState } from "react";
import "./../styles/Switch.css";

function Switch({ onClick }) {
  let [stateClientSwitch, setStateClientSwitch] = useState(true);

  const switchState = () => {
    setStateClientSwitch(!stateClientSwitch);

  };
  
  return (
    <div className="switch-container">
      <p onClick={onClick}>Clientes</p>
      <p>|</p>
      <p>Proveedores</p>
    </div>
  );
}

export default Switch;
