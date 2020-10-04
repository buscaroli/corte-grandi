import React from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'

import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Homepage from './Homepage'
import Aboutpage from './Aboutpage'
import Contactspage from './Contactspage'
import Pets from './Pets'

const App = () => {
    return(
        <div className='app-container'>
            <BrowserRouter>
                <Navbar />
                <Header />
                <Route path='/' exact component={Homepage} />
                <Route path='/about' component={Aboutpage} />
                <Route path='/contacts' component={Contactspage} />
                <Route path='/pets' component={Pets} />
                <Footer />
            </BrowserRouter>
        </div>
    )

}

export default App