import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";


export default function CardFavoritos({nombre, id}) {

    return (

        <div>
            <Link to ={`/comentario/${id}`}>  
            <div>{nombre}</div>
            </Link>
        </div>
    )
}