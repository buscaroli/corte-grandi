import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbar__items'>
                <li className='navbar__item navbar__items--1'><Link to='/'>Home</Link></li>
                <li className='navbar__item navbar__items--2'><Link to='/about'>Chi Siamo</Link></li>
                <li className='navbar__item navbar__items--3'><Link to='/pets'>Cuccioli</Link></li>
                <li className='navbar__item navbar__items--4'><Link to='/contacts'>Contatti</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
