import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Componentes/LandingPage/LandingPage";
import HomePage from "../Componentes/HomePage/HomePage";
import HomePerros from "../Componentes/AdoptarMascota/HomePerros";
import HomeGatos from "../Componentes/AdoptarMascota/HomeGatos";
import InfoProceso from "../Componentes/DonarMascota/InfoProceso";
import FormRegistro from "../Componentes/FormRegistro/FormRegistro";
import FormSignIn from "../Componentes/FormSignIn/FormSingIn";
import DetalleAdopcion from "../Componentes/AdoptarMascota/DetalleAdopcion";
import Confirmacion from "../Componentes/FormRegistro/Confirmacion";
import TePuedeInteresar from "../Componentes/TePuedeInteresar/TePuedeInteresar";
import ReportarMaltrato from "../Componentes/TePuedeInteresar/ReportarMaltrato";
import Directorio from "../Componentes/TePuedeInteresar/Directorio";
import Donar from "../Componentes/Donacion/Donacion";
import ReportarMascota from "../Componentes/ReportarMascota/ReportarMascota";
import BuscarMascota from "../Componentes/BuscarMascota/BuscarMascota";
import DetallePerro from "../Componentes/AdoptarMascota/DetallePerro";
import DetalleGato from "../Componentes/AdoptarMascota/DetalleGato";
import FormDarEnAdopcion from "../Componentes/DonarMascota/formularioDar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="/adoptcat" element={<HomeGatos />} />
          <Route exact path="/adoptdog" element={<HomePerros />} />
          <Route exact path="/givepet" element={<InfoProceso />} />
          <Route exact path="/usuarios/signup" element={<FormRegistro />} />
          <Route exact path="/usuarios/signin" element={<FormSignIn />} />
          <Route exact path="/contacto" element={<DetalleAdopcion />} />
          <Route exact path="/confirmation" element={<Confirmacion />} />
          <Route exact path="/detailDog" element={<DetallePerro />} />
          <Route exact path="/detailCat" element={<DetalleGato />} />
          <Route exact path="/tepuedeinteresar" element={<TePuedeInteresar />} />
          <Route exact path="/reportarmaltrato" element={<ReportarMaltrato />} />
          <Route exact path="/directorio" element={<Directorio />} />
          <Route exact path="/donation" element={<Donar />} />
          <Route exact path="/reportarmascota" element={<ReportarMascota />} />
          <Route exact path="/buscarmascota" element={<BuscarMascota />} />
          <Route exact path="/registroMascota" element={<FormDarEnAdopcion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
