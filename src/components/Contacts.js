import React from 'react'
import Header from './Header'
import { IconContext } from 'react-icons'
import { FaFacebook } from 'react-icons/fa'


const Contacts = () => {
    const icon_link = () => {
        return (
            <a href='https://www.facebook.com/lacortedeigrandi/' target='_blank' rel="noopener noreferrer">
                <IconContext.Provider value={{style: {color: 'lightskyblue', fontSize: '3rem'}}}>
                    <div>
                        <FaFacebook />
                    </div> 
                </IconContext.Provider>
            </a>
        )
    }

    return (
        <div>
            <Header />
            <div className='contacts'>
                <div className='contacts__text'>
                    <p className='contacts__text--intro'>
                        Avete visto il cane dei vostri sogni o volete ulteriori informazioni? Se volete contattarci lo potete fare tramite la nostra pagina <span>Facebook {icon_link()}</span>, li' potrete trovare tutte le informazioni che cercate.
                    </p>
                    <p>
                        Vi contatteremo al piu' presto!
                    </p>
                </div>
                <div className='contacts__map'>
                    <iframe className='contacts__map--iframe'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts