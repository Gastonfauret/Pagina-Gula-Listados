import { Route, Routes } from "react-router-dom";
import Clientes from "./Clientes";
import Providers from "./Providers";
import SwitchProvider from "./SwitchProvider";

function App() {
  return (
    <>
        <SwitchProvider>
        <Routes>
          <Route exact path="/" element={<Clientes />} />
          <Route exact path="/proveedores" element={<Providers />} />
        </Routes>
        </SwitchProvider>
      </>
  )
}

export default App;
