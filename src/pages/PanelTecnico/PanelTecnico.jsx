import NavBarHeader from "../../components/nav/NavBarHeader.jsx";
import { opcionesNavegadorTecnico } from "../../utils/opciones.js";
import { Route, Routes } from "react-router";
import IncidentesTecnico from "./Incidentes/IncidentesTecnico"

const PanelTecnico = () => {
    return (
        <div>
            <NavBarHeader opciones={opcionesNavegadorTecnico} />
            <Routes>
                <Route path="/" element={<h1>Hola usuario</h1>} />
                <Route path="/anuncios-tecnico" element={<h1>Página de anuncios</h1>} />
                <Route path="/incidentes-tecnico/*" element={<IncidentesTecnico/>} />
            </Routes>
        </div>
    )
}

export default PanelTecnico
