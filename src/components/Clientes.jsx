import React from "react";
import Header from "./Header";
import Switch from "./Switch";
import DataClients from "./Data-clients";
import SignOff from "./Sign-off";
import Footer from "./Footer";

function Clientes() {
  return (
    <>
      <Header />
      <Switch />
        <DataClients />
        <SignOff />
        <Footer />
    </>
  )
}

export default Clientes;
