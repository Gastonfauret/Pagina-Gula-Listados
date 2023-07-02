import { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import requestError from "../assets/error.png";
import Modd from "./Modd";
import "../styles/data-clients.css";

function DataClients() {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://649115f02f2c7ee6c2c7b868.mockapi.io/clients")
      .then((response) => {
        if (!response.ok) throw new Error("Request error");
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setErr(true));
  };

  if (err)
    return (
      <>
        <div className="data-clients-container">
          <img src={requestError} className="fix-img-error" />
        </div>
      </>
    );

  return (
    <>
    <div className="add-button-containter">
      <table className="data-clients-container">
        <thead>
          <tr>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Dni</th>
            <th>Direccion</th>
            <th>Fecha de nac.</th>
            <th>Telefono</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.lastName}</td>
              <td>{user.name}</td>
              <td>{user.dni}</td>
              <td>{user.address}</td>
              <td>{new Date(user.birthdate).toLocaleDateString("en-US")}</td>
              <td>{user.phone}</td>
              <td>
                <AiOutlineEdit className="user-icons" />
              </td>
              <td>
                <AiOutlineDelete className="user-icons" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modd />
      </div>
    </>
  );
}
export default DataClients;
