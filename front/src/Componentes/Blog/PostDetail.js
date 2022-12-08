import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getComentarioId from "../../Actions/getPostbyId";
import "./PostDetail.css";
import NavBar from "../NavBar/NavBar";
import PostResponse from "./PostRespuesta";
import Footer from "../Footer/Footer";
import Toast from 'light-toast';
import createRespuesta from "../../Actions/createRespuesta";
import getRespuesta from "../../Actions/getRespuesta";

export default function PostDetail() {

    const { id } = useParams()
    const dispatch = useDispatch()

    const postDetalles = useSelector((state) => state.postDetails)
   

    
    useEffect(() => {
        dispatch(getComentarioId(id))   
    }, [id, dispatch])

    const [input, setInput] = useState({
        respuesta: "",
        caquina: postDetalles._id
    })
   
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     function handleSubmit(e) {
        e.preventDefault()

        dispatch(createRespuesta(input));
       setInput({
            respuesta: "",
            caquina: postDetalles._id
        })
       
        Toast.success("Respuesta enviada con exito", 1000, () => {})
    }

     function handleRespuesta(e) {
       setInput({
            ...input,
            respuesta: e.target.value,
            caquina: postDetalles._id
        })
    }

    ///////////////////////////////////////////////////////////////////////

    const allRespuestas = useSelector((state) => state.respuestas);
    console.log("allrespuestas", allRespuestas)

    // const caquinas = []
    // for (let i  = 0; i < allRespuestas.length; i++) {
    //     caquinas.push(allRespuestas[i])
    // }

    console.log("allresuestas", allRespuestas)

    const lalala = allRespuestas.filter(({caquina}) => caquina)

    console.log("id respuesta", lalala)

    useEffect(() => {
        dispatch(getRespuesta())
    }, [dispatch])


    const algo = postDetalles._id
    console.log("algo", algo)
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (lalala === algo) {

    return (
        <>
        <NavBar />
        <div className="paginaDetalles">

             <div className="posteoDetalles">

            <div className="tituloDetalles">Titulo: <p>{postDetalles.titulo}</p></div>

             <div className="textDetalles"><div className="detallescontenido">{postDetalles.contenido}</div></div>

            </div>
            
            <div className="postResponse">
                 
                {allRespuestas && allRespuestas.map(r => {

                    return ( 
                        <PostResponse 
                        id = {r._id}
                        respuesta = {r.respuesta}
                        />

                    )
                })} 

            </div>

            
            <form className="contenedorRespuesta" onSubmit={handleSubmit}>

                <div>
                <div>Tu Comentario: </div>
                    <textarea id={postDetalles._id} className="textRespuesta" type="textarea" resize="none" name="respuesta"
                    value={input.respuesta} onChange={handleRespuesta} />
                </div>

                <button className="botonRespuesta" type="submit">Enviar</button>
                </form>
            </div>

        <Footer />
        </>
    )
            } else {
                return (
                    <>
                    <NavBar />
                    <div className="paginaDetalles">
            
                         <div className="posteoDetalles">
            
                        <div className="tituloDetalles">Titulo: <p>{postDetalles.titulo}</p></div>
            
                         <div className="textDetalles"><div className="detallescontenido">{postDetalles.contenido}</div></div>
            
                        </div>
                        
                        <div className="postResponse">
                             
                           <p>Sin comentarios</p>
            
                        </div>
            
                        
                        <form className="contenedorRespuesta" onSubmit={handleSubmit}>
            
                            <div>
                            <div>Tu Comentario: </div>
                                <textarea id={postDetalles._id} className="textRespuesta" type="textarea" resize="none" name="respuesta"
                                value={input.respuesta} onChange={handleRespuesta} />
                            </div>
            
                            <button className="botonRespuesta" type="submit">Enviar</button>
                            </form>
                        </div>
            
                    <Footer />
                    </>
                )
            }
}