import React from 'react'
import { Link } from 'wouter'
import Style from './style.module.css'

function Menu() {
  return (
    <nav className={Style.menuWrapper}>
        <ul className={Style.menu}>
            <li className={Style.menuItem}>
              <Link href='/'>Inicio</Link>
            </li>
            <li className={Style.menuItem}>
              <Link href='/cursos'>Cursos</Link>
            </li>
            <li className={Style.menuItem}>
              <Link href='/talleres'>Talleres</Link>
            </li>
            <li className={Style.menuItem}>
              <Link href='/donaciones'>Donaciones</Link>
            </li>
            <li className={Style.menuItem}>
              <Link href='/mision'>Mision</Link>
            </li>
            <li className={Style.menuItem}>
                <a href='#'>Registrarse</a>
            </li>
        </ul>
    </nav>
  )
}

export default Menu