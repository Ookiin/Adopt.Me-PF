import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CardPruebaNacho.css"
import getmascotas from "../../Actions/getmascotas";



export default function CardPruebaNacho({nombre , estado, imagen}) {

    useSelector((state) => state.animales)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getmascotas())
    }, [dispatch])

 

   
    return (
            <div>
        <div class="card">
            <div class="content">
                <div class="front">
                    <img src={imagen} className="imagen" alt="" />
                </div>
                <div class="back">
                    <br></br>    
                <div>Nombre: {nombre}</div>
                <div>Estado: <div class="colorEstado">{estado}</div></div>
                </div>
            </div>
            </div>
            </div>
    )
      
};