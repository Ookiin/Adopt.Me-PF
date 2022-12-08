import React from "react";
import EstadoMascotas from "../PAdmChartsMascotas/EstadoMascotas";
import EnAdopcion from "../PAdmChartsMascotas/EnAdopcion";
import Adoptados from "../PAdmChartsMascotas/Adoptados";
import Perdidos from "../PAdmChartsMascotas/Perdidos";
import Buscados from "../PAdmChartsMascotas/Buscados";
import NavBarPAdmin from "../PanelAdministrador/NavBarPAdmin" 

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
       <EstadoMascotas />
      </div>
      <div>
       <EnAdopcion />
      </div>
      <div>
       <Adoptados /> 
      </div>
      <div>
       <Perdidos />
      </div>
      <div>
       <Buscados/>
      </div>   
    </div>
  )
}

export default Mascotas;