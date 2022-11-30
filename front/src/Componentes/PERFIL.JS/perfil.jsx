import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getDetalleUsuario from "../../Actions/getDetalleUsuario"
/*
import cambiarContraseña from "./CAMBIAR CONTRASEÑA"
import misPublicaciones from "./MIS PUBLICACIONES"
import misFavoritos from "./MIS FAVORITOS"
import miInformacion from "./MI INFORMACION"*/

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
            <h2>PERFIL</h2>
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
                </div>
            )}
            
        </div>
    
    )
};



// Una vez que esta logueado el usuario --> despachar una action de getusuariodetalle --> guardarlo en el estado global --> usar los datos desde el estado

// Cuando se desloguea --> despachar action para limpiar el estado global.