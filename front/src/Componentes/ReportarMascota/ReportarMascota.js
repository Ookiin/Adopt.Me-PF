import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import createAnimalPerdido from '../../Actions/createAnimalPerdido';
import './ReportarMascota.module.css'
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../ReportarMascota/ReportarMascota.module.css";
import FloatingUI from "../Floating UI/FloatingUI";

////////////////////////////////////////////////////// VALIDACION ///////////////////////////////////////////////////////////////

function validation(input){
    let errors = {};
    const whitespace = /\S+/;
    const validString = /^[a-z]+$/i;
    const validNumber = /^\d+$/;
 
  
   if (
     !whitespace.test(input.nombre) ||                
     !validString.test(input.nombre) ||               
     input.nombre.length < 3                          
    ) errors.nombre = "Nombre Requerido. Debe contener mas de dos caracteres y no incluir ningun simbolo o caracter especial";
                                                
                                        
   if ( 
       !validNumber.test(input.edad) ||      
       parseInt(input.edad) < 1      ||      
       parseInt(input.edad) > 20            
     ) errors.edad = "Edad is required. Must be higher than 1 and less than 20.";
                                   
                                    
     if (!input.descripcion) {
       errors.descripcion = "Tienes que agregar una descripcion informativa de la mascota";
     } else if (!/^[a-z\s]+$/i.test(input.descrpcion)) {
       errors.descripcion = "La descripcion no es válida";
     }
                                
     return errors
 }

 //////////////////////////////////////////////////// PA ADOPTAR AMEGO ////////////////////////////////////////////////////////////
 
 export default function ReportarMascotaPerdida() {
 
 
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const [input, setInput] = useState({
        perro: false,
        gato: false,        
        estado: [],
        tama: [],
        peso: "",
        localidad: "",
        descripcion: "",        
        imagen: ""
      });
console.log(input)
  const [imagenes, setImagenes] = useState([]);
      
  const [errors, setErrors] = useState({});

    function handleSubmit(e){
         e.preventDefault();

    dispatch(createAnimalPerdido(input, imagenes));

    alert("Mascota Agregada");

    setInput({
      perro: false,
      gato: false,        
      estado: [],
      tama: [],
      peso: "",
      localidad: "",
      descripcion: "",        
      imagen: ""
    })
    
    // setImagenes([])

    navigate("/homepage")
 }

 /////////////////////////// EXTRAYENDO URL DE CLAUDINARY /////////////////////////////////////////////////////////////////////

 const img = []
 for (let i = 0; i < imagenes.length; i++) {
    img.push(imagenes[i])
 }

 let imgUrl = img.map(({ url }) => url)

 let urlImagen = imgUrl.toString();

  function handleImagen() {
    setInput({
      ...input,
      imagen: urlImagen
    })
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7

 function handleChange(e) {

    setInput({
       ...input,
       [e.target.name]: e.target.value
    })

    setErrors(
        validation({
            ...input,
            status: e.target.value,
        })
    )
  }


   function handleTamaño(e) {
    if (input.tama.length === 0)
    setInput({
      ...input,
      tama: [...input.tama, e.target.value]
    })
 } 
 function handleEstado(e) {
  if (input.estado.length === 0)
  setInput({
    ...input,
    estado: [...input.estado, e.target.value]
  })
} 

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  
 /////////////////////// HANDLE DE GATO
 
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

  ///////////////////////////// HANDLE DE PERRO

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


  ///////////////////////////// HANDLE DE CLOUDINARY

    function handleOpenWidget(e) {
      // console.log("Entre el handleOpenWidget");
      e.preventDefault();
      var myWidget = window.cloudinary.createUploadWidget(
          {
              cloudName: "dvw0vrnxp",
              uploadPreset: "mascotas",
          },
          (error, result) => {
              if (!error && result && result.event === "success") {
              console.log('Done! Here is the image info: ', result.info);

              setImagenes((prev) => [
                ...prev, {
                  url: result.info.secure_url, 
                  id: result.info.public_id
                }])
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
    
  <div className={stl.paginareportar}>
    <NavBar />
    <FloatingUI />
   
        <form onSubmit={handleSubmit}>

          <div>Registra los datos de Mascota Perdida</div>
          
          <div>
            {imagenes.map((f) => {
              return (
              <div >
                <img src= {f.url} value={f.id} alt="foto"/>
                {imagenes.map((f) => (
                  <i className="fa fa-times close-icon" onClick={() => handleDelete(f)} value={f.id}></i>
                ))}
                </div>
                );
                })}
                <div >
                  
                  </div>
                  <div>
                    <button
                   
                    name="fotos"
                    onClick={handleOpenWidget}> 
                      AGREGAR FOTOS
                      </button>
                     
                      </div>
                  </div>
                  
       
       <div >
         <div >
                <label >Gato:</label>
                <input  onChange={ (e) => { handleCheck(e); handleGato(e); }}
                type="checkbox" name="gato" checked={isChecked} value={input.gato}/>
                {errors.gato && ( <p class="error2">{errors.gato}</p>)}                        
            </div> 
          
            <div >
                <label >Perro:</label>
                <input  onChange={ (e) => { handleCheck2(e); handlePerro(e); }}
                type="checkbox" name="perro" checked={isChecked2} value={input.perro}/> 
                {errors.perro && ( <p class="error2">{errors.perro}</p>)}                       
            </div>
            </div>

            <div >                                     
            <label >Estado:</label>
            <select  onChange={handleEstado}>
                       <option></option>
                       <option>Perdido</option>
                       <option>Encontrado</option>                       
                       </select>
                        </div>

            <div >                                     
            <label >Tamaño:</label>
            <select onChange={handleTamaño}>
                       <option></option>
                       <option>Chico</option>
                       <option>Mediano</option>
                       <option>Grande</option>
                       </select>
                        </div>
        

            <div >
              <Link to ="/lostpets">
                <button>Establecer ubicacion donde se perdio o vio por ultima vez
                  la mascota
                </button>
                  </Link>        
            </div>

            <div >
            <label >Descripcion:</label>
                <input onChange={handleChange} type="text" name="descripcion" value={input.descripcion}/>
                {errors.descripcion && ( <p class="error2">{errors.descripcion}</p>)} 
           </div>


            <button  onClick={handleImagen}>Reportar</button>
             {/* <button className={stl.boton} type="submit">Dar en Adopcion</button> */}

        </form>
        <Footer />
    </div>
  
  )}