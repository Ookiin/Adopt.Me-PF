import { useEffect } from "react";
import React from "react-dom";
import { Marker } from "react-leaflet";
import { IconLocation } from "../Maps/IconLocation";
import { useDispatch, useSelector } from "react-redux";
import getLocationsPerdidos from "../../Actions/getLocationPerdidos";


export default function MarkersLost() {

  const dispatch = useDispatch()
  const gps = useSelector((state) => state.locationsPerdidos);
  console.log("gps", gps)

    // useEffect(() => {
    //   dispatch(getLocationsPerdidos())
    // }, [dispatch])


    return (
    
      <>
      {gps.map(p => {

     return (
      <Marker
      position={[p.lng, p.lat]} 
      icon={IconLocation} 
      />
     )
    })}
      </>
    )
    
  }

  