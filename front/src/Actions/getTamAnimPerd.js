import axios from 'axios';
import {GET_TAMAÑO_PERDIDOS} from '.';

export default function getTamañoPerdidos() {
    return async function (dispatch) {       
      const tamaño = await axios.get("http://localhost:3001/animalesPerdidos/tama/");
      console.log(tamaño.data)
      return dispatch({ type: GET_TAMAÑO_PERDIDOS, payload: tamaño.data});
    };
  }