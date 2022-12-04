import React from "react";
// import stl from "../Card/Card.module.css";
import "./Card.css";
import { Link } from "react-router-dom";

export default function CardGato({ nombre, raza,id, gato}) {

  return (
    <div class="cardstodas">
    <div class="cards">
  <div class="viendo">
    <div href="" class="card">
      <div class="link">
            <Link to = {`/animales/${id}`} >
      <img src="https://th.bing.com/th/id/OIP.1TmhCNzC-HzF9FW8y6R7AgHaFj?pid=ImgDet&rs=1" class="card__image" alt="" />
            </Link>
            </div>
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__thumb" />
          <div class="card__header-text">
            <div class="card__title">{nombre}</div>            
            <div class="card__status">{raza}</div>
            <div>{gato}</div>
            {/* <div>{id}</div> */}
          </div>
        </div>
        
      </div>
    </div>      
  </div>
</div>
    </div>
  );
}