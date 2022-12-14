import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import stl from "./HomePage.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getDetalleUsuario from "../../Actions/getDetalleUsuario"
import getDetalleUsuarioGoogle from "../../Actions/getDetalleUsuarioGoogle";
import LikeButton from "../Blog/Likes";

export default function HomePage() {
  const { user, isAuthenticated } = useAuth0()
  const dispatch = useDispatch()
    
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

  const detalleUserGoogle = useSelector((state) => state.detalleUsuarioGoogle) 


  return (
    <div className={stl.homepage}>
      
      <NavBar />
      
      <div className={stl.donacion}>
        <p className={stl.textoDonacion}>Realiza tu donacion</p>
        <Link to="/donation">
          <button className={stl.botonDonar}>Donar</button>
        </Link>
      </div>

      <div className={stl.titulobanner}>
  <div className={stl.spanbanner}>A</div>
  <div className={stl.spanbanner}>D</div>
  <div className={stl.spanbanner}>O</div>
  <div className={stl.spanbanner}>P</div>
  <div className={stl.spanbanner}>T</div>
  <div className={stl.spanbanner}>.</div>
  <div className={stl.spanbanner}>M</div>
  <div className={stl.spanbanner}>E</div>
  <br></br>
  <div className={stl.spanbanner}> </div>
  <div className={stl.spanbanner}>Encuentra&nbsp;<p></p></div>
    <div className={stl.spanbanner}>tu&nbsp;</div>
  <div className={stl.spanbanner}>mascota&nbsp;</div>
  <div className={stl.spanbanner}>hoy</div>
</div>

      <div className={stl.banner}></div>

      
      <div className={stl.adoptarDarEnAdopcion} >
        <div className={stl.adoptar}>
          <div className={stl.opciones}>
            <Link to="/adoptdog">
              <div className={stl.perros}></div>
            </Link>

            <Link to="/adoptcat">
              <div className={stl.gatos}></div>
            </Link>
          </div>
          <p className={stl.tituloAdoptar}>Adoptar Mascota</p>
          <p className={stl.parrafo}>
            Solo en la Ciudad de Buenos Aires, habitan más de 1 millón de perros
            y gatos. Muchos de ellos son parte de una familia y están cuidados.
            Pero muchos otros no: están perdidos, abandonados o quizá toda la
            vida vivieron en la calle. Y si bien históricamente, por razones de
            esnobismo, tendencia o costumbres, lo común era buscar perros o
            gatos de raza, hoy la historia cambió y viene ganando la pulseada la
            adopción. Se fueron realizando varios esfuerzos al respecto. Por
            ejemplo, en 2011 se creó el Programa Nacional de Tenencia
            Responsable y Sanidad de Perros y Gatos, Mascotas Argentinas, a
            través del decreto 1088. Su objetivo es el mejoramiento del estado
            sanitario y el bienestar de estos animales, así como disminuir e
            instaurar soluciones no eutanásicas para situaciones derivadas de la
            convivencia con los seres humanos
          </p>
        </div>

        <div>
          <div className={stl.darEnAdopcion}>
            <p className={stl.darTitulo}>Dar en Adopcion</p>
            <p className={stl.parrafoDarEnAdopcion}>
              Determinadas circunstancias, como problemas de salud del dueño,
              problemas económicos que impidan mantener a un perro en casa, una
              inesperada camada de cachorros, el fallecimiento del dueño o una
              convivencia complicada entre animales y personas, pueden provocar
              que no se pueda seguir atendiendo debidamente al animal y que se
              vea afectado por malos o pobres cuidados. Si piensas "no puedo
              tener más a mi perro, ¿dónde lo puedo llevar?". Ingresa para ver
              los pasos a seguir
            </p>

            <Link to="/givepet">
              <button className={stl.botonDarAdopcion}>Dar en Adopcion</button>
            </Link>
          </div>

      <div className={stl.mensajemascotas}><br></br>Adoptar es formar parte <br></br>de la solucion<br>
      </br><br></br><br></br>Muchos animales <br></br>te necesitan
      <br></br><br></br><br></br>Adopt.Me te ayuda<br></br>a cumplir ese objetivo</div>  



          <div className={stl.reportarMascota}>
            <p className={stl.reportarTitulo}>Reportar Mascota Perdida</p>
            <p className={stl.parrafoReportar}>
              Si encontraste una mascota en la calle y queres reportar que la
              tenes. Ademas si perdiste una mascota y queres ver si figura en la
              lista de mascotas encontradas entra aqui para obtener mas
              informacion
            </p>

            <Link to="/reportarmascota">
              <button className={stl.botonReportar}>Reportar Mascota</button>
            </Link>
            <Link to="/buscarmascota">
              <button className={stl.botonReportar}>Buscar Mascota</button>
            </Link>
          </div>
        </div>
            <div className={stl.banner2}></div>
        
      </div>

     

      <div className={stl.otrosServicios}>
        <div className={stl.maltrato}>
          <p>
            Si fuiste testigo de un maltrato o tenes un vecino que maltrata a su
            mascota. Ahora podes denunciarlo. Enterate como
          </p>
          <Link to="/reportarmaltrato">
            <button className={stl.botonOtrosServicios}>
              Denunciar maltrato
            </button>
          </Link>
        </div>

        <div className={stl.masInfo}>
          <p>
            Aqui podras obtener informacion sobre como cuidar a tu mascota,
            vacunas y demas informacion que podria interesarte
          </p>
          <Link to="/tepuedeinteresar">
            <button className={stl.botonOtrosServicios}>
              Te puede Interesar
            </button>
          </Link>
        </div>
      </div>
         <div>{/* BOTONSITO PARA IR AL PANEL DE ADMINIS */}
            <Link to="/panel-Administrador">
               <button className={stl.botonadmin}>
                 PANEL ADMINISTRADOR
               </button>
            </Link>
         </div>
      <Footer />
    </div>
  );
}
//
