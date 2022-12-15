import e from "connect-flash";
import React from "react";
import { useDispatch } from "react-redux";
import stl from "./CardUser.module.css"; 
import deleteUser from "../../Actions/deleteUser";

export default function CardUser({id, usuario, nombre}) {

  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(deleteUser(id)) 
      
  }

  return (
    <div className={stl.infoContein}>
      <div className={stl.infoCardUser}>Usuario: {usuario} - Nombre: {nombre}</div>
      <button className={stl.botonEliminar} onClick={handleDelete}>Eliminar este usuario</button>
    </div>
      
    );
  }
