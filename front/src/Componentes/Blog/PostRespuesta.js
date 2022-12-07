import "./PostRespuesta.css"

export default function PostResponse({respuesta}) {

    return (
        <>
        <div className="contenedorRespuesta">

        <div>
        <div>Comentario </div>
            <div className="textRespuesta" type="text">{respuesta}</div>
        </div>

        </div>
        </>
    )
}