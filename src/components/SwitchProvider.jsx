import React from "react";
import { useState, useContext } from "react";

const switchContext = React.createContext();
const switchToggleTrue = React.createContext();
const switchToggleFalse = React.createContext();

export const useSwitchContext = () => {
  return useContext(switchContext);
};

export const useSwitchToggleTrue = () => {
  return useContext(switchToggleTrue);
};

export const useSwitchToggleFalse = () => {
  return useContext(switchToggleFalse);
};

function SwitchProvider({ children }) {
    const [switchState, setSwitchState] = useState(true);

  const switchTrue = () => {
    setSwitchState(true);
  };
  const switchFalse = () => {
    setSwitchState(false);
  };

  return (
    <switchContext.Provider value={switchState}>
      <switchToggleTrue.Provider value={switchTrue}>
        <switchToggleFalse.Provider value={switchFalse}>
          {children}
        </switchToggleFalse.Provider>
      </switchToggleTrue.Provider>
    </switchContext.Provider>
  );
}

export default SwitchProvider;
