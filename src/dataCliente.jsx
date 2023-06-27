import React from "react";
import { useState, useEffect } from "react";
import './dataCliente.css';
// import {AiOutlineDelete} from 'react-icons/ai'


function DataClientes({conditional}){
    const [user, setUsers]=useState([]);

    useEffect(()=>{
        getAllCliente();
    },[]);
    
    const getAllCliente = ()=>{
        fetch('https://647f9093c246f166da90eece.mockapi.io/Users')
        .then((res)=>{
            if(!res.ok)throw new Error('Error en la solicitud de datos');
            return res.json()
        })
        .then((data)=>{
            setUsers(data);
        })
        .catch((err)=>console.log(err));
    };
    return(
        <>
        <div className="cont">

            <table className="cont-data-clientes">
        
                <thead>
                    <tr className="cont-head">
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Documento</th>
                        <th>Direccion</th>
                        <th>Nacimiento</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                
                <tbody>
                    {user.map((users)=>(
                        <tr key={users.id}>
                            <td> {users.nombre} </td>
                            <td> {users.apellido} </td>
                            <td> {users.dni} </td>
                            <td> {users.direccion} </td>
                            <td> {new Date(users.fNacimiento).toLocaleDateString('en-US')} </td>
                            <td> {users.telefono} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
)
}
export default DataClientes