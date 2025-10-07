import './timeLine.css';
import { Timeline } from 'primereact/timeline';


export default function TimelineCmp({ creacion = '-', proceso = '-', cerrado = '-' }) {

    const events = [
        { status: 'Ticket Creado', date: creacion},
        { status: 'En Proceso', date: proceso},
        { status: 'Cerrado', date: cerrado },
    ];

    const $procesos = document.getElementsByClassName('p-timeline-event-marker');
    if (creacion != '-') $procesos.item(0)  && $procesos.item(0).classList.add('primero')

    return (
        <div className="card">
            <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="text-color-secondary">{item.date}</small>} />
        </div>
    )
}
