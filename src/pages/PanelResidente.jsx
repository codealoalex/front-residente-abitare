import NavBarHeader from "../components/nav/NavBarHeader";
import { opcionesNavegador, opcionesAvatar } from "../utils/opciones.js";
import TicketPage from "./Incidentes/TicketPage/TicketPage.jsx";
import { useState } from "react";

const PanelResidente = () => {

    const [pageSelected, setPageSelected] = useState("incidente")

    const renderPage = () => {
        switch (pageSelected) {
            case "incidente":
                return <TicketPage />
            default:
                break;
        }
    }

    return (
        <div>
            <NavBarHeader opciones={opcionesNavegador}/>
            {renderPage()}
        </div>
    )
}

export default PanelResidente
