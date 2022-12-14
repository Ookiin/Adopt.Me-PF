import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import getDetalleUsuarioSinValidar from "../../Actions/getDetalleUsuarioSinValidar";
import postUsuario from "../../Actions/postUsuario";


export default function Validacion() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Crear un estado global de usuarioSinValidar

  const user = useSelector((state) => state.detalleUsuarioSinValidar); // (o el estado global que usemos para guardar todos los usuarios)

  console.log("user", user)
  // Despachar la action para que guarde en el estado el detalle del usuario
  console.log('id', id)
  useEffect(() => {
    dispatch(getDetalleUsuarioSinValidar(id));
  }, [dispatch]);



  function onClick(e) {
    e.preventDefault();
    dispatch(postUsuario(user));
  }

  return (
    <div>
      <h1>Registro exitoso, por favor haz click en el boton de abajo para que te enviemos un mail de verificacion</h1>

      <button onClick={onClick}>Validar</button>
    </div>
  );
}
