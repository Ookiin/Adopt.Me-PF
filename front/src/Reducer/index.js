
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
    GET_DETAIL_MASCOTA_PERDIDA,
    FILTRADO_ESTADO_PERDIDO,
    GET_GATO_PERDIDO,
    GET_PERRO_PERDIDO,
    CREATE_ANIMAL_PERDIDO,
    CREATE_LOCATION,
    GET_LOCATIONS, 
    PAGO_STRIPES,
    GET_LOCATION_PERDIDOS,
    CREATE_LOCATION_PERDIDOS,
    GET_DOG_TAMAÑOS,
    GET_CAT_TAMAÑOS,
    GET_DOG_EDAD,
    GET_CAT_EDAD,
    CREATE_USER_GOOGLE,
    ORDEN_GATO,
    ORDEN_PERRO,
    CREATE_POST,
    GET_POSTS,
    GET_POST_ID,
    CREATE_RESPUESTA,
    GET_RESPUESTA
  } from "../Actions";


const initialState = {
   animales: [],
   perrosCopia: [],
   gatosCopia: [],
   detalleUsuarioGoogle: [],
   gatos: [],
   perros: [],
   animalesdetail: [],
   tamañoFiltrado: [],
   edadFiltrado: [],
   animalesPerdidos: [],
   animalesPerdidosCopia: [],
   gatosPerdidos: [],
   perrosPerdidos: [],
   animalesPerdidosDetail: [],
   users: [],
   filtroPerdidos: [],
   detalleUsuario: [],
   locations: [],
   locationsPerdidos: [],
   posts: [],
   postDetails: [],
   copiaPosts: [],
   respuestas: [],
   edad: 'edad',
   tamaño: 'All'
}


