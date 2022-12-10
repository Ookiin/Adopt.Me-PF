// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from 'react-router-dom';
// import NavBar from "../NavBar/NavBar";
// import getmascotabyid from "../../Actions/getmascotabyid";
// import getusers from "../../Actions/getusers";

// export default function DetalleAdopcion () {

//      useSelector((state) => state.animalesdetail);
//      useSelector((state) => state.users)

//     const { id } = useParams();
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getmascotabyid(id));
//         dispatch(getusers())
//       }, []);

//     return (

//         <div >
//             <NavBar></NavBar>
//             <div>
//             <h1>ADOPTA A TU NUEVA MASCOTA</h1>
//             </div>

//             <div>
//             <h2>DATOS DEL RESPONSABLE:</h2>
//             <h3>(Aca irian los datos del usuario que vienen del back)</h3>
//             </div>

//             <div>
//             <h1>GRACIAS POR CONFIAR EN ADOPT.ME!</h1>
//             </div>

//             <Link to='/homepage'>
//                 <button>VOLVER</button>
//             </Link>
//         </div>
//     );
// }; 
