import React from "react";
import "./CardPruebaNacho.css"


export default function CardPruebaNacho({ id, nombre , estado, imagen, tamaño, edad}) {
    // acá va tu código
    return (
        // <div className={stl.card}>
        //     <img src={imagen} className={stl.imagen} alt=""></img>
        //     <h3>Nombre: {nombre}</h3>
        //     {/* <h3>ID: {id}</h3> */}
        //     <h3>Estado: {estado}</h3>

        <div class="card">
            <div class="content">
                <div class="front">
                    <img src={imagen} className="imagen" alt="" />
                </div>
                <div class="back">
                <div>Nombre: {nombre}</div>
                <div>Estado: {estado}</div>
                <div>Tamaño: {tamaño}</div>
                <div>Edad: {edad}</div>
                </div>
            </div>
            </div>
    )
      
};