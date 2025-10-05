import NavBarHeader from "../components/nav/NavBarHeader";
import { opcionesNavegador, opcionesAvatar } from "../utils/opciones.js";
import TicketPage from "./Incidentes/TicketPage/TicketPage.jsx";
import { useState } from "react";
import RegistroIncidente from "./Registroindicente/RegistroIncidente.jsx";
import Tickets from "./Incidentes/Tickets/Tickets.jsx";

const PanelResidente = () => {

    const [pageSelected, setPageSelected] = useState("tickets")

    const renderPage = () => {
        switch (pageSelected) {
            case "incidentes":
                return <TicketPage />
            case "inicio":
                return <RegistroIncidente />
            case "tickets":
                return <Tickets/>
            default:
                break;
        }
    }

    return (
        <div>
            <NavBarHeader opciones={opcionesNavegador} set_page={setPageSelected}/>
            {renderPage()}
        </div>
    )
}

export default PanelResidente
