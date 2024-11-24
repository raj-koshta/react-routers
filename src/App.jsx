import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route exact path='/home' Component={Home} /> 
                <Route exact path='/about_us' Component={AboutUs} /> 
                <Route exact path='/contact_us' Component={ContactUs} /> 
            </Routes>
        </>
    )
}

export default App
