import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import  {Link, useNavigate}  from "react-router-dom"
import getgato from "../../Actions/getgatos";
import CardGato from "../Card/CardGato";
import NavBar from "../NavBar/NavBar";
import Paging from "../Pagination/Pagination";
import stl from './HomePerros.module.css';
import ordenAlfaGato from "../../Actions/ordenAlfaGato";
import getCatByName from "../../Actions/getCatByName";
import FloatingUI from "../Floating UI/FloatingUI";
import getCatTamaños from "../../Actions/getCatTamaños";
import getCatEdad from '../../Actions/getCatEdad';
import getCatsLocal from "../../Actions/getCatsLocal"

const HomeGatos = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allPets = useSelector((state) => state.gatos);
    const copiaGatos = useSelector((state)=>state.gatosCopia);

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(4)

    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex) 


    const [input, setInput] = useState("");
    const [orden, setOrden] = useState("");
    const [searchCat, setSearchCat] = useState("");
    const [localCat, setlocalCat] = useState("");

    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

    useEffect(()=>{
        dispatch(getgato())
    }, [dispatch])
    
    // if(allPets.map(e=>e.perro === true))
    const handleClick = (e) => {
        e.preventDefault()
        window.location.reload();
        }

    const handleInput = (e) => {
        e.preventDefault();
        setSearchCat(e.target.value)
    }

    const handleSubmit = (e) => {//mando la accion y me trae el dog
        e.preventDefault();
        if(searchCat){
        dispatch(getCatByName(searchCat))
        setInput("")
        navigate("/adoptcat") 
        actualPage(1)
        }
   }

   const handleOrden = (e) => {
    dispatch(ordenAlfaGato(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }

  async function handleTamaño (e){  
    await e.preventDefault();   
    await dispatch(getCatTamaños(e.target.value));
    console.log(e.target.value);
  };
  async function handleEdad (e){  
    await e.preventDefault();   
    await dispatch(getCatEdad(e.target.value));
    console.log(e.target.value);
  };

    return (

        <div className={stl.paginaadopcionperros}>
            <NavBar/>
            <FloatingUI />
        <div className={stl.tituloPerros}>Gatos en Adopcion</div>
        <br></br><br></br>
       
       <div>
        <label className={stl.labelSearch}>Nombre:</label>
           <input className={stl.inputNav}
               value={searchCat}
               type="text"
               placeholder=" Nombre..."
               onChange={handleInput}>
           </input>
           <button className={stl.btnNav}
               type="submit"
               onClick={handleSubmit}>Ir</button>    
     
        </div>
        <div className={stl.filtros}>Filtar: 
               
               <select className={stl.op}onChange={(e) => handleOrden(e)}>
                    <option disabled selected defaultValue>
                        Alfabeticamente
                    </option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
                <select onChange={(e)=>handleTamaño(e)}>
                <option value='All' disabled selected defaultValue>Tamaño</option>
                <option value = 'Mediano'>Mediano</option>
                <option value = 'Chico'>Chico</option>
                <option value = 'Grande'>Grande</option>                               
                </select> 
                <select onChange={(e)=>handleEdad(e)}>
                <option value='edad' disabled selected defaultValue>Edad</option>
                <option value = 'Menos de 45 dias'>Menos de 45 dias</option>
                <option value = 'Mas de 45 dias'>Mas de 45 dias</option>
                <option value = 'Adulto'>Adulto</option>
                <option value = 'Anciano'>Anciano</option>                                  
                </select> 
              
        </div>
        <br/>
        <div>
        <button className={stl.btnNavHome} onClick={handleClick}>HomeGatos</button>
        </div>

        <div className={stl.ico}></div>
        <div className={stl.mapapets}>
            <Link to ="/mappets2">
           <button className={stl.btnMap}>Ver mascotas a mi alrededor</button>
           </Link>
        </div>

        <Paging 
        mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
        />

        <div className={stl.listadoCards}>


            {currentPets.length > 0 && currentPets.map(g =>{

                return(
                  
                        <CardGato
                        id = {g._id}
                        gato = {g.gato}
                        nombre = {g.nombre}
                        />                  
                )
            })}
            

        </div>

        </div>
    )
}

export default HomeGatos;