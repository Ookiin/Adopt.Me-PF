import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import getDetalleUsuarioSinValidar from "../../Actions/getDetalleUsuarioSinValidar";

export default function Validacion() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Crear un estado global de usuarioSinValidar
  const usuario = useSelector(
    (state) => state.detalleUsuarioSinValidar
  ); // (o el estado global que usemos para guardar todos los usuarios)

  // Despachar la action para que guarde en el estado el detalle del usuario
  useEffect(() => {
    dispatch(getDetalleUsuarioSinValidar(id));
  }, [dispatch]);

  console.log(usuario)

  const [input, setInput] = useState({
    usuario: usuario.usuario,
    contrasena: usuario.contrasena,
    nombre: usuario.nombre,
    telefono: usuario.telefono,
    mail: usuario.mail,
    nacimiento: usuario.nacimiento,
    localidad: usuario.localidad,
    fotoPerfil: usuario.fotoPerfil,
  });

  function onClick(e) {
    e.preventDefault()
    
  }

  return (
    <div>
      <h1>Por favor clickea "validar" para confirmar tu mail </h1>

      <button onClick={onClick()}>Validar</button>
    </div>
  );
}
