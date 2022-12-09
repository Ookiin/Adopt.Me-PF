import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({titulo, contenido, id}) {


    return (
        <div className="posted">

            
        <div className="tituloPosted">
            <div classname="inputPosted"type="text">{titulo}</div>
        </div>
        
        <div className="contenidoContenedor">
            <div className="postedContenido" type="textarea" resize="none">{contenido}</div>
        </div>
             
        <Link to ={`/comentario/${id}`}> 
       <button className="botonComentar">Comentar</button>
       </Link>
        </div>
    )

}