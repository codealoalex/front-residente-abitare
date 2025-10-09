import React from 'react'
import { Routes, Route } from 'react-router'
import PantallaIncidentes from './PantallaIncidentes'
import IncidenteInfoAdmin from './Incidentes/IncidenteInfoAdmin'

const PantallaIncidentesAdmin = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<PantallaIncidentes />} />
        <Route path='incidentes/*' element={<IncidenteInfoAdmin/>} />
        <Route path='*' element={<h1>Error 404: Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default PantallaIncidentesAdmin
