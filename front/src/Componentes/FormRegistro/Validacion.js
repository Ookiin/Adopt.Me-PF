import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import getDetalleUsuarioSinValidar from "../../Actions/getDetalleUsuarioSinValidar";
import crearUsuarioValidado from "../../Actions/crearUsuarioValidado";

export default function Validacion() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Crear un estado global de usuarioSinValidar
  const user = useSelector(
    (state) => state.detalleUsuarioSinValidar
  ); // (o el estado global que usemos para guardar todos los usuarios)

  // Despachar la action para que guarde en el estado el detalle del usuario
  console.log('id', id)
  useEffect(() => {
    dispatch(getDetalleUsuarioSinValidar(id));
  }, [dispatch]);

  console.log(user)

  const usuario = user.usuario;
  const contrasena = user.contrasena;
  const nombre = user.nombre;
  const telefono = user.telefono;
  const mail = user.mail;
  const nacimiento = user.nacimiento;
  const localidad = user.localidad;
  const fotoPerfil = user.fotoPerfil;


  const [input, setInput] = useState({
    usuario: usuario,
    contrasena: contrasena,
    nombre: nombre,
    telefono: telefono,
    mail: mail,
    nacimiento: nacimiento,
    localidad: localidad,
    fotoPerfil: fotoPerfil,
  });

  console.log('input', input)

  function onClick(e) {
    e.preventDefault();
    setInput({
      usuario: "",
      contrasena: "",
      nombre: "",
      telefono: "",
      mail: "",
      nacimiento: "",
      localidad: "",
      fotoPerfil: "",
    })
    console.log(input)
    dispatch(crearUsuarioValidado(input))
  }

  return (
    <div>
      <h1>Registro exitoso, por favor haz click en el boton de abajo para que te enviemos un mail de verificacion</h1>

      <button onClick={(e) => onClick(e)}>Validar</button>
    </div>
  );
}
