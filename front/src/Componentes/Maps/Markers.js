import React from "react-dom";
import { Marker } from "react-leaflet";
import { IconLocation } from "../Maps/IconLocation";
import packageInfo from '../Maps/data.json';
// import {places} from "../Maps/data.json"


export default function Markers() {
  
    const locations = packageInfo.places
    const markers = locations.map((p) => {
      return (
      <Marker position={p.geometry} icon={IconLocation} />
    )})
    return markers
  }


// const Markers = (props) => {
//   const { places } = props;
//   const markers = places.map((places, i) => {
//     <Marker key={i} position={places.geometry} icon={IconLocation} />;
//   });
//   return markers;
// };

// export default Markers