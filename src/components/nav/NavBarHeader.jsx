import './navbarheader.css'

import { Link } from 'react-router-dom';

export default function NavBarHeader({ opciones, set_page}) {
    
    const appearNav = (e) => {
        const $nav = document.querySelector('.nav-list');
        const $icon = document.getElementById('nav-icon');
        const $items = document.getElementsByClassName('.nav-list-container');
        $nav.classList.toggle('nav-list-appear');
        if ($nav.classList.contains('nav-list-appear')) {
            $icon.classList.remove('pi-bars');
            $icon.classList.add('pi-times');
        } else {
            $icon.classList.remove('pi-times');
            $icon.classList.add('pi-bars');
        }
    }

    const hideNav = () => {
        const $nav = document.querySelector('.nav-list');
        const $icon = document.getElementById('nav-icon');
        $nav.classList.remove('nav-list-appear');
        $icon.classList.remove('pi-times');
        $icon.classList.add('pi-bars');
    }


    return (
        <nav className='nav'>
            <i id='nav-icon' className='pi pi-bars' onClick={appearNav}></i>
            <div className="nav-logo">
                <h3>Abitare</h3>
            </div>
            <ul className="nav-list">
                {opciones.map(opcion => (
                    <Link to={`/${opcion.valor}`} style={{textDecoration:'none', color:'#000'}}>
                        <div className='nav-list-container' onClick={hideNav}>
                            <i className={opcion.icono}></i>
                            <li>{opcion.nombre}</li>
                        </div>
                    </Link>
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
