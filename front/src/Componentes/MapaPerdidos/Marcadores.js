import { useEffect } from "react";
import React from "react-dom";
import { Marker, Popup } from "react-leaflet";
import { IconLocation } from "../Maps/IconLocation";
import { useDispatch, useSelector } from "react-redux";
// import getLocationsPerdidos from "../../Actions/getLocationPerdidos";
import getAnimalesPerdidos from "../../Actions/getAnimalesPerdidos";


export default function MarkersLost() {

  const dispatch = useDispatch()
  const gps = useSelector((state) => state.animalesPerdidos);
  console.log("gps", gps)

    useEffect(() => {
      dispatch(getAnimalesPerdidos())
    }, [dispatch])


    return (
    
      <>
      {gps.map(p => {

     return (
      <Marker
      position={[p.lat, p.lng]} 
      icon={IconLocation}>
        <Popup>
          estado:{p.estado}<br></br>
          imagen:<img src={p.imagen} alt=""/>
        </Popup>
      </Marker>
     )
    })}
      </>
    )
    
  }

  //

  