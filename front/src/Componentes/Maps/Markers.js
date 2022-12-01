import React from "react";
import {IconLocation} from "./IconLocation"

import {Marker} from "react-leaflet"

export default function Markers() {
    return (
        <>
        <Marker position={{lat: "-34.57105858739396", lng: "-58.4088607655246"}} icon={IconLocation}/>
    </>
    )
}