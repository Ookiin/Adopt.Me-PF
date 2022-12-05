import axios from "axios";

export default function getDetalleUsuarioGoogle(id) {
  console.log("entre a la action google")
  console.log(id)
  return async function (dispatch) {
    const result = await axios.get(`/usuarios/google/${id}`);
    return dispatch({ type: "getDetalleUsuarioGoogle", payload: result.data });
  };
}
