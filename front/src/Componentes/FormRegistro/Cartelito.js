import { useDispatch } from "react-redux";
import mailVerificarUsuario from "../../Actions/mailVerificarUsuario"

export default function Cartelito({input}) {
    console.log(input)
    const dispatch = useDispatch();

    function handleOnClick (e) {
        dispatch(mailVerificarUsuario(input));
    }

    return (
      <div>
        <div>
          <br>
          </br>
          <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                
          <h1> Por favor, completa el registro para ver tus datos! </h1>

          <button onClick={(e)=> handleOnClick()}>ACEPTAR</button>
        </div>
      </div>
      
    );
  }