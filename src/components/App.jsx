import { Route, Routes } from "react-router-dom";
import Clientes from "./Clientes";
import Providers from "./Providers";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Clientes />} />
          <Route exact path="/proveedores" element={<Providers />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
