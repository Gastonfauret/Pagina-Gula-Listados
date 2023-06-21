import { useState, useEffect } from "react";
import "../styles/data-clients.css";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

function DataClients({conditional}) {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://649115f02f2c7ee6c2c7b868.mockapi.io/clients")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <>
    {conditional &&
      <table className="data-clients-container">
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{ user.lastName }</td>
              <td>{ user.name }</td>
              <td>{ user.dni }</td>
              <td>{ user.address }</td>
              <td>{ new Date(user.birthdate).toLocaleDateString('en-US')}</td>
              <td>{ user.phone }</td>
              <td><AiOutlineEdit className="user-icons"/></td>
              <td><AiOutlineDelete className="user-icons"/></td>
            </tr>
          ))}
        </tbody>
      </table>
  }
    </>
  );
}
export default DataClients;
