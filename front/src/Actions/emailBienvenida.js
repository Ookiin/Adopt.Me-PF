import axios from 'axios';
import { EMAIL_BIENVENIDA } from '.';

export default function emailBienvenida(payload) {
    console.log("entre a la action emailBienvenida", payload);
    return async function (dispatch){ 
        const result = await axios.post("/usuarios/emailbienvenida", payload); 
        return dispatch({ type: EMAIL_BIENVENIDA, payload: result.data })                                                                                         
    }
};

