import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../BuscarMascota/DetalleMascotaPerdida.module.css";
import FloatingUI from "../Floating UI/FloatingUI";
import getDetailMascotaPerdida from "../../Actions/detailMascotaPerdida";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Toast from "light-toast";
import { IconLocation } from "../Maps/IconLocation";


export default function DetallePerro () {
    const {id} = useParams();
    // console.log(id);
    
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.animalesPerdidosDetail);

    useEffect(() => {
        dispatch(getDetailMascotaPerdida(id))               
    }, [id, dispatch])
   
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [geo, setGeo] = useState({
    lng: -61.043988,
    lat: -34.7361,
 })

const position = [geo.lat, geo.lng]

 const local = position

 function FlyMapTo() {

   const map = useMap()

   useEffect(() => {
       map.flyTo(local)
       
   }, {enableHighAccuracy: true})

   return null
}

function handleLocation() {
 setGeo({
       lat: detail.lat,
       lng: detail.lng
 })

 Toast.success("Reubicandose a la ubicacion de esta mascota", 1500, () => {});
}
   
    return (

        <div className={stl.paginaAdopcion}>
            
            <NavBar />
            <FloatingUI />
              <img className={stl.img} src={detail.imagen} alt=""></img>
              <div className={stl.cardDetalles}>      

                  <div className={stl.datosAdopcion}>

                      <div className={stl.tituloAdopcion}>Datos de la Mascota</div>
                      <div className={stl.datos2}>  

                          <div className={stl.titulos2}>Localidad: <p className={stl.details}>{detail.localidad}</p> </div>            
                          <div className={stl.titulos2}>Tamaño: <p className={stl.details}>{detail.tama}</p></div>                 
                          <div className={stl.titulos2}>Estado: <p className={stl.details}>{detail.estado}</p></div>             
                          <div className={stl.titulos2}>Descripcion: <p className={stl.details}>{detail.descripcion}</p></div>
           
                      </div>        
                  </div>

                  <div className={stl.ubicacionMascota}>

     
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <FlyMapTo />
                            <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                            

                                return (

                              <Marker
                              position={[geo.lat, geo.lng]} 
                              icon={IconLocation}> 
                              <Popup>
                                <img className={stl.imagenMarcador}src={detail.imagen} alt="" /><br></br>
                                Esta es la ubicacion<br></br> de esta mascota
                              </Popup>
                              </Marker>
                                )
                            
                        </MapContainer>
                        <button onClick={handleLocation} className={stl.verUbicacion}>Ver ubicacion de esta mascota</button>
                                

                        </div>



             </div>

        <Footer />

        </div>

    );
};