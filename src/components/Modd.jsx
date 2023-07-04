import React from "react";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import ClientsForm from "./clients-form";
import "../styles/modd.css";

function Modd() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AiFillPlusCircle className="add-button" onClick={handleOpen} />

      <Dialog open={open} onClose={handleClose} className="modal">
        <ClientsForm />
      </Dialog>
    </>
  );
}

export default Modd;
