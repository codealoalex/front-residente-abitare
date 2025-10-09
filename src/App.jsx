/* Primereact spanish setup  */
import {addLocale} from 'primereact/api';

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
import PantallaIncidenteAdmin from './pages/PanelAdmin/PantallaIncidentesAdmin';


function App() {
  return (
    <>
      <PanelResidente/>
      {/* <PanelTecnico/> */}
      {/* <PantallaIncidenteAdmin/> */}
    </>
  )
}

export default App
