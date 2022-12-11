import React from "react";
import stl from "./CardPruebaNacho.module.css"

export default function CardPruebaNacho({ id, nombre , estado, imagen}) {
    // acá va tu código
    return (
        <div className={stl.card}>
            <img src={imagen} className={stl.imagen}></img>
            <h3>Nombre: {nombre}</h3>
            <h3>ID: {id}</h3>
            <h3>Estado: {estado}</h3>
        </div>
    )
      
};