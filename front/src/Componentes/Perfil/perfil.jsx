import React , { useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import getDetalleUsuario from "../../Actions/getDetalleUsuario"
import css from "../Perfil/perfil.module.css"
import { Link } from "react-router-dom";
import MiInformacion from "../ContenidoPerfil/MiInformacion";
import MisFavoritos from "../ContenidoPerfil/MisFavoritos";
import CambiarContraseña from "../ContenidoPerfil/CambiarContraseña";
import CompletarRegistro from "../ContenidoPerfil/CompletarRegistro";
import MisPublicaciones from "../ContenidoPerfil/MisPublicaciones";
import getDetalleUsuarioGoogle from "../../Actions/getDetalleUsuarioGoogle";


export default function Perfil() {
    const { logout } = useAuth0()
    const dispatch = useDispatch();
    const [Render, setRender] = useState(0); 

    const { user, isAuthenticated } = useAuth0()
    console.log(isAuthenticated)
    console.log(user)

    
    let usuarioIdRaro = ""
    let id = ""
    if (isAuthenticated) {
        if (user.sub.startsWith("google")) {
            usuarioIdRaro = user.sub
            id = usuarioIdRaro.substring(14)
        }
        else {
            usuarioIdRaro = user.sub
            id = usuarioIdRaro.substring(6)
        }
    }
    

    useEffect(() => {
        dispatch(getDetalleUsuarioGoogle(id));
    }, [id, dispatch]);

    useEffect(() => {
            dispatch(getDetalleUsuario(id));
    }, [id, dispatch]);
    
    

    const detalleUser = useSelector((state) => state.detalleUsuario); // Estado global con los datos del usuario
    console.log("Estos son los datos de detalleUser")
    console.log(detalleUser)

    const detalleUserGoogle = useSelector((state) => state.detalleUsuarioGoogle)
    console.log("Estos son los datos del userGoogle")
    console.log(detalleUserGoogle)

    /////////////////// ON CLICKS ////////////////////////

    
    
    function onClick1(e) {
        e.preventDefault()
        setRender(1)
    } 
    
    function onClick2(e) {
        e.preventDefault()
        setRender(2)
    } 
    function onClick3(e) {
        e.preventDefault()
        setRender(3)
    } 
    function onClick4(e) {
        e.preventDefault()
        setRender(4)
    } 
    function onClick5(e) {
        e.preventDefault()
        setRender(5)
    } 
    
    return (
        <div >
            <NavBar/>
            <div className={css.container}>
                <div className={css.miniContainer}>
                    
                    <div className={css.sideBar}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                            <button onClick={(e) => onClick1(e)} className={css.boton}>Mi informacion</button>
                        </div>
                        <br />
                        <br />
                        <div>
                            <button onClick={(e) => onClick2(e)} className={css.boton}>Mis favoritos</button>
                        </div>
                        <br />
                        <br />
                        <div>
                            <button onClick={(e) => onClick3(e)} className={css.boton}>Mis publicaciones</button>
                        </div>
                        <br />
                        <br />
                        <div>
                            <button onClick={(e) => onClick4(e)} className={css.boton}>Cambiar contraseña</button>
                        </div>
                        <br />
                        <br />
                        <div>
                            <button onClick={(e) => onClick5(e)} className={css.boton}>Completar registro</button>
                        </div>
                        <br />
                        <br />
                        <div>
                            <Link to="/homepage">
                                <button className={css.boton}>Inicio</button>
                            </Link>
                        </div>
                        <br />
                        <br />
                    </div>

                    <div className={css.contenido}> 
                        <br />
                        <br /><br />
                        <br /><br />
                        <br />
                        <div>
                        {Render === 1 && detalleUser.usuario ? <MiInformacion datos={detalleUser} /> : null}
                        {Render === 1 && detalleUserGoogle.usuario ? <MiInformacion datos={detalleUserGoogle} /> : null}
                        {Render === 1 && detalleUserGoogle && !detalleUserGoogle.usuario ? <h1>Por favor, completa el registro para ver tus datos</h1> : null}
                        
                        {Render === 2 ? <MisFavoritos></MisFavoritos>: null }
                        {Render === 3 ? <MisPublicaciones></MisPublicaciones> : null}
                        {Render === 4 ? <CambiarContraseña></CambiarContraseña> : null}
                            
                        {Render === 5 && detalleUser.usuario ? <h1>Tu registro ya fue completado!! </h1> : null}
                        {Render === 5 && detalleUserGoogle.usuario ? <h1>Tu registro ya fue completado! </h1> : null}
                        {Render === 5 && detalleUserGoogle && !detalleUserGoogle.usuario ? <CompletarRegistro></CompletarRegistro> : null}
                        </div>
                        
                        
                    </div>
                </div>
            </div>

            

            
        </div>
    
    )
};



// Una vez que esta logueado el usuario --> despachar una action de getusuariodetalle --> guardarlo en el estado global --> usar los datos desde el estado

// Cuando se desloguea --> despachar action para limpiar el estado global.