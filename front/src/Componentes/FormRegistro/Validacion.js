import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import getDetalleUsuarioSinValidar from "../../Actions/getDetalleUsuarioSinValidar";
import postUsuario from "../../Actions/postUsuario";
import Toast from "light-toast";


export default function Validacion() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.detalleUsuarioSinValidar); // (o el estado global que usemos para guardar todos los usuarios)

  useEffect(() => {
    dispatch(getDetalleUsuarioSinValidar(id));
  }, [dispatch]);


  function onClick(e) {
    e.preventDefault();
    dispatch(postUsuario(user));
    Toast.success("Validacion exitosa. Ya puedes loguearte", 1500, () => {
      navigate("/prueba")
     });
  }

  return (
    <div>
      <h1>Registro exitoso, por favor haz click en el boton de abajo para que te enviemos un mail de verificacion</h1>

      <button onClick={onClick}>Validar</button>
  
    </div>
  );
}
