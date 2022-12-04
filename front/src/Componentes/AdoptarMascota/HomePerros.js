import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {Link, useNavigate}  from "react-router-dom"
import Card from "../Card/Card";
import stl from "./HomePerros.module.css";
import NavBar from "../NavBar/NavBar";
import Paging from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import FloatingUI from "../Floating UI/FloatingUI";
import getperro from "../../Actions/getperros";
import getDogByName from "../../Actions/getDogByName";
import ordenAlfabetico from "../../Actions/ordenAlfabetico";
import getDogsLocal from "../../Actions/getDogsLocal";
import MapView from "../Maps/Maps";
import MapPets from "../Maps/Maps2";
//  import getdogtamaños from "../../Actions/getDogTamaños";
 

export default function HomePerros () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allPets = useSelector((state) => state.perros);
    const copiaPerros = useSelector((state)=>state.perrosCopia)
    console.log("copiaperros", copiaPerros)

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(4)

    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex) 


    const [setInput] = useState("");
    const [setOrden] = useState("");
    const [searchDog, setSearchDog] = useState("");
    const [localDog, setlocalDog] = useState("");
    useState(copiaPerros)

    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

        useEffect(() => {
            dispatch(getperro())
            setCurrentPage(1)
        }, [dispatch])

        const handleClick = (e) => {
            e.preventDefault()
            window.location.reload();
        }
        
        const handleInput = (e) => {//cambia cada caracter
        e.preventDefault();
        setSearchDog(e.target.value)
    }

    const handleInputLocal = (e) => {//cambia cada caracter
        e.preventDefault();
        setlocalDog(e.target.value)
    }

    const handleSubmit = (e) => {//mando la accion y me trae el dog
        e.preventDefault();
        if(searchDog){
        dispatch(getDogByName(searchDog))
        setInput("")
        navigate("/adoptdog") 
        actualPage(1)
        }
   }

   const handleLocalSubmit = (e) => {//mando la accion y me trae el dog
    e.preventDefault();
    if(localDog){
    dispatch(getDogsLocal(localDog))
    setlocalDog("")
    navigate("/adoptdog") 
    actualPage(1)
    }
}

   const handleOrden = (e) => {
     dispatch(ordenAlfabetico(e.target.value))
     setCurrentPage(1)
     setOrden(`Ordenado ${e.target.value}`)
   }


//   async function handleTamaño (e){  
//      e.preventDefault(copiaPerros);   
//      dispatch(getdogtamaños(e.target.value))  
//     console.log("copia perros:", copiaPerros);    
//   }
        
   return(
        <div className={stl.paginaadopcionperros}>
            <NavBar />
            <FloatingUI />
        <div className={stl.tituloPerros}>Perros en Adopcion</div>

        <Paging 
        mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
        />

        <div>
        <label className={stl.labelSearch}>Nombre:</label>
           <input className={stl.inputNav}
               value={searchDog}
               type="text"
               placeholder=" Nombre..."
               onChange={handleInput}>
           </input>
           <button className={stl.btnNav}
               type="submit"
               onClick={handleSubmit}>Ir</button>  

        <label className={stl.labelSearch}>Localidad:</label>
           <input className={stl.inputNav}
               value={localDog}
               type="text"
               placeholder=" Localidad..."
               onChange={handleInputLocal}>
           </input>
           <button className={stl.btnNav}
               type="submit"
               onClick={handleLocalSubmit}>Ir</button>    
        </div>

        <div className={stl.filtros}>Filtar: 
               
               <select className={stl.op} onChange={(e) => handleOrden(e)}>
                    <option disabled selected defaultValue>
                        Alfabeticamente
                    </option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
              
                {/* <select onChange={(e)=>handleTamaño(e)}>
                <option value='All' disabled selected defaultValue>Tamaño</option>
                <option value = 'mediano'>Mediano</option>
                <option value = 'chico'>Chico</option>
                <option value = 'grande'>Grande</option>                               
            </select>  */}
        </div>
        <br/>
        <div>
            <button className={stl.btnNavHome} onClick={handleClick}>HomePerros</button>
        </div>

        <div className={stl.ico}></div>
        <div className={stl.mapapets}>
            <Link to ="/mappets">
           <button className={stl.btnMap}>Ver mascotas a mi alrededor</button>
           </Link>
        </div>

        <div className={stl.listadoCards}> 
     

        {currentPets.length > 0 && currentPets.map(p => {

                   
            return (                                          
                
                     <Card
                     id={p._id}
                     perro = {p.perro}
                     nombre={p.nombre}
                     localidad={p.localidad}
                     imagen={p.imagen}
                     />
                    
                
                                                         
            )})     
                                  
        }
        
      </div>

      <Footer />
    </div>
    )
}