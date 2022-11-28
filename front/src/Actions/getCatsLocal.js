import axios from 'axios';
import {GET_CAT_LOCALIDAD} from '.';

export default function getCatsLocal(localidad) {
    return async function (dispatch) {
      const gatos = await axios.get(`http://localhost:3001/animales/localidad/?localidad=${localidad}`);
      console.log(gatos)
      return dispatch({ type: GET_CAT_LOCALIDAD, payload: gatos.data });
    };
  }