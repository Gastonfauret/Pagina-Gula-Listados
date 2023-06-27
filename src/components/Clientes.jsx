import React from "react";
import Header from "./Header";
import Switch from "./Switch";
import DataColumns from "./Data-columns";
import AddButton from "./Add-button";
import DataClients from "./Data-clients";
import SignOff from "./Sign-off";
import Footer from "./Footer";

function Clientes() {
  return (
    <>
      <Header />
      <Switch />
      <div className="add-users-container">
          <DataColumns />
          <AddButton className="add-button"/>
        </div>
        <DataClients />
        <SignOff />
        <Footer />
    </>
  )
}

export default Clientes;
