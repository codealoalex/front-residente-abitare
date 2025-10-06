import { Route, Routes } from "react-router"
import Tickets from "./Tickets/Tickets"
import RegistroIncidente from "../Registroindicente/RegistroIncidente"

const Incidentes = () => {
    return (
        <div>
            <Routes>
                <Route path="" element={<Tickets />} />
                <Route path="reporte" element={<RegistroIncidente/>} />
            </Routes>
        </div>
    )
}

export default Incidentes
