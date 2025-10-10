import NavBarHeader from "../../components/nav/NavBarHeader.jsx";
import { opcionesNavegadorResidente } from "../../utils/opciones.js";
import { Route, Routes } from "react-router";

import Incidentes from "./Incidentes/Incidentes.jsx";

const PanelResidente = () => {
    return (
        <div>
            <NavBarHeader opciones={opcionesNavegadorResidente} />
            <Routes>
                <Route path="" element={<h1>Hola usuario</h1>} />
                <Route path="anuncios" element={<h1>Página de anuncios</h1>} />
                <Route path="incidentes/*" element={<Incidentes />} />
            </Routes>
        </div>
    )
}

export default PanelResidente
