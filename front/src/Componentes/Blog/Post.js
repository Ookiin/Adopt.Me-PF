import React from "react";
import "./Post.css";

export default function Post({titulo, contenido}) {


    return (
        <div className="posted">

        <div className="tituloPosted">  
            <div classname="inputPosted" type="text">{titulo}</div>
        </div>

        <div>
            <div className="postedContenido" type="textarea" resize="none">{contenido}</div>
        </div>
       
        </div>
    )

}