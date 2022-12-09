import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import stl from "./MisMascotas.module.css"
import CardGato from '../Card/CardGato';
import getgato from "../../Actions/getgatos";
import { useAuth0 } from "@auth0/auth0-react";
import getperro from "../../Actions/getperros";
import getmascotas from "../../Actions/getmascotas";
import getDetalleUsuario from "../../Actions/getDetalleUsuario";



export default function MisMascotas() {
    
    const dispatch = useDispatch();
    const gatos = useSelector((state)=>state.gatos);
    const { user, isAuthenticated } = useAuth0()
 
    const gatoId = [];
    for (let i = 0; i < gatos.length; i++){
        gatoId.push(gatos[i])
    }
    // const mapeo = gatoId.map(id =>id.pichina)
    // console.log(mapeo);
    console.log(gatoId);
    
    let usuarioIdRaro = ""
    let id = ""
    if (isAuthenticated) {
        if (user.sub.startsWith("google")) {
            usuarioIdRaro = user.sub
            id = usuarioIdRaro.substring(14)
        }
        else {
            usuarioIdRaro = user.sub
            id = usuarioIdRaro.substring(6)
        }
    }   

    const mapeo = id? gatos.filter(({pichina}) => pichina === id): gatos.filter(({pichina}) => pichina === usuarioIdRaro)
    console.log(mapeo, 'SOY MAPEO');
    
    console.log(id, 'soy userId');    
    
    useEffect(() => {
        dispatch(getDetalleUsuario());
        dispatch(getDetalleUsuario());
        dispatch(getgato());
    }, [dispatch]);
//     useEffect(() => {
//         dispatch(getDetalleUsuario(id));
// }, [id, dispatch]);

    
   return(
    
    <div className={stl.cartel}>


            {mapeo && mapeo.map(p =>{

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

