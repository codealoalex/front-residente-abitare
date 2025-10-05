import Carrusel from '../../../components/carrusel/Carrusel';
import TimelineCmp from '../../../components/timeline/Timeline';
import './ticketPage.css';

const TicketPage = () => {
    const info = {
        numero: 12345,
        ubicacion: 'Apartamento 302',
        prioridad: 'urgente',
        descripcion: 'Lorem jdkafjajdifajfjiajfiasojfiojasifjs ajskfjkasjlkfj asfj kasjf akslfj asklfj l.',
        resumen: 'Lorem jdkafjajdifajfjiajfiasojfiojasifjs ajskfjkasjlkfj asfj kasjf akslfj asklfj l. jdkafjajdifajfjiajfiasojfiojasifjs ajskfjkasjlkfj asfj kasjf akslfj asklfj l.',
        estado: {
            estado: 'Cerrado',
            descripcion: 'El trabajo ha sido completado'
        },
        ticketInfo: {
            creacion: {
                fecha: '2024-10-03',
                hora: '10:00'
            },
            proceso: {
                fecha: '2024-10-03',
                hora: '10:00'
            },
            finalizacion: {
                fecha: '2024-10-03',
                hora: '10:00'
            },
        }
    }

    const estado = ['rojo', 'verde', 'naranja']
    
    return (
        <main className='s_ticket-page'>
            {/* <h1 className='s_ticket-page-title'>Hola mundo</h1> */}
            <section className='s_ticket-page-details'>
                <article className='s_ticket-details-info'>
                    <header className='s_ticket-details-header'>
                        <h2>Detalle del Ticket #{info.numero}</h2>
                        <span className={info.prioridad.toLowerCase()=="urgente"?'estado-rojo':info.prioridad.toLowerCase()=="medio"?'estado-naranja':'estado-verde'}>
                            {info.prioridad}
                        </span>
                    </header>
                    <div className='ticket-info-c1'>
                        <div>
                            <h4>ID del ticket</h4>
                            <p>{info.numero}</p>
                        </div>
                        <div>
                            <h4>Ubicacion</h4>
                            <p>{info.ubicacion}</p>
                        </div>
                    </div>
                    <div className='ticket-info-c2'>
                        <h4>Descripcion</h4>
                        <p>{info.descripcion}</p>
                    </div>
                    <div className='ticket-info-c3'>
                        <h3>Fotos adjuntas</h3>
                        <div className='ticket-info-c3-images'>
                            <div className="ticket-info-image">

                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrEilm311fNJO_QotjhwgUZmT6oB37xYoYh9ogGU8oczW7zTTzLO2CfjF7j9l0zv1E2sE0R26k3bpbGsmjx5jUByRPw62CskSfB6iNmQc" alt="Foto 1" />
                            </div>
                            <div className="ticket-info-image">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrEilm311fNJO_QotjhwgUZmT6oB37xYoYh9ogGU8oczW7zTTzLO2CfjF7j9l0zv1E2sE0R26k3bpbGsmjx5jUByRPw62CskSfB6iNmQc" alt="Foto 1" />
                            </div>
                        </div>
                        {/* <Carrusel/> */}
                    </div>
                </article>
                <article className='s_ticket-details-resume'>
                    <h3>Resumen del trabajo realizado</h3>
                    <p>{info.resumen}</p>
                </article>
                <article className='s_ticket-details-validate'>
                    <h3>Validacion y Conformidad</h3>
                    <p></p>
                </article>
            </section>
            <section className='s_ticket-page-progression'>
                <article className='s_ticket-progression-state'>
                    <h3>Estado del Ticket</h3>
                    <div className='ticket-state-c1'>
                        <i className='pi pi-check-circle'></i>
                        <div className='ticket-state-c1-c1'>
                            <h4>{info.estado.estado}</h4>
                            <p>{info.estado.descripcion}</p>
                        </div>
                    </div>
                </article>
                <article className='s_ticket-progression-progress'>
                    <h3>Seguimiento del Ticket</h3>
                    <TimelineCmp />
                </article>
            </section>
        </main>
    )
}

export default TicketPage
