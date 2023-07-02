import React from "react";
import Button from "@mui/material/Button";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "../styles/modd.css";

function Modd() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AiFillPlusCircle className="add-button" onClick={handleOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modal</DialogTitle>
        <DialogContent>
          <p>Contenido del modal</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Modd;
