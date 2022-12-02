import { useEffect } from "react";
import React from "react-dom";
import { Marker } from "react-leaflet";
import { IconLocation } from "../Maps/IconLocation";
import { useDispatch, useSelector } from "react-redux";
import getLocations from "../../Actions/getLocation"
// import packageInfo from '../Maps/data.json';


export default function Markers() {

  const dispatch = useDispatch()
  const gps = useSelector((state) => state.locations);
  console.log("gps", gps)

    useEffect(() => {
      dispatch(getLocations())
    }, [dispatch])


    return (
    
      <>
      {gps.map(p => {

     return (
      <Marker
      position={[p.longitude, p.latitude]} 
      icon={IconLocation} 
      />
     )
    })}
      </>
    )
    
  }


