import { Route, Routes } from "react-router-dom";
import Clientes from "./Clientes";
import Proveedores from "./Proveedores";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/clientes" element={<Clientes />} />
          <Route exact path="/proveedores" element={<Proveedores />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
