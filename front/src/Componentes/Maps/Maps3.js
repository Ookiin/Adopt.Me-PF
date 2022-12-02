import React, { useEffect, useState } from "react"
import {MapContainer, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Maps.css";
import Markers from "./Markers";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import stl from "../Maps/Maps.module.css";

export default function MapPets2() {

   const [geo, setGeo] = useState({
    longitude: -61.043988,
    latitude: -34.7361,
})

useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            setGeo({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            })
        }, 
        function(error) {
            console.log(error)
        }, {
            enableHighAccuracy: true
        });
    
}, [])

    const position = [geo.latitude, geo.longitude]
    
    return ( 

    <div>
       <NavBar />
        <MapContainer center={position} zoom={5}>
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

          <Markers />

        </MapContainer>

        <Link to ="/adoptcat">
        <button className={stl.botonMapa}>Volver</button>
        </Link>
        <Footer />
    </div>
    )

}