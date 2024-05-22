import React from "react";
import UseUser from "../Hooks/UseUser";

export default function Informacion(){
    const {nombre,edad,correo,genero} = UseUser();

    return(
        <div>
            <h1>Informacion de Usuario</h1>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Correo: {correo}</p>
            <p>Genero: {genero}</p>
        </div>
    )
        
    
}