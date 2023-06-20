import React from 'react'
import './FirstScreen.css'
import eslogan from './assets/Imagenes/Slogan Gula Blanco.png'

function Show(){
    return(
        <>
            <div className='contenedor'>

                <header className='saludo'>
                    <p>Bienvenido a la primera 
                          App de pedidos de 
                            Benito Juarez
                    </p>
                </header>
                    <span className='linea'></span>
                <div className='cont-eslogan'>
                    <img src={eslogan} alt="" />
                </div>
                    <span className='linea'></span>
            </div>
        </>
    )
}

export default Show