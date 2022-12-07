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

import getDetalleUsuarioGoogle from "../../Actions/getDetalleUsuarioGoogle";


export default function MisMascotas() {

    const detalleUser = useSelector((state) => state.detalleUsuario); // Estado global con los datos del usuario
    console.log("Estos son los datos de detalleUser")
    console.log(detalleUser)

    const detalleUserGoogle = useSelector((state) => state.detalleUsuarioGoogle)
    console.log("Estos son los datos del userGoogle")
    console.log(detalleUserGoogle)
    
    return (
        <h1> Mis Mascotas</h1>
    )
};
