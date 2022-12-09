import "./PostRespuesta.css"

export default function PostResponse({respuesta}) {

    return (
        <>
        <div className="contenedorRespuesta">

        <div className="respuesta">
            <br></br>
        <div>Comentario </div>
            <div className="textRespuesta" type="text"><div className="texto">{respuesta}</div></div>
        </div>

        </div>
        </>
    )
}