import React from "react";
import { Link } from "react-router-dom";


export default function CardFavoritos({nombre, favoritos}) {

    return (

        <div>
            <Link to ={`/comentario/${favoritos}`}>  
            <div>{nombre}</div>
            </Link>
        </div>
    )
}