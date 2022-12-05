import axios from "axios";

export default function putUser(payload, id) {
  console.log("entre a la action putUser");
  return async function (dispatch) {
    const result = await axios.put(
      `/usuarios/${id}`,
      payload
    );
    return dispatch({ type: "putUsuario", payload: result.data });
  };
}
