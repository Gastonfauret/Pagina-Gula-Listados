import React from "react";

function Modal() {

  return (
    <>
      <dialog>
        <form method="dialog">
          <label htmlFor="client-last-name">
            <input type="text" name="client-last-name" required />
          </label>
          <label htmlFor="client-name">
            <input type="text" name="client-name" required />
          </label>
          <label htmlFor="client-dni">
            <input type="text" name="client-dni" required />
          </label>
          <label htmlFor="client-address">
            <input type="text" name="client-address" required />
          </label>
          <label htmlFor="client-birthdate">
            <input type="text" name="client-birthdate" required />
          </label>
          <label htmlFor="client-phone">
            <input type="text" name="client-phone" required />
          </label>
          <input type="submit" value="Agregar" />
          <input type="reset" value="Limpiar" />
          <input type="button" value="Cancelar" />
        </form>
      </dialog>
    </>
  );
}

export default Modal;
