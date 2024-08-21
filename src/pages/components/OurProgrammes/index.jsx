import React from 'react'

import ProgrammesCard from '../ProgrammesCard'

import Image1 from '../ImagesSVG/Image1'
import Image2 from '../ImagesSVG/Image2'
import Image3 from '../ImagesSVG/Image3'

import Style from './style.module.css'

function OurProgrammes() {
    return (
        <div className={Style.wrapperOurProgrammes}>
            <h2 className={Style.titleOurProgrammes}>Conoce nuestros programas</h2>
            <div className={Style.wrapperProgrammesCard}>
                <ProgrammesCard
                    title={'¡Aprende y Ayuda!'}
                    description={'Transformate y logra el primer paso.'}
                    parragraph={'La formación en programación será una experiencia enriquecedora, ya que te permitirá entender cómo funcionan las tecnologías que nos rodean además de ofrecerte una forma de expresión creativa a través de la creación de software y aplicaciones…'}
                    buttonText={'Ver programa'}
                >
                    <Image1 />
                </ProgrammesCard>
                <ProgrammesCard
                    title={'¡Vale ser Transformación!'}
                    description={'Tú vales'}
                    parragraph={'Es un espacio para la transformación, generación de desafíos y búsqueda de oportunidades de crecimiento en mujeres. Ellas han demostrado ser líderes excepcionales en todos los ámbitos de la vida y continúan desafiando las expectativas y superan obstáculos…'}
                    buttonText={'Ver programa'}
                >
                    <Image2 />
                </ProgrammesCard>
                <ProgrammesCard
                    title={'“El arte de amarte”'}
                    description={'Cuando te quieres estas a otro nivel.'}
                    parragraph={'El taller “El arte de amarte” busca cambiar la idea de que el dolor, el miedo y el castigo son formas efectivas de educar. En lugar de esto el taller promueve que los niños, niñas y adolescentes puedan reconocerse a sí mismos, con el objetivo de fomentar una cultura del amor…'} 
                    buttonText={'Ver programa'}
                >
                    <Image3 />
                </ProgrammesCard>
            </div>
        </div>
    )
}

export default OurProgrammes