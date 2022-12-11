import axios from "axios";
import { GET_LIKES } from ".";

export default function getLikes() {
    return async function (dispatch) {
        const result = await axios.get("/likes");
        return dispatch({ type: GET_LIKES, payload: result.data})
    }
}