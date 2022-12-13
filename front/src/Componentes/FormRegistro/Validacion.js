import React from "react";
import { useParams } from "react-router-dom";
import getDetalleUsuarioSinValidar from "../../Actions/getDetalleUsuarioSinValidar";

export default function Validacion() {
  const { id } = useParams();

  // Crear un estado global de usuarioSinValidar
  const usuario = useSelector(
    (state) => state.getDetalleUsuarioSinValidar
  ).data; // (o el estado global que usemos para guardar todos los usuarios)

  // Despachar la action para que guarde en el estado el detalle del usuario
  useEffect(() => {
    dispatch(getDetalleUsuarioSinValidar(id));
  }, [dispatch]);

  const [input, setInput] = useState({
    usuario: "",
    contrasena: "",
    repitaContrasena: "",
    nombre: "",
    telefono: "",
    mail: "",
    nacimiento: "",
    localidad: "",
    fotoPerfil: "",
  });

  function onClick() {}

  return (
    <div key={params.id}>
      <h1>Por favor clickea "validar" para confirmar tu mail </h1>

      <button onClick={onClick()}>Validar</button>
    </div>
  );
}
