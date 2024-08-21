import React from 'react'
import Style from './style.module.css'

function ProgrammesCard({ title, description, parragraph, buttonText, children }) {
    return (
        <div className={Style.WrapperProgrammesCard}>
            <h2 className={Style.title}>{title}</h2>
            {children}
            <span className={Style.description}>{description}</span>
            <p className={Style.parragraph}>{parragraph}</p>
            <button className={Style.button}>{buttonText}</button>
        </div>
    )
}

export default ProgrammesCard