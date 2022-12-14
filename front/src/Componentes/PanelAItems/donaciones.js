import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPAdmin from "../PanelAdministrador/NavBarPAdmin";
import getpagos from "../../Actions/getpaypal";

export default function Donaciones() {

  const donaciones = useSelector((state) => state.paypal)
  console.log("total", donaciones)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getpagos())
  }, [dispatch])


// const total = donaciones.map(({ donacion }) => donacion)

  return(

    <div>
        <NavBarPAdmin />
        <div>Total de donaciones: {}</div>
    </div>
  )
}

