import axios from "axios";
import {PAGO_MERCADO_PAGO} from "./index";

export default function pagosMercadoPago() {
    return async function (dispatch) {
        console.log("probando pago")
        const result = await axios.post("/pagosMp/checkout")
        return dispatch = ({ type: PAGO_MERCADO_PAGO, payload: result})
    }
}