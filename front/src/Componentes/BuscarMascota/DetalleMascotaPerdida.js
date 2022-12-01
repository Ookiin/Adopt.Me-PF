import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../AdoptarMascota/DetalleMascotas.module.css";
import FloatingUI from "../Floating UI/FloatingUI";
import getDetailMascotaPerdida from "../../Actions/detailMascotaPerdida";


export default function DetallePerro () {
    const {id} = useParams();
    // console.log(id);
    
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.animalesPerdidosDetail);

    useEffect(() => {
        dispatch(getDetailMascotaPerdida(id))               
    }, [id, dispatch])
   
   
    return (

        <div className={stl.paginaAdopcion}>
            
            <NavBar />
            <FloatingUI />
              <img className={stl.img} src={detail.imagen} alt=""></img>
              <div className={stl.cardDetalles}>                   
              <div className={stl.datosAdopcion}>
              <div className={stl.tituloAdopcion}>Datos de la Mascota</div>
            <div className={stl.datos2}>             
              <div className={stl.titulos2}>Localidad: <p className={stl.details}>{detail.localidad}</p> </div>            
              <div className={stl.titulos2}>Tamaño: <p className={stl.details}>{detail.tama}</p></div>                 
              <div className={stl.titulos2}>Estado: <p className={stl.details}>{detail.estado}</p></div>             
              <div className={stl.titulos2}>Descripcion: <p className={stl.details}>{detail.descripcion}</p></div>
              {/* <div className={stl.titulos2}>Gato <p className={stl.details}>{detail.gato}</p></div>            */}
            </div>
               
              {/* <Link to='/contacto'>
                <button className={stl.botonDarAdopcion}>ADOPTAR</button>
        </Link>   */}
        </div> 
        </div>

        <Footer />

        </div>

    );
};