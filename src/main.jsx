import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import "./styles/main.css";
import Footer from "./components/Footer.jsx";
import SignOff from "./components/Sign-off.jsx";
import App from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    {/*El componente App contiene dentro el componente Switch, DataColumns, AddButton y DataClients*/}
    <App />
    {/* Boton para cerrar sesion */}
    <SignOff />
    <Footer />
  </React.StrictMode>
);
