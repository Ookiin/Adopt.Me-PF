import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import FloatingUI from "../Floating UI/FloatingUI";
// import verify from "../../Actions/verificado"

export default function Confirmacion () {
    const params = useParams();
    // const dispatch = useDispatch();
    // const ver = useState({status: 'VERIFIED'})


    // useEffect(() => {
    //     dispatch(verify(ver));
    //   }, [dispatch]);

    
    return (

        <div key={params.id}>

            <NavBar/>
            <FloatingUI />

            <Link to='/homepage'>
            <input 
            type="checkbox" 
            id="cbox2" 
            value="checkbox"/> 
            </Link>
            <label for="cbox2">SU CUENTA HA SIDO CONFRIMADA CORRECTAMENTE</label>

            <Link to='/homepage'>
                <button>VOLVER</button>
            </Link>
            
            <Footer />

        </div>
    );
};