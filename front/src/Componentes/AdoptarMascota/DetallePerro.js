import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import getmascotasbyid from "../../Actions/getmascotabyid";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../AdoptarMascota/DetalleMascotas.module.css";
import FloatingUI from "../Floating UI/FloatingUI";
import getDetalleUsuario from "../../Actions/getDetalleUsuario";
import { useAuth0 } from "@auth0/auth0-react";
import Toast from "light-toast";
import getusers from "../../Actions/getusers";
import emailInfoAdoptante from "../../Actions/emailInfoAdoptante"

export default function DetallePerro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.animalesdetail);
  const detalleUserGoogle = useSelector((state) => state.detalleUsuarioGoogle);
  const petOwner = useSelector((state) => state.users)

  
 

  useEffect(() => {
    dispatch(getusers())
  }, []) 

  useEffect(() => {
    dispatch(getmascotasbyid(id));
  }, [id, dispatch]);

  let _id = undefined;
  if (user) {
    const usuarioIdRaro = user.sub;
    _id = usuarioIdRaro.substring(6);
  }

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////

 const algo = detail
 console.log("algo", algo)

 const algo2 = petOwner
 console.log("users", algo2)

//  const ownerPet = algo2.filter(({ _id }) => _id === algo.pichina)

//  console.log("ownerPet", ownerPet)


 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    dispatch(getDetalleUsuario(_id));
  }, [_id, dispatch]);

  const detalleUser = useSelector((state) => state.detalleUsuario); 

  function onClick(e) {
    e.preventDefault();
    if (!user) {
      return Toast.fail(
        "Debes iniciar sesion para poder adoptar",
        1500,
        () => {}
      );
    }

    if (!detalleUser.usuario && detalleUserGoogle.length == 0) {
      return Toast.fail(
        "Debes completar el registro en tu perfil antes de adoptar",
        1500,
        () => {}
      );
    }
    if ((user && detalleUser.usuario) || detalleUserGoogle.usuario) {
      dispatch(emailInfoAdoptante(petOwner.nombre, petOwner.mail, petOwner.telefono));
      return Toast.info(`Esta es la informacion del usuario que dio en \n adopcion esta mascota: \n Nombre: 
      ${petOwner.nombre} \n Telefono: ${petOwner.telefono} \n Email: ${petOwner.email}`, 10000, () => {

        navigate("/contacto");
      })
    }
  }


  return (
    <div className={stl.paginaAdopcion}>
      <NavBar />
      <FloatingUI />
      <img className={stl.img} src={detail.imagen} alt="" />
      <div className={stl.cardDetalles}>
        <div className={stl.datosAdopcion}>
          <div className={stl.tituloAdopcion}>Datos de la Mascota</div>
          <div className={stl.datos2}>
            <div className={stl.titulos2}>
              Nombre: <p className={stl.details}>{detail.nombre}</p>
            </div>
            <div className={stl.titulos2}>
              Raza: <p className={stl.details}>{detail.raza}</p>
            </div>
            <div className={stl.titulos2}>
              Edad: <p className={stl.details}>{detail.edad}</p>
            </div>
            <div className={stl.titulos2}>
              Estado: <p className={stl.details}>{detail.estado}</p>
            </div>
            <div className={stl.titulos2}>
              Tamaño: <p className={stl.details}>{detail.tama}</p>
            </div>
            <div className={stl.titulos2}>
              Peso: <p className={stl.details}>{detail.peso}</p>
            </div>
            <div className={stl.titulos2}>
              Descripcion: <p className={stl.details}>{detail.descripcion}</p>
            </div>
            <div className={stl.titulos2}>
              Castrado: <p className={stl.details}>{detail.castrado}</p>
            </div>
            <div className={stl.titulos2}>
              Vacunado: <p className={stl.details}>{detail.vacunado}</p>
            </div>
          </div>

          <Link to="/contacto">
            <button
              className={stl.botonDarAdopcion}
              onClick={(e) => onClick(e)}
            >
              ADOPTAR
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
