import React from 'react';
import misionImagen from '../assets/images/mision.jpeg';
import './mision.css' // CSS 
import { MdOutlineWork } from "react-icons/md"; // ICONO

const Mision = () => {
    return (
        <div className="container_mision">
            <div className="contenido">
            <div className="imagen_fundacion">
                <img src={misionImagen} alt="Imagen de graduados de la Fundación CEPAV"/>
            </div>
            <div className="texto_mision">
            <div className="nuestra_historia">
                <h1>Nuestra Historia</h1>
                <p>Somos una organización no gubernamental sin fines de lucro que nació a inicios de 2023 con el propósito de ayudar a las personas, generando posibilidades de crecimiento personal y profesional.</p>
                <p>Reconocemos que la sociedad enfrenta desafíos sociales y económicos constantes, reconocemos la importancia de extender una mano amiga a quienes luchan por sacar adelante a sus familias y a aquellos jóvenes y niños que anhelan oportunidades para crecer y desarrollarse en el mercado laboral.</p>
            </div>
            <div className="nuestra_mision">
                <h1>Nuestra Misión</h1>
                <p>Nuestra organización tiene como meta brindar un apoyo completo que incluya el empoderamiento de las mujeres, el bienestar de los niños y la educación de los jóvenes de nuestra comunidad.</p>
                <p>Podemos especial atención en capacitar en habilidades necesarias en el mercado laboral, como el marketing digital y el desarrollo de software, con el objetivo de facilitar la inserción de estas personas en empresas aliadas.</p>
            </div>
            </div>
            </div>
            <div className="nuestros_pilares">
                <h1>Nuestros Pilares</h1>
                <div className="tarjetas">
                    <div className="tarjeta">
                    <span className="icono-work">
                        <MdOutlineWork/>
                    </span>
                    <div className="descripcion">
                        <h2>Empleabilidad</h2>
                        <p>Buscamos fortalecer la independencia económica y habilidades profesionales de nuestros estudiantes, de manera que puedan ubicarse en el mercado laboral.</p>
                    </div>
                    </div>
                    <div className="tarjeta">
                    <span className="icono-work">
                        <MdOutlineWork/>
                    </span>
                    <div className="descripcion">
                        <h2>Formación</h2>
                        <p>Buscamos fortalecer la independencia económica y habilidades profesionales de nuestros estudiantes, de manera que puedan ubicarse en el mercado laboral.</p>
                    </div>
                    </div>
                    <div className="tarjeta">
                    <span className="icono-work">
                        <MdOutlineWork/>
                    </span>
                    <div className="descripcion">
                        <h2>Innovación</h2>
                        <p>Buscamos fortalecer la independencia económica y habilidades profesionales de nuestros estudiantes, de manera que puedan ubicarse en el mercado laboral.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mision;