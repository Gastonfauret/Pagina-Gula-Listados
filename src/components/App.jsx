import { useState } from "react";
import DataClients from "./Data-clients";
import Switch from "./Switch";
import DataColumns from "./Data-columns";
import AddButton from "./Add-button";

function App() {
  const [state, setState] = useState(true);

  const changeState = () => {
    setState(!state);
  };

//   const noDisplay = {
//     display: none
//   }

  return (
    <> 
    <div >
      <Switch onClick={changeState} />
      <div className="add-users-container">
        <DataColumns conditional={state}/>
        <AddButton />
      </div>
      <DataClients conditional={state} />
    </div>
    </>
  );
}

export default App;
