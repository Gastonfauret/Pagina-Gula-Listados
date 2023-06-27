import { AiFillPlusCircle } from "react-icons/ai";
import Modal from "./Modal";
import "../styles/Add-button.css";

function AddButton({className}) {
  return (
    <>
      <div className="button-container">
        <AiFillPlusCircle className={className} />
      </div>
    </>
  );
}

export default AddButton;