import './registroIncidente.css';

import { useState } from 'react'
import InputForm from '../../components/input/InputForm'
import Select from '../../components/select/Select';
import InputFile from '../../components/inputFiles/InputFile';

const RegistroIncidente = () => {
  const [titulo, setTitulo] = useState('');
  const [nivel, setNivel] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [tipo, setTipo] = useState('');


  const niveles = ['Urgente', 'Alto', 'Medio', 'Bajo']
  const ubicaciones = ['Departamento propio', 'Pasillo', 'Lavanderia', 'Ascensor']
  const tiposIncidentes = ['Electrico', 'Fluvial', 'Gaseoso']

  return (
    <main className='s_incidente-form'>
      <form className='incidente-form'>
        <header className='incidente-form-header'>
          <h2>Reportar Nueva Incidencia</h2>
          <h5>Complete el formulario para registrar un nuevo reporte.</h5>
        </header>
        <div className="incidente-form-campos">
          <InputForm label_text={'Título'} input_id={'titulo'} input_name={'titulo'} input_type={'text'} input_value={titulo} set_input_value={setTitulo} input_placeholder={'Ej. Fuga de gas'} />
          <div className="incidente-campos-textarea">
            <label htmlFor="description">Descripcion</label>
            <textarea name="description" id="description" placeholder='Ej. El olor a gas proveniente de la tuberia cerca a la entrada es muy notorio'></textarea>
          </div>
          <div className="incidente-campos-select">
            <Select label_text={'Nivel de la incidencia'} options={niveles} default_option={''} select_id={'nivel'} select_name={'nivel'} select_value={nivel} select_set_value={setNivel} />
            <Select label_text={'Ubicacion'} options={ubicaciones} default_option={''} select_id={'ubicacion'} select_name={'ubicacion'} select_value={ubicacion} select_set_value={setUbicacion} />
            <Select label_text={'Tipo de incidente'} options={tiposIncidentes} default_option={''} select_id={'tipo-incidente'} select_name={'tipo-incidente'} select_value={tipo} select_set_value={setTipo} />
          </div>
          <InputFile label_text={'Adjunte archivos (Fotos/videos)'}/>
        </div>
        <button className='incidente-form-btn'>Registrar Incidente</button>
      </form>
    </main>
  )
}

export default RegistroIncidente
