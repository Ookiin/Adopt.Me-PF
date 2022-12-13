import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CardPruebaNacho.css"
import getmascotas from "../../Actions/getmascotas";

import updateAnimal from "../../Actions/updateMascota";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function CardPruebaNacho({nombre , estado, imagen, tamaño, edad}) {

    useSelector((state) => state.animales)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getmascotas())
    }, [dispatch])

 

   
    return (
            <div>
            <div >Lo di en Adopcion</div>
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
            </div>
    )
      
};