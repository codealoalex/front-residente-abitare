import './navbarheader.css'

export default function NavBarHeader({ opciones, set_page}) {
    
    const appearNav = () => {
        const $nav = document.querySelector('.nav-list');
        const $icon = document.getElementById('nav-icon');
        $nav.classList.toggle('nav-list-appear');
        if ($nav.classList.contains('nav-list-appear')) {
            $icon.classList.remove('pi-bars');
            $icon.classList.add('pi-times');
        } else {
            $icon.classList.remove('pi-times');
            $icon.classList.add('pi-bars');
        }
    }


    return (
        <nav className='nav'>
            <i id='nav-icon' className='pi pi-bars' onClick={appearNav}></i>
            <div className="nav-logo">
                <h3>Abitare</h3>
            </div>
            <ul className="nav-list">
                {opciones.map(opcion => (
                    <div className='nav-list-container' onClick={() => set_page(opcion.valor)}>
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
