
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
    FILTRA_TAMAÑO,
    GET_CAT_TAMAÑOS,
    GET_DOG_EDAD,
    GET_CAT_EDAD,
    CREATE_USER_GOOGLE
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
   animalesPerdidosDetail: [],
   users: [],
   filtroPerdidos: [],
   detalleUsuario: [],
   locations: [],
   locationsPerdidos: []
}


export default function rootReducer(state = initialState, action){
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case GET_CAT_EDAD:
            let cat = state.gatosCopia;            
            let filterByEdadCat = cat.filter(
                (e)=>e.edad.map(
                    (e)=>e.edad).includes(
                        action.payload === 'Mayor a 45 dias'|| action.payload === 'Menor a 45 dias' || action.payload === 'Adulto' || action.payload === 'Anciano')
                 || e.edad.includes(action.payload))            
            if(action.payload === 'edad')filterByEdadCat = cat;           
            
            console.log(filterByEdadCat);
            return{
                ...state,
                gatos: filterByEdadCat,                            
            };
case GET_DOG_EDAD:
            let filterEdad = state.perrosCopia;
            console.log(filterEdad);
            let filterByEdadDog = filterEdad.filter(
                (e)=>e.edad.map(
                    (e)=>e.edad).includes(
                        action.payload === 'Mayor a 45 dias'|| action.payload === 'Menor a 45 dias' || action.payload === 'Adulto' || action.payload === 'Anciano')
                 || e.edad.includes(action.payload))            
            if(action.payload === 'edad')filterByEdadDog = filterEdad;           
            
            console.log(filterByEdadDog);
            return{
                ...state,
                perros: filterByEdadDog,                            
            };

            
case GET_DOG_TAMAÑOS:
            let filter = state.perrosCopia;
            let filterByT = filter.filter(
                (t)=>t.tama.map(
                    (ty)=>ty.tama).includes(
                        action.payload === 'Chico'|| action.payload === 'Grande' || action.payload === 'Mediano')
                 || t.tama.includes(action.payload))            
            if(action.payload === 'All')filterByT = filter;           
            
            console.log(filterByT);
            return{
                ...state,
                perros: filterByT,                            
            };

            case GET_CAT_TAMAÑOS:
              let filterCat = state.gatosCopia;
              let filterByTa = filterCat.filter(
                  (t)=>t.tama.map(
                      (ty)=>ty.tama).includes(
                          action.payload === 'Chico'|| action.payload === 'Grande' || action.payload === 'Mediano')
                   || t.tama.includes(action.payload))            
              if(action.payload === 'All')filterByTa = filterCat;           
              
              console.log(filterByTa);
              return{
                  ...state,
                  gatos: filterByTa,                            
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
                animalesPerdidos: action.payload,
            }
          case GET_PERRO_PERDIDO:
            return{
              ...state,
              animalesPerdidos: action.payload,
              
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

