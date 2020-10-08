import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import Pets from './Pets'

const App = () => {
    return(
        <div className='app'>
            <BrowserRouter>
                <Navbar />
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/pets' component={Pets} />
                <Footer />
            </BrowserRouter>
        </div>
    )

}

export default App