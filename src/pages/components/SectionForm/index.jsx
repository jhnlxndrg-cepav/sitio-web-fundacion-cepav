import React from 'react'
import CustomForm from '../CustomForm'
import Styles from './style.module.css'

function SectionForm() {
    return (
        <div className={Styles.containerSectionForm}>
            <div className={Styles.leftContainerSectionForm}>
                <h2 className={Styles.titleLeftSectionForm}>¡Únete a nuestra comunidad y transforma tu vida!</h2>
                <span className={Styles.subTextLeftSectionForm}>Descubre programas que te ayudarán a crecer, aprender y transformar tu vida.
                    Al unirte a nosotros, tendrás acceso a:</span>
                <ul className={Styles.listSectionForm}>
                    <li className={Styles.listItemSectionForm}>
                        <span className={Styles.itemTitleText}>¡Aprende y Ayuda!:</span> Da el primer paso hacia un futuro mejor y ayuda a otros en el camino.
                    </li>
                    <li className={Styles.listItemSectionForm}>
                        <span className={Styles.itemTitleText}>Transformación Personal:</span> Descubre tu valor y desarrolla tu potencial con “El arte de amarte”.
                    </li>
                    <li className={Styles.listItemSectionForm}>
                        <span className={Styles.itemTitleText}>Formación en Programación:</span> Explora el mundo de la tecnología y encuentra una nueva forma de expresión creativa.
                    </li>
                </ul>
                <h3 className={Styles.subTitleSectionForm}>¿Por qué registrarte?</h3>
                <ul className={Styles.listSectionForm}>
                    <li className={Styles.listItemSectionForm}>
                        <span className={Styles.itemTitleText}>Crecimiento Personal:</span> Aprende habilidades valiosas y gana confianza en ti mismo.
                    </li>
                    <li className={Styles.listItemSectionForm}>
                        <span className={Styles.itemTitleText}>Impacto Positivo:</span> Contribuye a crear infancias más felices y comunidades más fuertes.
                    </li>
                    <li className={Styles.listItemSectionForm}>
                        <span className={Styles.itemTitleText}>Oportunidades de Liderazgo:</span> Conviértete en un ejemplo a seguir y lidera con compasión y conocimiento.
                    </li>
                </ul>
            </div>
            <div className={Styles.rightContainerSectionForm}>
                <h2 className={Styles.titleRightSectionForm}>¡Inscríbete ahora y sé parte del cambio!</h2>
                <CustomForm />
            </div>
        </div>
    )
}

export default SectionForm