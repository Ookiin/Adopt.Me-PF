import axios from "axios";
import { CREATE_LIKE } from ".";

export default function createLike(payload) {
    return async function (dispatch) {
        const result = await axios.put("/likes", payload);
        return dispatch({ type: CREATE_LIKE, payload: result.data})
    }
}