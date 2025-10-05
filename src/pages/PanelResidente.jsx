import NavBarHeader from "../components/nav/NavBarHeader";
import { opcionesNavegador, opcionesAvatar } from "../utils/opciones.js";
import TicketPage from "./Incidentes/TicketPage/TicketPage.jsx";
import { useState } from "react";
import RegistroIncidente from "./Registroindicente/RegistroIncidente.jsx";

const PanelResidente = () => {

    const [pageSelected, setPageSelected] = useState("registro-incidente")

    console.log(pageSelected)

    const renderPage = () => {
        switch (pageSelected) {
            case "incidentes":
                return <TicketPage />
            case "inicio":
                return <RegistroIncidente/>
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
