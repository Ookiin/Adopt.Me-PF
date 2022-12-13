import React from "react";
import { Link } from "react-router-dom";
import "./CardUser.css";


export default function CardUser({ id, usuario, nombre, imagen }) {

  if (!imagen) {

  return (

    <div class="cardstodas">
    <div class="cards">
    <div class="viendo">
    <div href="" class="card">
    <div class="link">
            <Link to = {`/usuarios/${id}`}>
        <img src="https://t1.ea.ltmcdn.com/es/posts/2/6/8/la_presentacion_de_un_perro_y_un_gato_adultos_21862_1_600.jpg" class="card__image" alt="Imagen no encontrada" />
            </Link>
            </div>
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__thumb" />
          <div class="card__header-text">
            <div class="card__title">{id}</div>            
            <div>{nombre}</div>
            {/* <div>{id}</div> */}
          </div>
        </div>
        <p class="card__description">Usuario: {usuario}</p>
      </div>
    </div>      
  </div>
</div>
    </div>
  );

  } else {

    return (

      <div class="cardstodas">
      <div class="cards">
       <div class="viendo">
      <div href="" class="card">
      <div class="link">
              <Link to = {`/animales/${id}`}>
        <img src={imagen} class="card__image" alt="" />
             </Link>
              </div>
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <div class="card__thumb" />
            <div class="card__header-text">
              <div class="card__title">{id}</div>            
              <div>{nombre}</div>
              {/* <div>{id}</div> */}
            </div>
          </div>
          <p class="card__description">Usuario: {usuario}</p>
        </div>
      </div>      
    </div>
  </div>
      </div>
      
    );
  }
}