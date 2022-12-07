import React from "react";
import stl from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";


export default function Footer() {

    return (

        <div className={stl.footer}>

            <div className={stl.titulo}>
                <h2>Adopt.Me</h2>
                <h4>Copyright 2022 - Todos los derechos reservados</h4>
            </div>

            <div className={stl.columnas}>

            <div className={stl.columna1}>
                <h3>Compañia</h3>
                <h5>Sobre nosotros</h5>
                <h5>Inscribe tu Empresa</h5>
            </div>

            <div className={stl.columna2}>
                <h3>Comunidad</h3>
                <h5>Historias de exito</h5>
                <h5>Galeria</h5>
                <h5>Donar</h5>
                <h5>Recursos</h5>
            </div>

            <div className={stl.columna3}>
                <h3>Enlaces de ayuda</h3>
                <h5>Centros de ayuda</h5>
                <h5>Aviso de privacidad</h5>
                <h5>Politica de cookies</h5>
                <h5>Terminos y condiciones</h5>
            </div>

            <div className={stl.columna4}>
                <h3>FAQ</h3>
                <h5>Como adoptar</h5>
                <h5>Quiero reportar un animal perdido</h5>
                <h5>Quiero reportar maltrato</h5>
                <h5>Entidades de ayuda</h5>
            </div>

            </div>
            
            <div className={stl.iconos}>
                <Link to="">
                    <div className={stl.facebook}></div>
                </Link>
                <Link to="https://www.instagram.com/adoptme6909/">
                    <div className={stl.instagram}></div>
                </Link>
                <Link to="">
                    <div className={stl.twitter}></div>
                </Link>
            </div>

        </div>

    )
}