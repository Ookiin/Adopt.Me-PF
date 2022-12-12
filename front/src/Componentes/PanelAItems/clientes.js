import React from "react";
import NavBarPAdmin from "../PanelAdministrador/NavBarPAdmin" ;
import TotalUsuarios from "../PAdmChartsClientes/TotalUsuarios";
import UserDonaMascota from "../PAdmChartsClientes/UserDonaMascota";
import UserQueAdopto from "../PAdmChartsClientes/UserQueAdopto";

const Clientes = () => {
  return(
    <div>
      <div>
        <h2>INFORME GENERAL DE NUESTRAS USUARIOS</h2>
      </div>
       <div>
        <NavBarPAdmin />
       </div>
       <div>
        <TotalUsuarios />
       </div>
      {/*  <div>
        <UserDonaMascota />
       </div>
       <div>
        <UserQueAdopto />
       </div> */}
    </div>
  )
}

export default Clientes;