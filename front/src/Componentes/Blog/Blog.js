import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Post from "./Post";
import "./Blog.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from 'light-toast';
import createPost from "../../Actions/createPost";
import getPosts from "../../Actions/getPosts";

export default function Blog() {

    const dispatch = useDispatch();

    /////////////////////// TRAIGO LOS POSTEOS //////////////////////////////////////////7

    const allPosts = useSelector((state) => state.posts);
    
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    ///////////////////////////// CREO LOS POSTS ////////////////////////////////////////////

    const [input, setInput] = useState({
        titulo: "",
        contenido: ""
    })

    function handleSubmit(e) {
        e.preventDefault()

        dispatch(createPost(input));
        setInput({
            titulo: "",
            contenido: ""
        })
        Toast.success("Post creado con exito", 1000, () => {})
    }

    function handleTitulo(e) {
        setInput({
            ...input,
            titulo: e.target.value
        })
    }

    function handleContenido(e) {
        setInput({
            ...input,
            contenido: e.target.value
        })
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="foro">
        <NavBar />
        
        <div className="creadorContainer">
            
        <div className="createPost">
        <div className="tituloForo">Foro Adopt.Me</div>
        <div className="post">
  
         <form onSubmit={handleSubmit}>
            
            <div className="posteo">

            <div className="tituloPost">  
            <div><br></br></div>
                <input classname="inputPost" type="text" name="titulo" value={input.titulo} onChange={handleTitulo}/>
                <div>Titulo</div>
            </div>

            <div>
                <textarea className="postContenido" type="textarea" resize="none" name="contenido" 
                value={input.contenido} onChange={handleContenido} />
                <div>Tu Consulta</div>
            </div>
            </div>

            <button className="botonPost" type="submit">Enviar</button>

        </form>
        
            </div>
         </div>
          </div>

          <div className="posteos">

            {allPosts && allPosts.map(p => {

                return (

                    <Post
                    id = {p._id} 
                    titulo = {p.titulo}
                    contenido = {p.contenido}
                    />
                 
                )
            })}
          </div>

          <Footer />
     </div>
)

}