import React from "react";
/* import "./CardUser.css"; */


export default function CardUser({ id, usuario, nombre}) {

  

  return (
    <div>
      <div>Usiario: {usuario}</div>
      <div>Nombre: {nombre}</div>   
    </div>
      
    );
  }
