import axios from 'axios';
import {GET_CAT_NAME} from '.';

export default function getCatByName(nombre) {
    return async function (dispatch) {
      const gatos = await axios.get(`/animales/nombre-gato/?nombre=${nombre}`);
      console.log(gatos)
      return dispatch({ type: GET_CAT_NAME, payload: gatos.data });
    };
  }