import React from 'react'
import IconClose from '../../../assets/icon-close.svg'

import Style from './style.module.css'

function MenuMobile() {
    return (
        <nav className={Style.wrapperMenuMobile}>
            <img className={Style.closeMenuMobile} src={IconClose} alt="Close menu" width={24} height={24} />
            <ul className={Style.menu}>
                <li className={Style.menuItem}>Inicio</li>
                <li className={Style.menuItem}>Cursos</li>
                <li className={Style.menuItem}>Talleres</li>
                <li className={Style.menuItem}>Donaciones</li>
                <li className={Style.menuItem}>
                    <a href='#'>Registrarse</a>
                </li>
            </ul>
        </nav>
    )
}

export default MenuMobile