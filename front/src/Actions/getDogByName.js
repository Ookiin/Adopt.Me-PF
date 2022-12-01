import axios from 'axios';
import {GET_DOG_NAME} from '.';

export default function getDogByName(nombre) {
    return async function (dispatch) {
      const perros = await axios.get(`/animales/nombre-gato/?nombre=${nombre}`);
      console.log(perros)
      return dispatch({ type: GET_DOG_NAME, payload: perros.data });
    };
  }