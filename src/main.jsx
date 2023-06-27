import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
// import Show from './primerPantalla'
//import Form from './formulary-singUp.jsx'
 import NavBar from './navbar'
// import Swich from './swich-Tusers'  hay que modificar!
import DataClientes from './dataCliente';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    {/* <Swich/> */}
    
    <DataClientes/>
    {/* <NavBar/> */}
    
    {/* <Show/> */}
     {/* <Form/>  */}
  </React.StrictMode>,
)
