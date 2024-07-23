import React from 'react'
import Style from './style.module.css'

function Menu() {
  return (
    <nav>
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

export default Menu