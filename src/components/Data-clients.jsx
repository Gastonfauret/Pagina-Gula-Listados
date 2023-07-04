import { useState, useEffect, useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Dialog } from "@mui/material";
import requestError from "../assets/error.png";
import Modd from "./Modd";
import "../styles/data-clients.css";

function DataClients() {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);
  const [reload, setReload] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const templateUser = {
    lastName: "",
    name: "",
    dni: "",
    address: "",
    birthdate: "",
    phone: "",
  };

  const [currentUser, setCurrentUser] = useState(templateUser);

  useEffect(() => {
    getUsers();
  }, [reload]);

  const selectUser = (user) => {
    setCurrentUser(user);
    handleOpen();
  };

  const handleChange = (e) => {
    setCurrentUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const deleteUser = (user) => {
    fetch(`https://649115f02f2c7ee6c2c7b868.mockapi.io/clients/${user}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) console.error("Request error" + response.status);
        setReload(reload + 1);
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  const getUsers = () => {
    fetch("https://649115f02f2c7ee6c2c7b868.mockapi.io/clients")
      .then((response) => {
        if (!response.ok) throw new Error("Request error");
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch(() => setErr(true));
  };

  if (err)
    return (
      <>
        <div className="request-error-container">
          <img src={requestError} className="fix-img-error" />
        </div>
      </>
    );

  return (
    <>
      <div className="add-button-container">
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
                  <AiOutlineEdit
                    className="user-icons"
                    onClick={() => selectUser(user)}
                  />
                  {/* Modal para editar cada usuario */}
                  <Dialog
                    open={open}
                    onSubmit={handleSubmit}
                    onClose={handleClose}
                    className="modal"
                  >
                    <form action="" >
                      <label htmlFor="lastName">Apellido </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={currentUser.lastName}
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Nombre </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={currentUser.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="dni">Dni </label>
                      <input
                        type="text"
                        name="dni"
                        id="dni"
                        required
                        value={currentUser.dni}
                        onChange={handleChange}
                      />
                      <label htmlFor="address">Direccion </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        required
                        value={currentUser.address}
                        onChange={handleChange}
                      />
                      <label htmlFor="birthdate">Fecha de nacimiento </label>
                      <input
                        type="text"
                        name="birthdate"
                        id="birthdate"
                        required
                        value={currentUser.birthdate}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone">Telefono </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        value={currentUser.phone}
                        onChange={handleChange}
                      />
                      <div className="modal-button__container">
                        <input type="submit" value="Editar" />
                      </div>
                    </form>
                  </Dialog>
                </td>
                <td>
                  <AiOutlineDelete
                    className="user-icons"
                    onClick={() => deleteUser(user.id)}
                  />
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
