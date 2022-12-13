import NavBarPAdmin from "../PanelAdministrador/NavBarPAdmin" ;
import TotalUsuarios from "../PAdmChartsClientes/TotalUsuarios";
import stl from "./mascotas.module.css";
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import  { Link, useNavigate}  from "react-router-dom";
import getusers from "../../Actions/getusers";
import FloatingUI from "../Floating UI/FloatingUI";
import Footer from "../Footer/Footer";
import CardUser from "../CardUser/CardUser";
import Paging from "../Pagination/Pagination"


const Clientes = () => {

 const dispatch = useDispatch();
 const navigate = useNavigate();

  // const allPets = useSelector((state) => state.gatos);
  const allUsersData = useSelector((state) => state.users)
  const allUsers = allUsersData.data
  /* const allUsers = allUsersData.data
 console.log(allUsers) */
  const [currentPage, setCurrentPage] = useState(1) 
  const [mascotasPerPage] = useState(4)

  const lastPetIndex = currentPage * mascotasPerPage 
  const firstPetIndex = lastPetIndex - mascotasPerPage 
  const currentPets = allUsers.slice(firstPetIndex,lastPetIndex) 


  const [input, setInput] = useState("");
  const [orden, setOrden] = useState(""); 
  const [searchClient, setSearchClient] = useState("");
/*   const [localCat, setlocalCat] = useState(""); */

  const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

  useEffect(()=>{
      dispatch(getusers())
      setCurrentPage(1)
  }, [dispatch])
  

     const handleClick = (e) => {
      e.preventDefault()
      window.location.reload();
      } 

  const handleInput = (e) => {
      e.preventDefault();
      setSearchClient(e.target.value)
  }

  const handleSubmit = (e) => {//mando la accion y me trae el dog
      e.preventDefault();
      if(searchClient){
      dispatch(getusers(searchClient))
      setInput("")
      navigate("/panel-Administrador/usuario") 
      actualPage(1)
      }
 }
 const handleOrden = (e) => {
  e.preventDefault();
  dispatch(getusers(e.target.value))
  setCurrentPage(1)
  setOrden(`Ordenado ${e.target.value}`)
}


  return(
    <div>
      <div>
        <h2>INFORME GENERAL DE NUESTRAS USUARIOS</h2>
      </div>
       <div>
        <NavBarPAdmin />
       </div>
       <div>
        <TotalUsuarios />
       </div>
     
    <div>
        <label className={stl.labelSearch}>Nombre:</label>
           <input className={stl.inputNav}
               value={searchClient}
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
    
      <div className={stl.paginado}>
        <Paging 
        mascotasPerPage={mascotasPerPage} 
        allPets={allUsers.length} 
        currentPage={currentPage}
        actualPage={actualPage}
        currentPets={currentPets}
        />
        </div>

        <div className={stl.listadoCards}> 
     

        {currentPets.length > 0 ? currentPets.map((p, l) => {

              return (  
                <Link to={`/usuarios/${p._id}`}  key={l}>     
               <div>

                     <CardUser
                     id={p._id}
                     usuario={p.usuario}
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

export default Clientes;