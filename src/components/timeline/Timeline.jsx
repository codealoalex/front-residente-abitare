import './timeLine.css';
import { Timeline } from 'primereact/timeline';

export default function TimelineCmp() {
    const events = [
        { status: 'Ticket Creado', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'En Proceso', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Cerrado', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#f00' },
    ];

    return (
        <div className="card">
            <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="text-color-secondary">{item.date}</small>} />
        </div>
    )
}
