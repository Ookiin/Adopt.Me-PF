import {
  CREATE_ANIMAL,
  CREATE_USER,
  GET_ANIMAL_BY_ID,
  GET_MASCOTAS,
  PAGO_PAYPAL,
  PAGO_MERCADO_PAGO,
  GET_USERS,
  GET_GATO,
  GET_PERRO,
  GET_DOG_NAME,
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
  // GET_DOG_TAMAÑOS,
  // FILTRA_TAMAÑO
} from "../Actions";

const initialState = {
  animales: [],
  perrosCopia: [],
  gatosCopia: [],
  animalesPerdidos: [],
  animalesPerdidosCopia: [],
  gatosPerdidos: [],
  animalesPerdidosDetail: [],
  animalesdetail: [],
  users: [],
  gatos: [],
  perros: [],
  tamañoFiltrado: [],
  filtroPerdidos: [],
  detalleUsuario: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MASCOTAS:
      if (action.payload) {
        return {
          ...state,
          animales: action.payload,
        };
      } else {
        return { ...state, animales: [] };
      }

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
        gatosCopia: action.payload,
      };

    case GET_PERRO:
      return {
        ...state,
        perros: action.payload,
        perrosCopia: action.payload,
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // case GET_DOG_TAMAÑOS:
    //   let filtered2 = state.perrosCopia;
    //   let filterByTam2 = filtered2.filter(
    //       (t)=>t.tamaño.map(
    //           (ty)=>ty.tamaño).includes(
    //               action.payload === 'chico'|| action.payload === 'grande' || action.payload === 'mediano')
    //        || t.tamaño.includes(action.payload))
    //   if(action.payload === 'All')filterByTam2 = filtered2;

    //   console.log(filterByTam2);
    //   return{
    //       ...state,
    //       perros: filterByTam2,
    //   };

    //         case FILTRA_TAMAÑO:

    //             return{
    //                 ...state,
    //                 tamañoFiltrado: action.payload,
    //             }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    case GET_TAMAÑO_FILTRO:
      let filtered = state.animalesPerdidosCopia;
      let filterByTam = filtered.filter(
        (t) =>
          t.tama
            .map((ty) => ty.tama)
            .includes(
              action.payload === "Chico" ||
                action.payload === "Grande" ||
                action.payload === "Mediano"
            ) || t.tama.includes(action.payload)
      );
      if (action.payload === "All") filterByTam = filtered;

      console.log(filterByTam);
      return {
        ...state,
        animalesPerdidos: filterByTam,
      };

    case GET_DETAIL_MASCOTA_PERDIDA:
      return {
        ...state,
        animalesPerdidosDetail: action.payload,
      };

    case GET_TAMAÑO_PERDIDOS:
      return {
        ...state,
        filtroPerdidos: action.payload,
      };
    case GET_ANIMALES_PERDIDOS:
      return {
        ...state,
        animalesPerdidos: action.payload,
        animalesPerdidosCopia: action.payload,
      };
    case FILTRADO_ESTADO_PERDIDO:
      let animPerdidos = state.animalesPerdidosCopia;
      let filterByEstado = animPerdidos.filter(
        (e) =>
          e.estado
            .map((e) => e.estado)
            .includes(
              action.payload === "Perdido" || action.payload === "Encontrado"
            ) || e.estado.includes(action.payload)
      );
      if (action.payload === "estado") filterByEstado = animPerdidos;
      console.log(filterByEstado);
      return {
        ...state,
        animalesPerdidos: filterByEstado,
      };
    case GET_GATO_PERDIDO:
      return {
        ...state,
        animalesPerdidos: action.payload,
      };
    case GET_PERRO_PERDIDO:
      return {
        ...state,
        animalesPerdidos: action.payload,
      };
    case CREATE_ANIMAL_PERDIDO:
      return {
        ...state,
        // animalesPerdidosCopia: action.payload,
      };
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
