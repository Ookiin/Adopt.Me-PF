import React, { useEffect, useState } from "react"
import {MapContainer, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Maps.css";
import Markers from "./Markers";
import { useDispatch } from "react-redux";

export default function MapView() {

    const dispatch = useDispatch()

    /////////////////////////////////////////////////////////// TOMA MI UBICACION ACTUAL SEGUN MI GPS ///////////////////////////////////////7

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

    /////////////////////////////////////////////////// GUARDA MI UBICACION ACTUAL EN UN ESTADO /////////////////////////////////////////////////////

    const [geo, setGeo] = useState({
        longitude: 0,
        latitude: 0,
    })
    console.log("estoy viendo el estado de geo.longitude", geo.longitude)
    console.log("estoy viendo el estado de geo.latitud", geo.latitude)

    /////////////////////////////////////////////////////////////// ACTUALIZA LA VISTA A MI UBICACION  ///////////////////////////////////////////
    
    useEffect(() => {
        if (geo.latitude.length !== 0) {
            const currentLocation = {
                lat: geo.latitude,
                lng: geo.longitude
            }
            setActualState({...actual, currentLocation})
            console.log("estoy haciendo el segundo useEffect")
        }}, [])
       
    
    //////////////////////////////////////////////////////////////////// GUARDA LA VISTA INICIAL A UN ESTADO /////////////////////////////////////77

    const [actual, setActualState] = useState({
        currentLocation: {lat: "-34.0981400", lng: "-59.0285800"},
        zoom: 13,
    })
    console.log("estoy viendo el estado de actual", actual.currentLocation)
    console.log(actual.zoom)
    
////////////////////////////////////////////////// REDIRECCIONA MI VISTA DEL MAPA A MI UBICACION POR GPS ////////////////////////////////////////////////////


    return (
    <div>
    <MapContainer center={actual.currentLocation} zoom={actual.zoom}>
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Markers />
        
    </MapContainer>
    </div>
    )
}

