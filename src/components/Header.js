import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
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
