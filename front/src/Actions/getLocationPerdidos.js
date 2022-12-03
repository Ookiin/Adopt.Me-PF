import axios from "axios";
import { GET_LOCATION_PERDIDOS } from ".";

export default function getLocationsPerdidos() {
    return async function (dispatch) {
        const result = await axios.get("/location2");
        console.log("viendo que trae", result)
        return dispatch({ type: GET_LOCATION_PERDIDOS, payload: result.data})
    }
}