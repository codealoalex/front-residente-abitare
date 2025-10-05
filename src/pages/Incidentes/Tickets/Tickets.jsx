import './tickets.css';

import { useState } from 'react'
import InputForm from '../../../components/input/InputForm'
import Select from '../../../components/select/Select';

const Tickets = () => {

    const [search, setSearch] = useState('');
    const [prioridad, setPrioridad] = useState('')
    const [estado, setEstado] = useState('');


    return (
        <main className='s_tickets'>
            <div className="s_tickets-container">
                <header className='tickets-header'>
                    <h1>Tickets</h1>
                    <button className='tickets-header-btn'>
                        <i className='pi pi-plus '></i>
                        <span>Reportar nuevo incidente</span>
                    </button>
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
                </section>
            </div>
        </main>
    )
}

export default Tickets
