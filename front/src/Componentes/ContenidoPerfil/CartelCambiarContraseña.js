import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import stl from "./CartelCambiarContraseña.module.css"
import createuser from "../../Actions/createuser";
import getusers from "../../Actions/getusers";
import FloatingUI from "../Floating UI/FloatingUI";
import Toast from "light-toast";
import putUsuario from "../../Actions/putUsuario"
const bcrypt = require("bcryptjs");

export default function CartelCambiarContraseña() {
  return (
    <div>
      <div className={stl.cartel}>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <h1> Debes cambiar la contraseña desde tu cuenta Google! </h1>
      </div>
    </div>
    
  );
}
 