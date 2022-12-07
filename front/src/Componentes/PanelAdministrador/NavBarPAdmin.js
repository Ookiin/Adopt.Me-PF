import React from "react";
import stl from "./NavPanel.module.css";
import logo from "../PanelAdministrador/logoProvisorio.png";
import {Link} from "react-router-dom";

const NavBarPAdmin = () => {

    return(//Barra de navegacion lateral
    <div id="sidemenu" className={stl.menuCollapsed}>{/* COLLAPSED */}
       <div id="header">{/* HEADER */}<br/>
          <div id="title"><span>PANEL DE ADMINISTRADOR</span></div><br/>
          <div id="menu-btn">
              <div className={stl.btnHamburger}></div>
              <div className={stl.btnHamburger}></div>
              <div className={stl.btnHamburger}></div>
          </div>
       </div>{/* FIN HEADER */}
       <div id="profile">{/* PROFILE */}
          <div id="photo"><img alt="logo" src={logo}/></div>
          <div id="name"><span>ADOPT.ME</span></div>
       </div>{/* FIN PROFILE */}
       <div id="menu-items">{/* ITEMS */}
          <div className={stl.items}>
            {/* <div>
            <Link to="/panel-Administrador">
                <button>INICIO</button>
            </Link>
            </div> */}
            <br/>
            <br/>
            <div>
            <Link to="/panel-Administrador/clientes">
                <button>CLIENTES</button>
            </Link>
            </div>
            <br/>
            <div>
            <Link to="/panel-Administrador/mascotas">
                <button>MASCOTAS</button>
            </Link>
            </div>
            <br/>
            <div>
            <Link to="/panel-Administrador/donaciones">
                <button>DONACIONES</button>
            </Link>
            </div> 
            <br/>
            <div>
            <Link to="/panel-Administrador/localizaciones">
                <button>LOCALIZACIONES</button>
            </Link>
            </div> 
            <br/>
            <div>
            <Link to="/panel-Administrador/paginas">
                <button>PAGINAS</button>
            </Link>
            </div>
            <br/>
            <div>
            <Link to="/panel-Administrador/adminis-fyq">
               <button>ADMINIS. F & Q</button> 
            </Link> 
            </div> 
            <br/>
            <div>
            <Link to="/homepage">
                <button>SALIR</button>
            </Link>
            </div>

          </div>
       </div>{/* ITEMS */}
       <div id="main-container">
        Hola a TODOS
       </div>
    </div>/* COLLAPSED */
)    
}

export default  NavBarPAdmin;