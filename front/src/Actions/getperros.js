import axios from 'axios';
import {GET_PERRO} from '.';

export default function getgato() {
    return async function (dispatch) {
      const perros = await axios.get("http://localhost:3001/animales/perro");
      console.log(perros)
      return dispatch({ type: GET_PERRO, payload: perros.data });
    };
  }