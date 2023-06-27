import React from 'react'
import './form.css'
import logo from '../src/assets/Imagenes/Logo Gula Blanco.png'

function Form(){
    return(
        <>
            <div className='contenedor'>
                <h3>Ingresar</h3>
                <div className='cont-input'>
                    <input type="email" name="" id="in-email" placeholder='User'/>
                    <input type="password" name="" id="in-password" placeholder='Password'/>
                </div>

                <div className='cont-logo'>
                    <img src={logo} alt="" /> 
                </div>

                <button type="submit">Registrarme</button>
            </div>
        </>
    )
}

export default Form