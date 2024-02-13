import React, { useState, useEffect } from 'react'
import Header from '../partials/header'
import Home from './home/home'
import About from './home/about'
import Projects from './home/projects'
import Techs from './home/techs'
import Footer from '../partials/footer'

const Index = () => {

    const [activeSection, setActiveSection] = useState('')

    const goToSection = (e) => {
        const href = e.target.closest('a').getAttribute('href').substring(1)
        setActiveSection(href)
        const section = document.querySelector(`section[data-section="${href}"]`)
    
        if (section) {
            const offsetTop = section.offsetTop - 20
    
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }

    return(
        <>
            <Header
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            goToSection={goToSection}/>
            <Home
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            goToSection={goToSection}/>
            <About
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            goToSection={goToSection}/>
            <Projects/>
            <Techs/>
            <Footer/>
        </>
    )
}

export default Index