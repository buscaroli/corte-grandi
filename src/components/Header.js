import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/images/diamond.png'

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
                <div className='header__logo'>
                    <img src={logo} alt='diamond logo'/>
                </div>
                <h1 className='header__title'>
                    La Corte dei Grandi
                </h1>
                <h2 className='header__subtitle'>
                    Allevamento cinofilo per la selezione del <span>Cavalier King Charles Spaniel</span>
                </h2>    
        </div>
    )
}

export default Header
