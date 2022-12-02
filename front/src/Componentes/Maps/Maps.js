import React, { useEffect, useState } from "react"
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Maps.css";
import {IconLocation} from "./IconLocation";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import createLocation from "../../Actions/createLocation";
import { useDispatch, useSelector } from "react-redux";
import Markers from "./Markers";
import getLocations from "../../Actions/getLocation";

export default function MapView() {

    const dispatch = useDispatch()

   

    /////////////////////////////////////////////////////////// TOMA MI UBICACION ACTUAL SEGUN MI GPS ///////////////////

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
            console.log("estoy haciendo el primer useEffect")
    }, [])

    ///////////////////////////////////////////////////// GUARDA LA UBICACION EN LA BASE DE DATOS //////////////////////

    const [location, setLocation] = useState({
            latitude: "",
            longitude: ""
    })

    function handleLocation() {
        setLocation({
                latitude: geo.longitude,
                longitude: geo.latitude
        })
        console.log("primer handle", location)
        alert("Ubicacion Establecida. Por favor seleccione 'Guardar mi Ubicacion'")
    }

    function handleLocation2() {
        setLocation({
                latitude: geo.longitude,
                longitude: geo.latitude
        })
        console.log("segundo handle", location)
        alert("Ubicacion Guardada con exito")
    }

    function handleSubmit() {
        dispatch(createLocation(location))
    }


    /////////////////////////////////////////////////// GUARDA MI UBICACION ACTUAL EN UN ESTADO Y RENDERIZO  ///////

    const position = [geo.latitude, geo.longitude]
    console.log("position", position)

    return (    
    <div>
        <NavBar />
      
        <p>Por favor. Para guardar su ubicacion exitosamente<br></br>
        Primero seleccione Confirmar su Ubicacion, y luego Guardar mi Ubicacion</p>
        <button onClick={handleLocation}>Confirmar su Ubicacion</button>
        <button onClick={handleLocation2}>Guardar mi Ubicacion</button>
        <Link to ="/registroMascota">
            <button type="submit" onClick={handleSubmit}>Volver</button>
            </Link>

        <MapContainer center={position} zoom={5}>
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        <Marker position={position} icon={IconLocation}>
 
           <Popup>
               Esta es mi ubicacion
          </Popup>

    </Marker>

    <Markers />
        
    </MapContainer>
    
    <Footer />
    </div>
    )
}

