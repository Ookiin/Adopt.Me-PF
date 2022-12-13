import axios from "axios";

export default function getDetalleUsuarioSinValidar(id) {
  return async function (dispatch) {
    const result = await axios.get(`/usuariosSinValidar`);

    return dispatch({
      type: "getDetalleUsuarioSinValidar",
      payload: result.data,
    });
  };
}
