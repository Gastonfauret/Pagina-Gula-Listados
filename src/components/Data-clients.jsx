import { useState, useEffect } from "react";
import "../styles/data-clients.css";

function DataClients() {
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
    {true &&
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
            </tr>
          ))}
        </tbody>
      </table>
  }
    </>
  );
}
export default DataClients;
