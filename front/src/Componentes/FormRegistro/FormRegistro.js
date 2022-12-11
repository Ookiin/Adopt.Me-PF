import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import stl from "../FormRegistro/FormRegistro.module.css";
import createuser from "../../Actions/createuser";
import getusers from "../../Actions/getusers";
import emailBienvenida from "../../Actions/emailBienvenida"
import FloatingUI from "../Floating UI/FloatingUI";
import userImageDefault from "../../Imagenes/userImageDefault.png";
import Toast from 'light-toast';

export default function FormRegistro() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Metodo de router que me redirige a la ruta que yo le diga
  const Allusers = useSelector((state) => state.users).data; // (o el estado global que usemos para guardar todos los usuarios)

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  const [input, setInput] = useState({
    usuario: "",
    contrasena: "",
    repitaContrasena: "",
    nombre: "",
    telefono: "",
    mail: "",
    nacimiento: "",
    localidad: "",
    fotoPerfil: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  function validation(input) {
    let errors = {};
    let noRepeatUser = Allusers.filter((u) => u.usuario === input.usuario);
    let noRepeatMail = Allusers.filter((u) => u.mail === input.mail);

    if (!input.usuario) {
      errors.usuario = "Tenes que ingresar un nombre de usuario";
    } else if (
      !/^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{1,15}$/.test(input.usuario)
    ) {
      // max 15 caracteres alfanumericos
      errors.usuario = "El nombre de usuario no es válido";
    } else if (noRepeatUser.length) {
      errors.usuario = `El nombre de usuario ${input.usuario} no está disponible`;
    }

    if (!input.contrasena) {
      errors.contrasena = "Tenes que ingresar una contraseña";
    } else if (
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.contrasena)
    ) {
      errors.contrasena =
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un número, al menos una minúscula y al menos una mayúscula.";
    }

    if (!input.repitaContrasena) {
      errors.repitaContrasena = "Tenes que repetir la contraseña";
    } else if (input.repitaContrasena !== input.contrasena) {
      errors.repitaContraseña = "Las contraseñas no coinciden";
    }

    if (!input.nombre) {
      errors.nombre = "Tenes que ingresar un nombre";
    } else if (!/^[a-z\s]+$/i.test(input.nombre)) {
      errors.nombre = "El nombre no es válido";
    }

    if (!input.telefono) {
      errors.telefono = "Tenes que ingresar un telefono";
    } else if (input.telefono.length > 15) {
      errors.telefono = "El teléfono no es válido";
    }

    if (!input.mail) {
      errors.mail = "Tenes que ingresar un e-mail";
    } else if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(input.mail)) {
      errors.mail = "El e-mail no es válido";
    } else if (noRepeatMail.length) {
      errors.mail = "Ya existe una cuenta vinculada a ese mail";
    }

    if (!input.nacimiento) {
      errors.nacimiento = "Tenes que ingresar una fecha de nacimiento";
    } else if (
      input.nacimiento.length > 10 ||
      !/^[0-9-]+$/.test(input.nacimiento)
    ) {
      errors.nacimiento = "Tenes  que ingresar una fecha válida (dd-mm-yyyy)";
    }

    if (!input.fotoPerfil || input.fotoPerfil === "") {
      setInput({
        fotoPerfil:
          "https://res.cloudinary.com/dvw0vrnxp/image/upload/v1670012585/usuarios/userImageDefault_bm6bdk.png",
      });
    }

    if (Object.keys(errors).length === 0) {
      setisSubmit(true);
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    //Si no hay errores, el isSubmit esta en true
    if (isSubmit) {
      // console.log("Se despacha el create con estos valores")
      // console.log(input)
      dispatch(createuser(input));
      dispatch(emailBienvenida(input));
      
      setInput({
        usuario: "",
        contrasena: "",
        repitaContrasena: "",
        nombre: "",
        telefono: "",
        mail: "",
        nacimiento: "",
        localidad: "",
        fotoPerfil: "",
      });
      Toast.success("Usuario creado correctamente", 1500, () => {
        navigate("/prueba");
      });    
    } else {
      Toast.fail("No se pudo completar el registro, revise los campos", 1500, () => {});
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

  // function handleSend(e) {
  //   e.preventDefault();
  //   setSent(true);
  //   dispatch(emailConfirmacion(input.mail));
  //   console.log('input.mail', input.mail)
  // }

  function handleOpenWidget(e) {
    // console.log("Entre el handleOpenWidget");
    e.preventDefault();
    const imagen = document.querySelector("#user-photo");
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dvw0vrnxp",
        uploadPreset: "usuarios",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // console.log('Done! Here is the image info: ', result.info);
          imagen.src = result.info.secure_url;
          setInput((prev) => ({
            ...prev,
            [e.target.name]: result.info.secure_url,
          }));
        }
      }
    );
    // console.log("abro el widget");
    myWidget.open();
  }

  return (
    <div className={stl.registro} key={params.id}>
      <NavBar />
      <FloatingUI />

      <div className={stl.errores}>
        {errors.usuario && <p className={stl.error}>{errors.usuario}</p>}
        {errors.contraseña && <p className={stl.error}>{errors.contrasena}</p>}
        {errors.repitaContraseña && (
          <p className={stl.error}>{errors.repitaContraseña}</p>
        )}
        {errors.nombre && <p className={stl.error}>{errors.nombre}</p>}
        {errors.telefono && <p className={stl.error}>{errors.telefono}</p>}
        {errors.mail && <p className={stl.error}>{errors.mail}</p>}
        {errors.nacimiento && <p className={stl.error}>{errors.nacimiento}</p>}
        {errors.localidad && <p className={stl.error}>{errors.localidad}</p>}
      </div>

      <div className={stl.form} key={params.id}>
        <div className={stl.titulomayor}>Registro de Usuario</div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action="/usuarios/signup"
          method="POST"
        >
          <div className={stl.datosRegistro} key={params.id}>
            <div>NOMBRE DE USUARIO: </div>
            <input
              className={stl.inputs}
              type="text"
              pipo
              name="usuario"
              value={input.usuario}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
          </div>

          <div className={stl.datosRegistro} key={params.id}>
            <div>CONTRASEÑA: </div>
            <input
              className={stl.inputs}
              required
              type="password"
              name="contrasena"
              value={input.contrasena}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
          </div>

          <div className={stl.datosRegistro} key={params.id}>
            <div>REPITA CONTRASEÑA: </div>
            <input
              className={stl.inputs}
              required
              type="password"
              name="repitaContrasena"
              value={input.repitaContrasena}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
          </div>

          <div className={stl.datosRegistro} key={params.id}>
            <div>NOMBRE Y APELLIDO / REFUGIO: </div>
            <input
              className={stl.inputs}
              type="text"
              required
              name="nombre"
              value={input.nombre}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
          </div>

          <div className={stl.datosRegistro} key={params.id}>
            <div>TELÉFONO DE CONTACTO: </div>
            <input
              className={stl.inputs}
              type="text"
              required
              name="telefono"
              value={input.telefono}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
          </div>

          <div className={stl.datosRegistro} key={params.id}>
            <div>E-MAIL: </div>
            <input
              className={stl.inputs}
              type="email"
              required
              name="mail"
              value={input.mail}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
          </div>

          <div className={stl.datosRegistro} key={params.id}>
            <div>FECHA DE NACIMIENTO: </div>
            <input
              className={stl.inputs}
              required
              type="date"
              name="nacimiento"
              value={input.nacimiento}
              placeholder="dd-mm-yyyy"
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
          </div>

          <div className={stl.datosRegistro} key={params.id}>
            <div>LOCALIDAD: </div>
            <input
              className={stl.inputs}
              type="text"
              required
              name="localidad"
              value={input.localidad}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
          </div>

          <div className={stl.datosRegistro} key={params.id}>
            <img
              src={userImageDefault}
              id="user-photo"
              alt=""
              height="150"
              width="150"
            />

            <button
              id="btn-foto"
              name="fotoPerfil"
              onClick={(e) => handleOpenWidget(e)}
              className={stl.botonImagen}
            >
              SELECCIONE FOTO DE PERFIL
            </button>
            <span></span>
            {errors.fotoPerfil && <p>{errors.fotoPerfil}</p>}
          </div>

          <div>
            <button
              className={stl.buttons}
              type="submit"
              disabled={isSubmit ? false : true}
            >
              ACEPTAR
            </button>

            <Link to="/homepage">
              <button className={stl.buttons}>CANCELAR</button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
  
}
