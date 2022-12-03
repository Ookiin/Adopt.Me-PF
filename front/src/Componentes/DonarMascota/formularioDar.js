import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import createanimal from "../../Actions/createanimal";
import "./formularioDar.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import stl from "../DonarMascota/formularioDar.module.css"
import FloatingUI from "../Floating UI/FloatingUI";
import imagenDefault from "../../Imagenes/imagenDefault.png"


 
 export default function DarEnAdopcion() {
 
 
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const usuario = useSelector((state) => state.detalleUsuario)
 // console.log(usuario._id)

 const [input, setInput] = useState({
        perro: false,
        gato: false,
        nombre: "",
        raza: "",
        edad: [],
        estado: "En adopción",
        tamaño: [],
        peso: "",
        descripcion: "",
        castrado: "",
        vacunado: "",
        desparasitado: "",
        imagen: "",
        pichina: usuario._id
      });

  // const [imagenes, setImagenes] = useState([]);
  // console.log(input.pichina)
  const [errors, setErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  
  ////////////////////////////////////////////////////// VALIDACION ///////////////////////////////////////////////////////////////

  function validation(input) {
    let errors = {};

    if (!input.nombre) {
      errors.nombre = "Tenes que ingresar un nombre";
    } else if (!/^[a-z\s]+$/i.test(input.nombre)) {
      errors.nombre = "El nombre no es válido";
    }

    if (!input.raza) {
      errors.raza = "Tenes que ingresar una raza";
    } else if (!/^[a-z\s]+$/i.test(input.nombre)) {
      errors.raza = "La raza no es válida";
    }

    if(!input.edad || input.edad === []) {
      errors.edad = "Tenes que indicar la edad"
    }

    if(!input.tamaño || input.tamaño === []) {
      errors.tamaño = "Tenes que indicar el tamaño"
    }

    if (!input.peso) {
      errors.peso = "Tenes que ingresar el peso";
    } else if (input.peso > 110) {
      errors.peso = "El peso no es valido";
    }

    if(!input.descripcion) {
      errors.descripcion = "Tenes que ingresar una descripción";
    } else if (input.descripcion.length > 800) {
      errors.descripcion = "La descripción es muy larga (Max = 800 caracteres)";
    }

    if(!input.castrado) {
      errors.castrado = "Tenes que ingresar una respuesta";
    } else if (
      input.castrado != "si" && 
      input.castrado != "SI" && 
      input.castrado != "Si" &&
      input.castrado != "sI" && 
      input.castrado != "no" &&
      input.castrado != "NO" &&
      input.castrado != "No" &&
      input.castrado != "nO"
      ) {
      errors.castrado = "Tenes que ingresar si o no";
    }

    if(!input.vacunado) {
      errors.vacunado = "Tenes que ingresar una respuesta";
    } else if (
      input.vacunado != "si" && 
      input.vacunado != "SI" && 
      input.vacunado != "Si" &&
      input.vacunado != "sI" && 
      input.vacunado != "no" &&
      input.vacunado != "NO" &&
      input.vacunado != "No" &&
      input.vacunado != "nO"
      ) {
      errors.vacunado = "Tenes que ingresar si o no";
    }

    if(!input.desparasitado) {
      errors.desparasitado = "Tenes que ingresar una respuesta";
    } else if (
      input.desparasitado != "si" && 
      input.desparasitado != "SI" && 
      input.desparasitado != "Si" &&
      input.desparasitado != "sI" && 
      input.desparasitado != "no" &&
      input.desparasitado != "NO" &&
      input.desparasitado != "No" &&
      input.desparasitado != "nO"
      ) {
      errors.desparasitado = "Tenes que ingresar si o no";
    }

    if (Object.keys(errors).length === 0) {
      setisSubmit(true);
    }

    return errors;
  }

  
  /////////////////////////// SUBMIT /////////////////////////////////////////////////////////////////////
  function handleSubmit(e){
    e.preventDefault();

    //Si no hay errores, el isSubmit esta en true
    if (isSubmit === true) {

      dispatch(createanimal(input));
      setInput({
        perro: false,
        gato: false,
        nombre: "",
        raza: "",
        edad: [],
        estado: "En adopción",
        tamaño: [],
        peso: "",
        descripcion: "",
        castrado: "",
        vacunado: "",
        desparasitado: "",
        imagen: "",
        pichina: ""
      });
      navigate("/homepage")
      alert("Mascota publicada correctamente");
    } else {
      alert("No se pudo completar el registro, revise los campos");
    }
  }

 /////////////////////////// EXTRAYENDO URL DE CLAUDINARY /////////////////////////////////////////////////////////////////////

//  const img = []
//  for (let i = 0; i < imagenes.length; i++) {
//     img.push(imagenes[i])
//  }

//  let imgUrl = img.map(({ url }) => url)

//  let urlImagen = imgUrl.toString();

//   function handleImagen() {
//     setInput({
//       ...input,
//       imagen: urlImagen
//     })
//   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7

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

  function handleEdad(e) {
    if (input.edad.length === 0)
      setInput({
        ...input,
        edad: [...input.edad, e.target.value]
      })
   } 

   function handleTamaño(e) {
    if (input.tamaño.length === 0)
    setInput({
      ...input,
      tamaño: [...input.tamaño, e.target.value]
    })
 } 

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  
 /////////////////////// HANDLE DE GATO ////////////////////////////////////77
 
  function handleCheck() {  
    setIsChecked(!isChecked)
    } 

    function handleGato(e) {
      if(e.target.checked === !isChecked) { 
        setInput({
          ...input,
          [e.target.name]: e.target.checked
       })
  } else {
      setInput({
      ...input,
      [e.target.name]: false
     })
  }}

  ///////////////////////////// HANDLE DE PERRO ///////////////////////////////////////////7

    function handleCheck2() {     
        setIsChecked2(!isChecked2)
      }

      function handlePerro(e) {
        if(e.target.checked === !isChecked2) { 
        setInput({
         ...input,
        [e.target.name]: e.target.checked
       })
    } else {
        setInput({
        ...input,
        [e.target.value]: false
       })
    }}


  ///////////////////////////// HANDLE DE CLOUDINARY  ///////////////////////////////////7

    function handleOpenWidget(e) {
      // console.log("Entre el handleOpenWidget");
      e.preventDefault();
      const imagen = document.querySelector("#default-photo");
      var myWidget = window.cloudinary.createUploadWidget(
          {
              cloudName: "dvw0vrnxp",
              uploadPreset: "mascotas",
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
          
      myWidget.open();
      }

  ///////////////////////////// HANDLE DELETE FOTO

  function handleDelete(f) {
    setImagenes({
      ...imagenes,
      id: imagenes.id.filter((id) => id !== f)
    });
  }


/////////////////////////////////////////////////////////// TE KAVIO EL RETURN  ///////////////////////////////////////////////////

  return (
    
  <div className={stl.formDarAdopcion}>
    <NavBar />
    <FloatingUI />

          <div className={stl.titulo}>Registra los datos de la mascota</div>
          
          <form className={stl.formularito} onSubmit={handleSubmit}>

          <div className={stl.imageContainer}>

          <div >
            <img
              src={imagenDefault}
              id="default-photo"
              alt=""
              height="150"
              width="150"
            />

            <button
              id="btn-foto"
              name="imagen"
              onClick={(e) => handleOpenWidget(e)}
              className={stl.botonFoto}
            >
              AGREGAR FOTO
            </button>
            <span></span>
            </div>
            </div>

            {/* <div className={stl.imagePreview}>
                <img src= {f.url} value={f.id} alt="foto"/>
                {imagenes.map((f) => (
                  <i className="fa fa-times close-icon" onClick={() => handleDelete(f)} value={f.id}></i>
                ))}
                </div>
                );
                })}
                <div className={stl.imagePreview}>
                  
                  </div>
                  <div>
                    <button
                    className={stl.botonFoto}
                    name="fotos"
                    onClick={handleOpenWidget}> 
                      AGREGAR FOTOS
                      </button>
                     
                      </div> */}
                  
       
       <div className={stl.gatoPerro}>
         <div className={stl.opciones2}>
                <label className={stl.titulos2}>Gato:</label>
                <input className={stl.inputs2} onChange={ (e) => { handleCheck(e); handleGato(e); }}
                type="checkbox" name="gato" checked={isChecked} value={input.gato}/>                       
            </div> 
          
            <div className={stl.opciones2}>
                <label className={stl.titulos2}>Perro:</label>
                <input className={stl.inputs2} onChange={ (e) => { handleCheck2(e); handlePerro(e); }}
                type="checkbox" name="perro" checked={isChecked2} value={input.perro}/>                        
            </div>
            </div>

              <div className={stl.opciones}>
                <label className={stl.titulos}>Nombre:</label>
                <input onChange={handleChange}
                type="text" name="nombre" value={input.nombre}/>  
                {errors.nombre && <p className={stl.error}>{errors.nombre}</p>}                      
            </div>
 
            <div className={stl.opciones}>
            <label className={stl.titulos}>Raza:</label>
                <input onChange={handleChange} 
                type="text" name="raza" value={input.raza}/> 
                {errors.raza && <p className={stl.error}>{errors.raza}</p>}          
            </div>

            <div className={stl.opciones}>                                
            <label className={stl.titulos}>Edad:</label>
            <select className={stl.edad} defaultValue="" onChange={handleEdad}>
                       <option value="" disabled hidden>Selecciona edad...</option>
                       <option>Menos de 45 dias</option>
                       <option>Mas de 45 dias</option>
                       <option>Adulto</option>
                       <option>Anciano</option>
                        </select>
                        {errors.edad && ( <p className={stl.error}>{errors.edad}</p>)}
                        </div>

            <div className={stl.opciones}>                                     
            <label className={stl.titulos}>Tamaño:</label>
            <select className={stl.tamaño} defaultValue="" onChange={handleTamaño}>
                       <option value="" disabled hidden>Seleccione tamaño...</option>
                       <option>Chico</option>
                       <option>Mediano</option>
                       <option>Grande</option>
                       </select>
                       {errors.tamaño && <p className={stl.error}>{errors.tamaño}</p>}
                       </div>
        
            <div className={stl.opciones}>
            <label className={stl.titulos}>Peso:</label>
                <input onChange={handleChange} 
                type="text" name="peso" value={input.peso}/>
                <label className={stl.titulos}> kg.</label>
                {errors.peso && <p className={stl.error}>{errors.peso}</p>}          
            </div>

            <div className={stl.opciones}>
            <label className={stl.titulos}>Descripción:</label>
            <textarea
              required
              type="text"
              name="descripcion"
              value={input.descripcion}
              onChange={(e) => handleChange(e)}
              > </textarea>
              {errors.descripcion && <p className={stl.error}>{errors.descripcion}</p>}
          </div>

            <div className={stl.opciones}>
            <label className={stl.titulos}>Esta Castrado? (Si/No):</label>
                <input onChange={handleChange}type="text" name="castrado" value={input.castrado}/>
                {errors.castrado && <p className={stl.error}>{errors.castrado}</p>}
            </div> 

            <div className={stl.opciones}>
            <label className={stl.titulos}>Esta Vacunado? (Si/No):</label>
                <input onChange={handleChange} type="text" name="vacunado"  value={input.vacunado}/>
                {errors.vacunado && <p className={stl.error}>{errors.vacunado}</p>}
            </div>  

            <div className={stl.opciones}>
            <label className={stl.titulos}>Esta desparasitado? (Si/No):</label>
                <input onChange={handleChange} type="text" name="desparasitado"  value={input.desparasitado}/>
                {errors.vacunado && <p className={stl.error}>{errors.vacunado}</p>}
            </div>  

              <div>
            <button
              className={stl.boton}
              type="submit"
              disabled={isSubmit ? false : true}
            >
              PONER EN ADOPCIÓN
            </button>

            <Link to="/homepage">
              <button className={stl.boton}>CANCELAR</button>
            </Link>
          </div>
        </form>
        <Footer />
    </div>
  )}