export default function rootReducer(state = initialState, action){

const gatos = state.gatos
const perros = state.perros

    switch(action.type){

    case GET_MASCOTAS:     
        if(action.payload) { 
            return {       
                ...state,   
                animales: action.payload, 
                          
            }              
        } else { 
            return { ...state, animales:[] } }
            
    case CREATE_USER:
      return { ...state };

    case CREATE_POST:
      return {...state};

    case CREATE_RESPUESTA:
      return {...state};

    case CREATE_ANIMAL:
      return { ...state };
    
    case GET_ANIMAL_BY_ID:
      return { ...state, animalesdetail: action.payload };

      case GET_POST_ID:
        return { ...state,
        postDetails: action.payload
      }

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

      case GET_POSTS:
        return {
          ...state,
          posts: action.payload,
        };

      case GET_RESPUESTA:
        return {
          ...state,
          respuestas: action.payload
        }

    case GET_GATO:
      return {
        ...state,
        gatos: action.payload,
        gatosCopia: action.payload
      };

    case GET_PERRO:
      return {
        ...state,
        perros: action.payload,
        perrosCopia: action.payload
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

      case PAGO_STRIPES:
        return {...state};
///////////////////////////////////////////FILTROS///////////////////////////////////////////////////////////////////////
case ORDEN_PERRO: {
  let sortedPerros = [];
  if (action.payload === 'A-Z') {
    sortedPerros = [...state.perrosCopia].sort((a, b) => a.nombre.localeCompare(b.nombre))
      // a = 1, b = 2, c = 3, etc.
      // localcompare permite comprarar dos cadenas teniendo en cuenta acentos y demas.
  }
  if (action.payload === 'Z-A') {
    sortedPerros = [...state.perrosCopia].sort((a, b) => b.nombre.localeCompare(a.nombre));
  }
  return {
      ...state,
      perrosCopia: sortedPerros
  }
}

case ORDEN_GATO: {
  let sortedGatos = [];
  if (action.payload === 'A-Z') {
    sortedGatos = [...state.gatosCopia].sort((a, b) => a.nombre.localeCompare(b.nombre))
      // a = 1, b = 2, c = 3, etc.
      // localcompare permite comprarar dos cadenas teniendo en cuenta acentos y demas.
  }
  if (action.payload === 'Z-A') {
    sortedGatos = [...state.gatosCopia].sort((a, b) => b.nombre.localeCompare(a.nombre));
  }
  return {
      ...state,
      gatosCopia: sortedGatos
  }
}


case GET_CAT_EDAD: {

  const filteredByTamaño = state.tamaño === 'All' ?
      gatos
      : gatos.filter(g => g.tama?.includes(state.tamaño));

  const filteredCats = action.payload === 'edad' && filteredByTamaño.length ?
      filteredByTamaño :
      filteredByTamaño.filter(e => e.edad?.includes(action.payload));

  return {
      ...state,
      gatosCopia: filteredCats,
      edad: action.payload
  }
};

case GET_DOG_EDAD: {

  const filteredByTamaño = state.tamaño === 'All' ?
      perros
      : perros.filter(p => p.tama?.includes(state.tamaño));

  const filteredDogs = action.payload === 'edad' && filteredByTamaño.length ?
      filteredByTamaño :
      filteredByTamaño.filter(e => e.edad?.includes(action.payload));

  return {
      ...state,
      perrosCopia: filteredDogs,
      edad: action.payload
  }
};

            
case GET_DOG_TAMAÑOS: {

  const filteredByEdad = state.edad === 'edad' ?
  perros
  : perros.filter(p => p.edad?.includes(state.edad));

  const filteredDogs = action.payload === 'All' && filteredByEdad.length ?
  filteredByEdad :
  filteredByEdad.filter(e => e.tama?.includes(action.payload));

  return {
      ...state,
      perrosCopia: filteredDogs,
      tamaño: action.payload
  }
};


case GET_CAT_TAMAÑOS: {

  const filteredByEdad = state.edad === 'edad' ?
  gatos
  : gatos.filter(p => p.edad?.includes(state.edad));

  const filteredCats = action.payload === 'All' && filteredByEdad.length ?
  filteredByEdad :
  filteredByEdad.filter(e => e.tama?.includes(action.payload));

  return {
      ...state,
      gatosCopia: filteredCats,
      tamaño: action.payload
  }
};
               
  
        
//------------------------------------------Animales Perdidos Inicio-----------------------------------------------------------------------//
   
        case GET_TAMAÑO_FILTRO:
            let filtered = state.animalesPerdidosCopia;
            let filterByTam = filtered.filter(
                (t)=>t.tama.map(
                    (ty)=>ty.tama).includes(
                        action.payload === 'Chico'|| action.payload === 'Grande' || action.payload === 'Mediano')
                 || t.tama.includes(action.payload))            
            if(action.payload === 'All')filterByTam = filtered;           
            
            console.log(filterByTam);
            return{
                ...state,
                animalesPerdidos: filterByTam,                            
            };

            case GET_TAMAÑO_PERDIDOS:
                
                return{
                    ...state,
                    filtroPerdidos: action.payload,
                }
        case GET_DETAIL_MASCOTA_PERDIDA:
            return{
                ...state,
                animalesPerdidosDetail: action.payload,
            }               
        
        case GET_ANIMALES_PERDIDOS:
            return{
                ...state,
                animalesPerdidos: action.payload,
                animalesPerdidosCopia: action.payload,
            }
        case FILTRADO_ESTADO_PERDIDO:
            let animPerdidos = state.animalesPerdidosCopia;
            let filterByEstado = animPerdidos.filter(
                (e)=>e.estado.map(
                    (e)=>e.estado).includes(
                        action.payload === 'Perdido'|| action.payload === 'Encontrado')
                 || e.estado.includes(action.payload))            
            if(action.payload === 'estado')filterByEstado = animPerdidos;          
            console.log(filterByEstado);
            return{
                ...state,
                animalesPerdidos: filterByEstado, 
            };
        case GET_GATO_PERDIDO:            
            return{
                ...state,
                gatosPerdidos: action.payload,
            }
          case GET_PERRO_PERDIDO:
            return{
              ...state,
              perrosPerdidos: action.payload,
              
            }
        case CREATE_ANIMAL_PERDIDO:
            return{
                ...state,                      
        }
      
//------------------------------------------Animales Perdidos Fin-----------------------------------------------------------------------//

    case "signin":
      return { ...state };

    case "getDetalleUsuario":
      return {
        ...state,
        detalleUsuario: action.payload,
      };

      case CREATE_LOCATION:
          return {
            ...state
          }

      case GET_LOCATIONS:
        return {
          ...state,
         locations: action.payload 
        }

      
      case "putUsuario":
        return {
          ...state,
        }
      
        case "getDetalleUsuarioGoogle":
          return {
            ...state,
            detalleUsuarioGoogle: action.payload,
          };


        case CREATE_LOCATION_PERDIDOS:
          return {
            ...state
          }

          case GET_LOCATION_PERDIDOS:
            return {
              ...state,
              locationsPerdidos: action.payload
        }
      
      case CREATE_USER_GOOGLE:
        return {
          ...state,
        }

        
    default:
      return state;
  }
}

