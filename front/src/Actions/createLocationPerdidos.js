import axios from 'axios';
import { CREATE_LOCATION_PERDIDOS } from '.';

export default function createLocationPerdidos(payload) {
    console.log("entre a la action location")
    return async function (dispatch){ const result = await axios.post("/location2", payload); 
        return dispatch({ type: CREATE_LOCATION_PERDIDOS, payload: result.data })                                                                                                   
    }
}