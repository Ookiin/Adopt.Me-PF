import React from "react";
import { Link, useParams } from 'react-router-dom';

export default function DetalleAdopcion () {

    const params = useParams();

    return (
        <div key={params.id}>

        </div>
    )
}