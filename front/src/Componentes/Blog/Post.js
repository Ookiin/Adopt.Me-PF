import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import BotonMierda from "./Likes";
import LikeButton from "./Likes";
import { useDispatch, useSelector } from "react-redux";
import getLikes from "../../Actions/getLikes"


export default function Post({titulo, contenido, id, owner}) {

    const likies = useSelector((state) => state.likes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLikes())
    }, [])

    return (
        <div className="posted">

            
                    <LikeButton />
                  



                    <div>
                        <div>Post de : {owner}</div>
                        <br></br>
                    </div>
            
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