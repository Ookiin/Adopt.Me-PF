import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardPerdidos from '../../Componentes/CardPerdidos/CardPerdidos';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../BuscarMascota/BuscarMascota.module.css";
import FloatingUI from "../Floating UI/FloatingUI";
import getAnimalesPerdidos from "../../Actions/getAnimalesPerdidos";
// import getTamañoPerdidos from "../../Actions/getTamAnimPerd";
import getTamañofiltro from "../../Actions/getTamañoFiltro";
import {useSelector, useDispatch} from 'react-redux';
import { useState } from "react";
import Paging from "../Pagination/Pagination";

export default function BuscarMascota() {
  const params = useParams();
  const dispatch = useDispatch();
  
  const allPets = useSelector((state)=>state.animalesPerdidos)
  const copia = useSelector((state)=>state.animalesPerdidosCopia)
  console.log("copia", copia)

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(4)
    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex);
    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

    // const [refresh, setReefresh]= useState(copia)


  useEffect(()=>{      
    dispatch(getAnimalesPerdidos())    
    setCurrentPage(1)
  }, [dispatch]);

  async function handleTamaño (e){  
    await e.preventDefault(copia);   
    await dispatch(getTamañofiltro(e.target.value))  
    console.log(copia);    
  }


  return (
    <>
      <div key={params.id}></div>
      <NavBar />
      <FloatingUI />
      <div>
        <h1 className={stl.titulo}>BUSCA AQUI TU MASCOTA PERDIDA</h1>
      </div>
       <Paging
        mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
       />

                {/* // <option value = 'mediano'>Mediano</option>
                // <option value = 'chico'>Chico</option>
                // <option value = 'grande'>Grande</option>                     */}
       
       {/* TODAVIA NO ANDA BIEN EL FILTRO POR TAMAÑOS, PERO LO DEJO COMENTADO PARA SEGUIR */}
      <div>
      <select onChange={(e)=>handleTamaño(e)}>
                <option value='All' disabled selected defaultValue>Tamaño</option>
                <option value = 'mediano'>Mediano</option>
                <option value = 'chico'>Chico</option>
                <option value = 'grande'>Grande</option>                               
            </select>  

            
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
      <button className={stl.boton}>BUSCAR</button>
      <Link to="/homepage">
        <button className={stl.boton}>VOLVER</button>
      </Link>

      <Footer />
    </>
  );
}
