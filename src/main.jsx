import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Switch from './components/Switch.jsx'
import DataColumns from './components/Data-columns.jsx'
import AddButton from './components/Add-button.jsx'
import "./styles/main.css"
import DataClients from './components/Data-clients.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Switch />
    <div className="add-users-container">
    <DataColumns />
    <AddButton />
    </div>
    <DataClients />
  </React.StrictMode>,
)
