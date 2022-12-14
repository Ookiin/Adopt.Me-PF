import React from "react";
import stl from "./CardUser.module.css"; 


export default function CardUser({ usuario, nombre}) {

  

  return (
    <div className={stl.infoContein}>
      <div className={stl.infoCardUser}>Usuario: {usuario} - Nombre: {nombre}</div>
    
    </div>
      
    );
  }
