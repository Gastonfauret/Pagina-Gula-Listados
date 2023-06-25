import React from "react";
import "./../styles/Data-column.css";

function DataColumns() {
  return (
    <>
      <div className="clients-data-container">
        <ul className="clients-data-columns">
          <li>Apellido</li>
          <li>Nombre</li>
          <li>Dni</li>
          <li>Direccion</li>
          <li>Fecha de nacimiento</li>
          <li>Telefono</li>
        </ul>
      </div>
    </>
  )
}

export default DataColumns;
