import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import { useDispatch } from "react-redux"
import createLocationPerdidos from "../../Actions/createLocationPerdidos"
import { IconLocation } from "../Maps/IconLocation"
import MarkersLost from "./Marcadores"
import stl from "../MapaPerdidos/MapaPerdido.module.css";
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"


export default function MapLostPets() {

    const dispatch = useDispatch()

    const [geo, setGeo] = useState({
        lng: -61.043988,
        lat: -34.7361,
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setGeo({
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                })
            }, 
            function(error) {
                console.log(error)
            }, {
                enableHighAccuracy: true
            });
            
    }, [])


    const [draggable, setDraggable] = useState(false)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setGeo(marker.getLatLng())
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])

    const [location, setLocation] = useState({
            lat: "",
            lng: ""
    })
    console.log("viendo si guarda", location)

    function handleLocation() {
        setLocation({
                lat: geo.lng,
                lng: geo.lat
        })
       
        alert("Ubicacion Establecida. Por favor seleccione 'Guardar mi Ubicacion'")
    }

    function handleLocation2() {
        setLocation({
                lat: geo.lng,
                lng: geo.lat
        })
       
        alert("Ubicacion Guardada con exito")
    }

    function handleSubmit() {
        dispatch(createLocationPerdidos(location))
    }
    
    const position = [geo.lat, geo.lng]

    const local = position

    function FlyMapTo() {

      const map = useMap()
  
      useEffect(() => {
          map.flyTo(local)
          
      }, {enableHighAccuracy: true})
  
      return null
  }

  
    return (


        <div>
        <NavBar />
      
        <p>Por favor. Para guardar su ubicacion exitosamente<br></br>
        Primero mueva el marcador de posicion para el<br></br>
         lugar donde perdio 
        su mascota o vio una mascota perdida. <br></br>Despues seleccione "Establecer mi Ubicacion", 
        y luego "Guardar mi Ubicacion".</p>
        <p>Finalmente "Confirmar y Volver"</p>
        <div className={stl.botones}>
        <button className={stl.botonMapa2} onClick={handleLocation}>Establecer mi Ubicacion</button>
        <button className={stl.botonMapa2} onClick={handleLocation2}>Guardar mi Ubicacion</button>
        <Link to ="/homepage">
            <button className={stl.botonMapa3} type="submit" onClick={handleSubmit} >Confirmar y Volver</button>
            </Link>
            </div>

        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <FlyMapTo />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={geo}
        ref={markerRef}
        icon={IconLocation}>
        <Popup minWidth={90}>
          <div onClick={toggleDraggable}>
            {draggable
              ? 'Ya puedes arrastrarlo'
              : 'Hace "Click" aqui para arrastrarlo'}
          </div>
        </Popup>
      </Marker>

    <MarkersLost />
        
    </MapContainer>
    
    <Footer />
    </div>
 
    )
  }