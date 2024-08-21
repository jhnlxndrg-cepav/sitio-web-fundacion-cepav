import React from 'react'
import Menu from '../Menu'
import LogoIconPpal from '../LogoIcon1'

import Style from './style.module.css'

function Header() {
    return (
        <div className={Style.header}>
            <LogoIconPpal />
            <Menu />
        </div>
    )
}

export default Header