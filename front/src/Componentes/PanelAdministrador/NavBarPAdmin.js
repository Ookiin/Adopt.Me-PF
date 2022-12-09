import React from "react";
import stl from "./NavPanel.module.css";
import logo from "../PanelAdministrador/logoProvisorio.png";
import {Link} from "react-router-dom";

const NavBarPAdmin = () => {

    return(
    <div className={stl.menuCollapsed}>
       <div >
          <div ><span>PANEL DE ADMINISTRADOR</span></div>
          <div >
              <div className={stl.btnHamburger}></div>
              <div className={stl.btnHamburger}></div>
              <div className={stl.btnHamburger}></div>
          </div>
       </div>
       <div >
          <div ><img alt="logo" src={logo}/></div>
          <div ><span>ADOPT.ME</span></div>
       </div>
       <div>
          <div className={stl.items}>
            {/* <div>
            <Link to="/panel-Administrador">
                <button>INICIO</button>
            </Link>
            </div> */}
           
            <div>
            <Link to="/panel-Administrador/clientes">
                <button className={stl.botonesAdmin} >CLIENTES</button>
            </Link>
            </div>
            
            <div>
            <Link to="/panel-Administrador/mascotas">
                <button className={stl.botonesAdmin} >MASCOTAS</button>
            </Link>
            </div>
            
            <div>
            <Link to="/panel-Administrador/donaciones">
                <button className={stl.botonesAdmin} >DONACIONES</button>
            </Link>
            </div> 
            
            <div>
            <Link to="/panel-Administrador/localizaciones">
                <button className={stl.botonesAdmin} >LOCALIZACIONES</button>
            </Link>
            </div> 
            
            <div>
            <Link to="/panel-Administrador/paginas">
                <button className={stl.botonesAdmin} >PAGINAS</button>
            </Link>
            </div>
            
            <div>
            <Link to="/panel-Administrador/adminis-fyq">
               <button className={stl.botonesAdmin} >ADMINIS. F & Q</button> 
            </Link> 
            </div> 
            
            <div>
            <Link to="/homepage">
                <button className={stl.botonesAdmin} >SALIR</button>
            </Link>
            </div>

          </div>
       </div>
       
    </div>
)    
}

export default  NavBarPAdmin;