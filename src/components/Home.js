import React from 'react'
import Header from './Header'
import pic1 from '../assets/images/home/home-pic1.jpg'
import pic2 from '../assets/images/home/home-pic2.jpg'
import pic3 from '../assets/images/home/home-pic3.jpg'

const Homepage = () => {
    return (
        <div>
            <Header />
            <div className='home'>
                <div className='home__pic'><img className='home__pic--1' src={pic1} alt='logo fci'/></div>
                <div className='home__text home__text--1'>De tierra come larga mármol manos muerte pensamiento de los, <span>pensamiento del atrás se donde</span>. Muelles quedo cosas nino manos. Me quedo ballenas ciudades con plata tierra. La escaleras donde manos manteles los de, los quemadas todo amor inocentes, signos.</div>
                <div className='home__text home__text--2'>Des l'orgueil cloués poussifs les cotons. D'or zones îles et comme lames quand, cotons des <span>cataractant cataractant j'ai vers</span>. Aux des moi ivre insoucieux des gouffres sous fond faisait. <span>Nager je lactescent les de juillets or sanglot moi</span>, cieux sur.</div>
                <div className='home__pic'><img className='home__pic--2' src={pic2} alt='logo fci'/></div>
                <div className='home__pic'><img className='home__pic--3' src={pic3} alt='logo fci'/></div>
                <div className='home__text home__text--3'>Esperienza da di di che suo per, l'acume di propria nondimeno il alla seguitando propria ma come, <span>noi priegano intendo e fermi oportune prestasse al coloro nostr</span>a, i quali ora tale di udita oppinione. Siamo medesimi benignita e sí trapassare.</div>
            </div>
        </div>
        
    )
}

export default Homepage
