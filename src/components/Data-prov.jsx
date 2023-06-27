import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import "../styles/data-prov.css"
import AddButton from "./Add-button";
import requestError from "../assets/error.png";

function DataProv() {
  const [providers, setProviders] = useState([]);
  const [err, setErr] = useState(false);

  function getProviders() {
    fetch("https://649115f02f2c7ee6c2c7b868.mockapi.io/providers")
      .then((response) => {
        if (!response.ok) throw new Error("Request error");
        return response.json();
      })
      .then((data) => setProviders(data))
      .catch(() => setErr(true));
  }

  useEffect(() => {
    getProviders();
  }, []);

  if (err)
    return (
      <div className="data-clients-container">
        <img src={requestError} />
      </div>
    );

  return (
    <>
      <table className="data-prov-container">
        <thead>
          <tr>
            <th>Comercio</th>
            <th>Propietario</th>
            <th>Dni</th>
            <th>Cbu</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Rubro</th>
            <AddButton className="add-button2"/>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider.id}>
              <td>{provider.company}</td>
              <td>{provider.owner}</td>
              <td>{provider.dni}</td>
              <td>{provider.cbu}</td>
              <td>{provider.address}</td>
              <td>{provider.phone}</td>
              <td>{provider.rubro}</td>
              <td><AiOutlineEdit className="user-icons user-icons2"/></td>
              <td><AiOutlineDelete className="user-icons user-icons2"/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DataProv;
