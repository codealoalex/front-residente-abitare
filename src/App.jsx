/* Primereact spanish setup  */
import { addLocale } from 'primereact/api';

addLocale('es', {
  firstDayOfWeek: 1,
  dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  today: 'Hoy',
  clear: 'Limpiar',
})

/* PrimeReact styles */
import 'primereact/resources/themes/lara-light-amber/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css'
import PanelResidente from './pages/PanelResidente/PanelResidente';
import PanelTecnico from './pages/PanelTecnico/PanelTecnico';
import RutaProtegida from './RutaProtegida';
import PantallaIncidentesAdmin from './pages/PanelAdmin/PantallaIncidentesAdmin';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Navigate } from 'react-router-dom';

import Login from './pages/Login/Login';
import ConfirmCode from './pages/ConfirmCode/ConfirmCode';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import CambioContrasenia from './pages/CambioContrasenia/CambioContrasenia';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/verificar' element={<ConfirmCode />} />
        <Route path='/validar-clave' element={<ChangePassword />} />
        <Route path='/cambiar-clave' element={<CambioContrasenia />} />
        <Route element={<RutaProtegida rolRequerido="administrador" />}>
          <Route path="/administrador/dashboard/*" element={<PantallaIncidentesAdmin />} />
        </Route>

        <Route element={<RutaProtegida rolRequerido="residente" />}>
          <Route path="/residente/dashboard/*" element={<PanelResidente />} />
        </Route>

        <Route path="/tecnico/dashboard/*" element={<PanelTecnico />} />

        {/* <Route element={<RutaProtegida rolRequerido="tecnico" />}>
          <Route path="/tecnico/dashboard/*" element={<PanelTecnico />} />
        </Route>
 */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="*" element={<h1>404 | Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
