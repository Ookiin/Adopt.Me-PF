import React from "react";
import EnAdopcion from "../PAdmChartsMascotas/EnAdopcion";
import Adoptados from "../PAdmChartsMascotas/Adoptados";
import Perdidos from "../PAdmChartsMascotas/Perdidos";
import PerdidoDog from "../PAdmChartsMascotas/PerdidoDog";
import NavBarPAdmin from "../PanelAdministrador/NavBarPAdmin"; 
import PerdidosCat from "../PAdmChartsMascotas/PerdidoCat";
import PerrosEnAdopcion from "../PAdmChartsMascotas/PerrosEnAdopcion";
import GatosEnAdopcion from "../PAdmChartsMascotas/GatosEnAdopcion";

const Mascotas = () => {
  return(
    <div>
      <div>
        <h2>INFORME GENERAL DE NUESTRAS MASCOTAS</h2>
      </div>
      <div>
        <NavBarPAdmin /> 
      </div>
      <div>
       <EnAdopcion />
      </div>
      <div>
        <GatosEnAdopcion />
      </div>
      <div>
        <PerrosEnAdopcion />
      </div>
       {/* <div>
       <Adoptados /> 
      </div>  */}
      <div>
       <Perdidos />
      </div>
      <div>
      <PerdidosCat />
      </div>
      <div>
      <PerdidoDog />
      </div>   
    </div>
  )
}

export default Mascotas;