import './navbarheader.css'

export default function NavBarHeader({ opciones }) {
    
    const appearNav = () => {
        const $nav = document.querySelector('.nav-list');
        $nav.classList.toggle('nav-list-appear');
    }


    return (
        <nav className='nav'>
            <i className='pi pi-bars' onClick={appearNav}></i>
            <div className="nav-logo">
                <h3>Abitare</h3>
            </div>
            <ul className="nav-list">
                {opciones.map(opcion => (
                    <div className='nav-list-container'>
                        <i className={opcion.icono}></i>
                        <li>{opcion.nombre}</li>
                    </div>
                ))}
            </ul>
            <div className="nav-options">
                <i className='pi pi-bell' title='Ver notificaciones'></i>
                <div className="nav-options-avatar" title='Ver perfil'>
                    <i className='pi pi-user'></i>
                    <span>Usuario</span>
                </div>
            </div>
        </nav>
    )
}
