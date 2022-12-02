import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getDetalleUsuario from "../../Actions/getDetalleUsuario"
import CambiarContraseña from "../SideBarPerfil/CAMBIARCONTRASEÑA.js";
import CompletarRegistro from "../SideBarPerfil/COMPLETARREGISTRO";
import MiInformacion from "../SideBarPerfil/MIINFORMACION.js";
import MisFavoritos from "../SideBarPerfil/MISFAVORITOS";
import MisPublicaciones from "../SideBarPerfil/MISPUBLICACIONES";
import Inicio from "../SideBarPerfil/INICIO";
import css from "../Perfil/perfil.module.css"


export default function Perfil() {
    const { user, isAuthenticated } = useAuth0()
    const { logout } = useAuth0()
    const dispatch = useDispatch();

    const usuarioIdRaro = user.sub
    const id = usuarioIdRaro.substring(6)

    useEffect(() => {
            dispatch(getDetalleUsuario(id));
    }, [dispatch]);
    
    console.log(isAuthenticated)

    const detalleUser = useSelector((state) => state.detalleUsuario); // Estado global con los datos del usuario
    console.log(detalleUser)

    return (
        <div >
            <NavBar/>
            <div className={css.container}>
                <div className={ css.miniContainer}>
                    <div className={css.sideBar}>
                    <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                            <MiInformacion></MiInformacion>
                        </div>
                        <br />
                        <br />
                        <div>
                            <MisFavoritos></MisFavoritos>
                        </div>
                        <br />
                        <br />
                        <div>
                            <MisPublicaciones></MisPublicaciones>
                        </div>
                        <br />
                        <br />
                        <div>
                            <CambiarContraseña></CambiarContraseña>
                        </div>
                        <br />
                        <br />
                        <div>
                            <CompletarRegistro></CompletarRegistro>
                        </div>
                        <br />
                        <br />
                        <div>
                            <Inicio></Inicio>
                        </div>
                        <br />
                        <br />
                    </div>
                    <div className={css.contenido}> 
                    <br />
                        <br /><br />
                        <br /><br />
                        <br />
                        {isAuthenticated && (
                            <div>
                                <img src={detalleUser.fotoPerfil} alt={detalleUser.nombre} />
                                <h3>id: {detalleUser._id}</h3>
                                <h3>Usuario: {detalleUser.nickname}</h3>
                                <h3>Nombre: {detalleUser.nombre}</h3>
                                <h3>Telefono: {detalleUser.telefono}</h3>
                                <h3>Localidad: {detalleUser.localidad}</h3>
                                <h3>Mail: {detalleUser.mail}</h3>
                                <br></br>
                                <br></br>
                                <br></br>
                                <button onClick={() => logout()}>Cerrar sesión</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            

            
        </div>
    
    )
};



// Una vez que esta logueado el usuario --> despachar una action de getusuariodetalle --> guardarlo en el estado global --> usar los datos desde el estado

// Cuando se desloguea --> despachar action para limpiar el estado global.