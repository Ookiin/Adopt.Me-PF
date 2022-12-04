import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useNavigate} from 'react-router-dom';
import getmascotasbyid from "../../Actions/getmascotabyid";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../AdoptarMascota/DetalleMascotas.module.css";
import FloatingUI from "../Floating UI/FloatingUI";
import getDetalleUsuario from "../../Actions/getDetalleUsuario"
import { useAuth0 } from "@auth0/auth0-react";

export default function DetallePerro () {
  const { id } = useParams();
  const navigate = useNavigate()
    const params = useParams();
    const { user, isAuthenticated } = useAuth0()
    const dispatch = useDispatch();
    // console.log(id);
    const detail = useSelector((state) => state.animalesdetail);

    useEffect(() => {
        dispatch(getmascotasbyid(id))               
    }, [id, dispatch])
   
  
     useEffect(() => {
      dispatch(getDetalleUsuario(_id));
    }, [dispatch]);
  
    
  
    
    let _id = undefined
    if (user) {
    const usuarioIdRaro = user.sub
    _id = usuarioIdRaro.substring(6)
    }
    
   
    
    console.log(isAuthenticated)
  
    const detalleUser = useSelector((state) => state.detalleUsuario); // Estado global con los datos del usuario
    console.log(detalleUser)
  
    function onClick(e) {
      e.preventDefault()
      if (!user) {
        return alert("Debes iniciar sesion para poder adoptar")
      }
      if (!user || !detalleUser.usuario || !detalleUser.nombre || !detalleUser.telefono || !detalleUser.localidad || !detalleUser.nacimiento || !detalleUser.mail) {
        return alert("Debes completar el registro en tu perfil antes de adoptar")
      }
      if (user && detalleUser.usuario && detalleUser.nombre && detalleUser.telefono && detalleUser.localidad && detalleUser.nacimiento && detalleUser.mail) { 
      navigate("/contacto")
      }
  } 
  
    return (

        <div className={stl.paginaAdopcion}>
            
            <NavBar />
            <FloatingUI />
              <img className={stl.img} alt="" src={detail.imagen} />
              <div className={stl.cardDetalles}>                   
              <div className={stl.datosAdopcion}>
              <div className={stl.tituloAdopcion}>Datos de la Mascota</div>
            <div className={stl.datos2}>              
              <div className={stl.titulos2}>Nombre: <p className={stl.details}>{detail.nombre}</p></div>              
              <div className={stl.titulos2}>Raza: <p className={stl.details}>{detail.raza}</p></div>
              <div className={stl.titulos2}>Edad: <p className={stl.details}>{detail.edad}</p></div>
              <div className={stl.titulos2}>Estado: <p className={stl.details}>{detail.estado}</p></div>
              <div className={stl.titulos2}>Tamaño: <p className={stl.details}>{detail.tamaño}</p></div>
              <div className={stl.titulos2}>Peso: <p className={stl.details}>{detail.peso}</p></div>
              <div className={stl.titulos2}>Descripcion: <p className={stl.details}>{detail.descripcion}</p></div>
              <div className={stl.titulos2}>Castrado: <p className={stl.details}>{detail.castrado}</p></div>              
              <div className={stl.titulos2}>Vacunado: <p className={stl.details}>{detail.vacunado}</p></div>  
            </div>
               
              <Link to='/contacto'>
              <button className={stl.botonDarAdopcion} onClick={(e) => onClick(e)}>ADOPTAR</button>
        </Link>  
        </div> 
        </div>

        <Footer />

        </div>

    );
};