import React,{useState} from "react";
import DataClientes from "./dataCliente";
import './swich-Tusers.css';


function Swich(){

    const[mostrarClientes, setMostrarClientes]=useState(true)

    const handleSwichCliente=()=>{
        setMostrarClientes(true);
    };

    const handleSwichProvedores=()=>{
        setMostrarClientes(false);
    };
    return(
        <>
            <section>
                <button className={mostrarClientes ? 'active' : ''}  onClick={handleSwichCliente}><p>Clientes</p></button>
                <p>|</p>
                <button className={!mostrarClientes ? 'active' : ''} onClick={handleSwichProvedores}><p>Provedores</p></button>
            </section>

            {mostrarClientes ?(
                <getAllClientes/>//deberia cambiar aca??y poner DataCliente?
            ):(
                <getAllProvedores/>//getAllProvedores
            )} 
        </>
    )
}
export default Swich;
//fijate de poner las dos funciones aca asi no hinchan las pelotas!