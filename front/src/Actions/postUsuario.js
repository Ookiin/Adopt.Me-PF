import axios from 'axios';


export default function postUsuario(payload) {
    console.log("entre a la action postUsuario")
    return async function (dispatch){ const result = await axios.post("/usuarios/postUsuario", payload); 
        return dispatch({ type: "postUsuario", payload: result.data })                                                                                                   
    }
}