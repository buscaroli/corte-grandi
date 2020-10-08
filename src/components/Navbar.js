import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FaFacebook } from 'react-icons/fa'

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbar__items'>
                <li className='navbar__item navbar__items--1'><Link to='/'>Home</Link></li>
                <li className='navbar__item navbar__items--2'><Link to='/about'>Chi Siamo</Link></li>
                <li className='navbar__item navbar__items--3'><Link to='/pets'>Cuccioli</Link></li>
                <li className='navbar__item navbar__items--4'><Link to='/contacts'>Contatti</Link></li>
                <li className='navbar__item navbar__items--5'>
                    <a href='https://www.facebook.com/lacortedeigrandi/' target='_blank'>
                        <IconContext.Provider value={{style: {color: 'dodgerblue', fontSize: '4rem'}}}>
                            <div>
                                <FaFacebook />
                            </div> 
                        </IconContext.Provider>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
