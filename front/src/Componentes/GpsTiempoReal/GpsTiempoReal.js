import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { IconLocationWalker } from './IconLocationWalker';
import stl from "./GpsTiempoReal.module.css"
import { useNavigate } from 'react-router-dom';


export default function GeolocationMap() {

  const [latitude, setLatitude] = useState(-32);
  const [longitude, setLongitude] = useState(-64);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  function FlyMapTo() {

    const map = useMap()

    useEffect(() => {
        map.flyTo(position)
        
    }, {enableHighAccuracy: true})

    return null
}

  function handleLocation() {
    navigate("/gps")
  }

  const position = [latitude, longitude]

  return (
    <div className={stl.paginaGps}>
    <NavBar />
    <div className={stl.titulo}>Aqui podras ver la ubicacion del paseador en tiempo real</div>

    <div className={stl.paseador}>
    <MapContainer center={position} zoom={16}>
      <FlyMapTo />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker 
      position={position}
      icon={IconLocationWalker}>
        <Popup>El Paseador se encuentra Aqui</Popup>
      </Marker>
    </MapContainer>
    </div>
    <button className={stl.botonActualizar} onClick={handleLocation}>Actualizar Ubicacion</button>

    <Footer />
    </div>
  );
}

