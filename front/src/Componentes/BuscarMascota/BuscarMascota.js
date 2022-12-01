import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardPerdidos from '../../Componentes/CardPerdidos/CardPerdidos';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../BuscarMascota/BuscarMascota.module.css";
import FloatingUI from "../Floating UI/FloatingUI";
import getAnimalesPerdidos from "../../Actions/getAnimalesPerdidos";
import filtradoEstadoPerdido from "../../Actions/filtradoEstadoPerdido";
import getTamañofiltro from "../../Actions/getTamañoFiltro";
import getGatoPerdido from "../../Actions/getGatosPerdidos";
import {useSelector, useDispatch} from 'react-redux';
import { useState } from "react";
import Paging from "../Pagination/Pagination";
import getPerroPerdido from "../../Actions/getPerrosPerdidos";

export default function BuscarMascota() {
  const params = useParams();
  const dispatch = useDispatch();
  

  const allPets = useSelector((state)=>state.animalesPerdidos);
  const [currentPage, setCurrentPage] = useState(1);
  const [mascotasPerPage] = useState(4);
  const lastPetIndex = currentPage * mascotasPerPage; 
  const firstPetIndex = lastPetIndex - mascotasPerPage ;
  const currentPets = allPets.slice(firstPetIndex,lastPetIndex);
  const actualPage = (pageNumber) => {setCurrentPage(pageNumber)};


  useEffect(()=>{      
    dispatch(getAnimalesPerdidos());
    dispatch(getGatoPerdido());
    dispatch(getPerroPerdido());   
    setCurrentPage(1)
  }, [dispatch]);

  async function handleTamaño (e){  
    await e.preventDefault();   
    await dispatch(getTamañofiltro(e.target.value));
  };
  async function handleEstado (e){  
    await e.preventDefault();   
    await dispatch(filtradoEstadoPerdido(e.target.value));
  };
  async function handleGato (e){  
    await e.preventDefault();   
    await dispatch(getGatoPerdido(e.target.value))    
  };
  async function handlePerro (e){  
    await e.preventDefault();   
    await dispatch(getPerroPerdido(e.target.value)); 
  };
  async function handleRecargar (e){  
    await e.preventDefault();   
    await dispatch(getAnimalesPerdidos(e.target.value));
    setCurrentPage(1)
  };


  return (
    <>
      <div key={params.id}></div>
      <NavBar />
      <FloatingUI />
      <div>
        <h1 className={stl.titulo}>BUSCA AQUI TU MASCOTA PERDIDA</h1>
      </div>

      <div>
      <button className={stl.boton} onClick= {(e)=>handleRecargar(e)}>RECARGAR</button>
      </div>

       <Paging
        mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
       />

      <div>
      <select onChange={(e)=>handleTamaño(e)}>
                <option value='All' disabled selected defaultValue>Tamaño</option>
                <option value = 'Chico'>Chico</option>
                <option value = 'Mediano'>Mediano</option>
                <option value = 'Grande'>Grande</option>                               
            </select>            
      </div>

      <div>
      <select onChange={(e)=>handleEstado(e)}>
                <option value='estado' disabled selected defaultValue>Estado</option>
                <option value = 'Perdido'>Perdido</option>
                <option value = 'Encontrado'>Encontrado</option>                                           
            </select>           
      </div>

      <div>
        <button onClick={(e)=>handleGato(e)}>Gatos</button>
      </div>
      
      <div>
        <button onClick={(e)=>handlePerro(e)}>Perros</button>
      </div>

      {currentPets.length > 0 && currentPets.map(a =>{
        return(  
        <CardPerdidos
        id = {a._id}
        gato = {a.gato}
        perro = {a.perro}
        tama = {a.tama}       
        localidad = {a.localidad}
        />                  
               )
           })}
      
      <Link to="/homepage">
        <button className={stl.boton}>VOLVER</button>
      </Link>

      <Footer />

    </>
  );
};
