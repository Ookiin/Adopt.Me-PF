import EnAdopcion from "../PAdmChartsMascotas/EnAdopcion";
import Perdidos from "../PAdmChartsMascotas/Perdidos";
import NavBarPAdmin from "../PanelAdministrador/NavBarPAdmin"; 
import stl from "./mascotas.module.css";
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import  { Link, useNavigate}  from "react-router-dom";
import getmascotas from "../../Actions/getmascotas";
import FloatingUI from "../Floating UI/FloatingUI";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Paging from "../Pagination/Pagination"

const Mascotas = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const allPets = useSelector((state) => state.gatos);
  const AllAnimals = useSelector((state)=>state.animales);

  const [currentPage, setCurrentPage] = useState(1) 
  const [mascotasPerPage] = useState(4)

  const lastPetIndex = currentPage * mascotasPerPage 
  const firstPetIndex = lastPetIndex - mascotasPerPage 
  const currentPets = AllAnimals.slice(firstPetIndex,lastPetIndex) 


  const [input, setInput] = useState("");
  const [orden, setOrden] = useState(""); 
  const [search, setSearch] = useState("");
/*   const [localCat, setlocalCat] = useState(""); */

  const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

  useEffect(()=>{
      dispatch(getmascotas())
      setCurrentPage(1)
  }, [dispatch])
  

     const handleClick = (e) => {
      e.preventDefault()
      window.location.reload();
      } 

  const handleInput = (e) => {
      e.preventDefault();
      setSearch(e.target.value)
  }

  const handleSubmit = (e) => {//mando la accion y me trae el dog
      e.preventDefault();
      if(search){
      dispatch(getmascotas(search))
      setInput("")
      navigate("/panel-Administrador") 
      actualPage(1)
      }
 }
 const handleOrden = (e) => {
  e.preventDefault();
  dispatch(getmascotas(e.target.value))
  setCurrentPage(1)
  setOrden(`Ordenado ${e.target.value}`)
}

  return(
    <div>
      <div>
        <h2>INFORME GENERAL DE NUESTRAS MASCOTAS</h2>
      </div>
      <div>
        <NavBarPAdmin /> 
      </div>
      <div>
       <EnAdopcion />
      </div>   
      <div>
       <Perdidos />
      </div>
      <div>
        <label className={stl.labelSearch}>Nombre:</label>
           <input className={stl.inputNav}
               value={search}
               type="text"
               placeholder=" Nombre..."
               onChange={handleInput}>
           </input>
           <button className={stl.btnNav}
               type="submit"
               onClick={handleSubmit}>Ir</button>    
      </div>
      <div className={stl.filtros}>Filtar: 
               
               <select className={stl.op} onChange={(e) => handleOrden(e)}>
                    <option disabled selected defaultValue>
                        Alfabeticamente
                    </option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
      </div>
      <FloatingUI />
        <br/>
        <div>
            <button className={stl.btnNavHome} onClick={handleClick}>Home</button>
        </div>
      {/* <div>
       <EnAdopcion />
      </div>   
      <div>
       <Perdidos />
      </div> */}
      <div className={stl.paginado}>
        <Paging 
        mascotasPerPage={mascotasPerPage} 
        allPets={AllAnimals.length} 
        currentPage={currentPage}
        actualPage={actualPage}
        currentPets={currentPets}
        />
        </div>

        <div className={stl.listadoCards}> 
     

        {currentPets.length > 0 ? currentPets.map((p, l) => {

              return (  
                <Link to={`/animales/${p._id}`}  key={l}>     
               <div>

                
                     <Card
                     id={p._id}
                     nombre={p.nombre}                     
                     imagen={p.imagen}
                     />  
                     </div>
               </Link>                                                                                           
            )
          }): <div>no hay
              </div>     
                                  
        }</div>

      <Footer />
    </div>
  )
}

export default Mascotas;