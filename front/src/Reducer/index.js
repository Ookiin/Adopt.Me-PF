
import { 
    CREATE_ANIMAL,
    CREATE_USER,
    GET_ANIMAL_BY_ID,
    GET_MASCOTAS,
    PAGO_PAYPAL,
    PAGO_MERCADO_PAGO,
    GET_USERS, GET_GATO,
    GET_PERRO, GET_DOG_NAME,
    GET_CAT_NAME,
    GET_DOG_LOCALIDAD,
    GET_CAT_LOCALIDAD,
    GET_TAMAÑO_PERDIDOS, 
    GET_ANIMALES_PERDIDOS,
    GET_TAMAÑO_FILTRO,
    GET_DETAIL_MASCOTA_PERDIDA} from "../Actions";


const initialState = {
   animales: [],
   animalesPerdidos: [],
   animalesPerdidosCopia: [],
   animalesPerdidosDetail: [],
   animalesdetail: [],
   users: [],
   gatos: [],
   perros: [],
   perrosFiltrados: [],
   tamañoFiltrado: [],
   tamañosDog: [],
   filtroPerdidos: [],
   detalleUsuario: []
}


export default function rootReducer(state = initialState, action){
    switch(action.type){

    case GET_MASCOTAS:     
        if(action.payload) { 
            return {       
                ...state,   
                animales: action.payload,
                tamañoFiltrado: action.payload,            
            }              
        } else { 
            return { ...state, animales:[] } }
            
    case CREATE_USER:
      return { ...state };

    case CREATE_ANIMAL:
      return { ...state };
    
    case GET_ANIMAL_BY_ID:
      return { ...state, animalesdetail: action.payload };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_GATO:
      return {
        ...state,
        gatos: action.payload,
      };

    case GET_PERRO:
      return {
        ...state,
        perros: action.payload,
      };
    case GET_DOG_LOCALIDAD:
      return {
        ...state,
        perros: action.payload,
      };
    case GET_CAT_LOCALIDAD:
      return {
        ...state,
        gatos: action.payload,
      };
    // case GET_GATO_BY_ID:
    //     return{
    //         ...state,
    //         animalesdetailgatos: action.payload,
    //     }  GET_DOG_NAME
    case GET_DOG_NAME:
      return {
        ...state,
        perros: action.payload,
      };
    case GET_CAT_NAME:
      return {
        ...state,
        gatos: action.payload,
      };

    case PAGO_PAYPAL:
      return { ...state };

    case PAGO_MERCADO_PAGO:
      return { ...state };

   
        case GET_TAMAÑO_FILTRO:
            let filtered = state.animalesPerdidosCopia;
            let filterByTam = filtered.filter(
                (t)=>t.tama.map(
                    (ty)=>ty.tama).includes(
                        action.payload === 'chico'|| action.payload === 'grande' || action.payload === 'mediano')
                 || t.tama.includes(action.payload))            
            if(action.payload === 'All')filterByTam = filtered;           
            
            console.log(filterByTam);
            return{
                ...state,
                animalesPerdidos: filterByTam,                            
            };
        case GET_DETAIL_MASCOTA_PERDIDA:
            return{
                ...state,
                animalesPerdidosDetail: action.payload,
            }               
        
        case GET_TAMAÑO_PERDIDOS:
            
            return{
                ...state,
                filtroPerdidos: action.payload,
            }
        case GET_ANIMALES_PERDIDOS:
            return{
                ...state,
                animalesPerdidos: action.payload,
                animalesPerdidosCopia: action.payload,
            }


    case "signin":
      return { ...state };

    case "getDetalleUsuario":
      return {
        ...state,
        detalleUsuario: action.payload,
      };

    default:
      return state;
  }
}
