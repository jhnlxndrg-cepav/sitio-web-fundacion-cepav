import React from 'react'

import Styles from './style.module.css'

function Footer() {
    return (
        <footer>
            <div>
                <h2>Quienes somos</h2>
                <ul>
                    <li>Misión</li>
                    <li>Visión</li>
                    <li>Informacion jurídica</li>
                </ul>
            </div>
            <div>
                <h2>Contacto</h2>
                <ul>
                    <li>Teléfono: +57 3118004609</li>
                    <li>Dirección: Cra 5 este 2 a 09</li>
                    <li>Correo electrónico: administracion@fundacioncepav.com</li>
                </ul>
            </div>
            <div>
                <h2>Documentos ESAL</h2>
                <ul>
                    <li>RUT</li>
                    <li>Resolución ESAL</li>
                    <li>Informe de gestión 2023</li>
                </ul>
            </div>
            <div>
                <h2>Síguenos en Redes Sociales</h2>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer