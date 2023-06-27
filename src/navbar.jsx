import React from "react";
import './navBar.css';
import avatar1 from '../src/assets/Imagenes/avatar-prueba.png'

function NavBar(){
    //logica para cambiar el nombre del user
    return(
        <>
            <nav className="nav-cont">
                <h3>nombre-user</h3>
                
                <div className="cont-img">
                    <img src={avatar1} alt="avatar" />
                </div>
            </nav>
        </>
    )
}
export default NavBar