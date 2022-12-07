import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import stl from "../FormRegistro/FormRegistro.module.css";
import createuser from "../../Actions/createuser";
import getusers from "../../Actions/getusers";
import FloatingUI from "../Floating UI/FloatingUI";
import Toast from "light-toast";
import putUsuario from "../../Actions/putUsuario"
const bcrypt = require("bcryptjs");

export default function CambiarContraseña() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Metodo de router que me redirige a la ruta que yo le diga

  const Allusers = useSelector((state) => state.users).data; // (o el estado global que usemos para guardar todos los usuarios)
  const detalleUserGoogle = useSelector((state) => state.detalleUsuarioGoogle);
  const detalleUser = useSelector((state) => state.detalleUsuario);

  let UserGoogle = false
  if (detalleUserGoogle.nombre) {
    UserGoogle = true
  }

  let contraseñaUsuario = ""
  if (!UserGoogle) {
    contraseñaUsuario = detalleUser.contraseña
  }
  
  let id = detalleUser._id

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  const [input, setInput] = useState({
    contraseñaActual: "",
    nuevaContraseña: "",
    repitaContraseña: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(true);

  function validation(input) {
    let errors = {};
    // hay que validar que la contraseña actual sea esa.

    if (!input.contraseña) {
      errors.contraseña = "Tenes que ingresar una contraseña";
    } else if (
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.contraseña)
    ) {
      errors.contraseña =
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un número, al menos una minúscula y al menos una mayúscula.";
    }
    if (!input.repitaContraseña) {
      errors.repitaContraseña = "Tenes que repetir la contraseña";
    } else if (input.repitaContraseña !== input.nuevaContraseña) {
      errors.repitaContraseña = "Las contraseñas no coinciden";
    }
    if (input.contraseñaActual !== contraseñaUsuario) {
      errors.contraseña = "La contraseña actual ingresada no es correcta"
    }
    if (Object.keys(errors).length === 0) {
      setisSubmit(true);
    }

    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    //Si no hay errores, el isSubmit esta en true
    if (isSubmit) {
      console.log("Este es el input antes de despachar")
      console.log(input)

      dispatch(putUsuario(input , id));
      setInput({
        contraseñaActual: "",
        nuevaContraseña: "",
        repitaContraseña: "",
      });

      Toast.success("La contraseña ha sido cambiada", 1500, () => {
        navigate("/perfil");
      });
    } else {
      Toast.fail("No se ha podido actualizar la contraseña", 1500, () => {});
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })); // e.target.name seria el input que se va a estar modificando
    setErrors(
      validation({
        // voy a tomar el valor del input que se modifico y voy a ir llenando el estado
        ...input,
        [e.target.name]: [e.target.value],
      })
    );
  }

  return (
    <div>
      <h1>Cambiar contraseña</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={stl.datosRegistro} key={params.id}>
          <div>CONTRASEÑA ACTUAL: </div>
          <input
            onChange={(e) => handleChange(e)}
            name="contraseñaActual"
            value={input.contraseñaActual}
          />{" "}
        </div>
        <br></br>

        <div className={stl.datosRegistro} key={params.id}>
          <div>CONTRASEÑA NUEVA:</div>
          <input
            onChange={(e) => handleChange(e)}
            name="nuevaContraseña"
            value={input.nuevaContraseña}
          />{" "}
        </div>
        <br></br>

        <div className={stl.datosRegistro} key={params.id}>
          <div>REPITA CONTRASEÑA: </div>
          <input
            onChange={(e) => handleChange(e)}
            name="repitaContraseña"
            value={input.repitaContraseña}
          />{" "}
        </div>

        <div>
          <button
            className={stl.buttons}
            type="submit"
            disabled={isSubmit ? false : true}
          >
            CAMBIAR CONTRASEÑA
          </button>
        </div>
      </form>
    </div>
  );
}
