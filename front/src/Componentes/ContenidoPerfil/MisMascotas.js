import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getusers from "../../Actions/getusers";
import { useAuth0 } from "@auth0/auth0-react";
import stl from "./MisMascotas.module.css"
import CardGato from '../Card/CardGato';
import getgato from "../../Actions/getgatos";
import getperro from "../../Actions/getperros";



export default function MisMascotas() {
    
    const dispatch = useDispatch();
    const allpets = useSelector((state)=>state.gatos);
    const userID = useSelector((state)=>state.users).data;
    const detail = useSelector((state) => state.animalesdetail);
    
    const detalleUser = useSelector((state) => state.detalleUsuario); // Estado global con los datos del usuario
    console.log("Estos son los datos de detalleUser")
    // console.log(detalleUser)
    
    const detalleUserGoogle = useSelector((state) => state.detalleUsuarioGoogle)
    console.log("Estos son los datos del userGoogle")
    // console.log(detalleUserGoogle)
    
    // let id = detalleUser._id
    const userId = [];
    for (let i = 0; i < allpets.length; i++){
        userId.push(allpets[i])
    }

    
    console.log(userId, 'soy userId');
    
    
    useEffect(() => {
        dispatch(getgato());
    }, [dispatch]);
    
   return(
    
    <div className={stl.cartel}>


            {allpets && allpets.map(p =>{

                return(
                  
                        <CardGato
                        id = {p._id}
                        gato = {p.gato}
                        nombre = {p.nombre}
                        />                  
                )
            })}
            

        </div>
        )
};

