import axios from 'axios';
import {GET_PERRO} from '.';

export default function getperro() {
    return async function (dispatch) {
      const perros = await axios.get("/animales/perro");
      console.log(perros)
      return dispatch({ type: GET_PERRO, payload: perros.data });
    };
  }