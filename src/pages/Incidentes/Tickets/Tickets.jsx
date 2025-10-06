import './tickets.css';

import { useState } from 'react'
import { Link } from 'react-router';
import InputForm from '../../../components/input/InputForm'
import Select from '../../../components/select/Select';

const Tickets = () => {

    const [search, setSearch] = useState('');
    const [prioridad, setPrioridad] = useState('')
    const [estado, setEstado] = useState('');

    const titulosTabla = ['ID', 'TITULO', 'FECHA', 'PRIORIDAD', 'ESTADO', 'TÉCNICO'];
    const filas = [
        {
            id: "#12345",
            titulo: "Fuga en el baño del departamento 201",
            fecha: "2025-10-03",
            prioridad: "Alta",
            estado: "Pendiente",
            tecnico:"Carlos P."
        }, {
            id: "#12345",
            titulo: "Fuga en el baño del departamento 201",
            fecha: "2025-10-03",
            prioridad: "Alta",
            estado: "Pendiente",
            tecnico: "Carlos P."
        }, {
            id: "#12345",
            titulo: "Fuga en el baño del departamento 201",
            fecha: "2025-10-03",
            prioridad: "Urgente",
            estado: "Pendiente",
            tecnico: "Carlos P."
        }, {
            id: "#12345",
            titulo: "Fuga en el baño del departamento 201",
            fecha: "2025-10-03",
            prioridad: "Media",
            estado: "Pendiente",
            tecnico: "Carlos P."
        },
    ]


    return (
        <main className='s_tickets'>
            <div className="s_tickets-container">
                <header className='tickets-header'>
                    <h1>Tickets</h1>
                    <Link to={'reporte'}>
                        <button className='tickets-header-btn'>
                            <i className='pi pi-plus '></i>
                            <span>Reportar nuevo incidente</span>
                        </button>
                    </Link>
                </header>
                <section className="tickets-tickets">
                    <div className="tickets-tickets-options">
                        <div className="tickets-options-search">
                            <InputForm input_id={'search'} input_name={'search'} input_placeholder={'Buscar por ID, Titulo ...'} input_type={'text'} input_value={search} set_input_value={setSearch} className={'search-input'} />
                        </div>
                        <div className="tickets-options-order">
                            <Select default_option={'Prioridad'} options={['Urgente', 'Alto', 'Medio', 'Bajo']} select_id={'prioridad'} select_name={'prioridad'} select_set_value={setPrioridad} select_value={prioridad} className={'select-search'} />
                            <Select default_option={'Estado'} options={['Pendiente', 'En proceso', 'Resuelto']} select_id={'estado'} select_name={'estado'} select_set_value={setEstado} select_value={estado} className={'select-search'} />
                        </div>
                    </div>
                    <div className="tabla-container">
                        <table className='tickets-tickets-info'>
                            <thead className='tickets-info-header'>
                                <tr>
                                    {titulosTabla.map(e => (
                                        <th className='tickets-header-head'>{e}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className='tickets-info-body'>
                                {filas.map(fila => (
                                    <tr>
                                        <td><span className='tickets-body-id' onClick={()=>set_page('incidentes')}>{fila.id}</span></td>
                                        <td>{fila.titulo}</td>
                                        <td>{fila.fecha}</td>
                                        <td><span className='tickets-body-field'>{fila.prioridad}</span></td>
                                        <td><span className='tickets-body-field'>{fila.estado}</span></td>
                                        <td>{fila.tecnico}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Tickets
