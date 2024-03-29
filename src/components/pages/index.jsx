import React, { useEffect, useState } from 'react'
import Header from '../partials/header'
import MenuLateral from '../partials/menu-lateral'
import Home from './home/home'
import About from './home/about'
import Projects from './home/projects'
import Techs from './home/techs'
import CtaProject from './home/cta-project'
import Footer from '../partials/footer'

const Index = ({ projects, activeSection, setActiveSection, goToSection }) => {

    return(
        <>
            <Header
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            goToSection={goToSection}/>
            <MenuLateral
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
            <Projects projects={projects}/>
            <Techs/>
            <CtaProject/>
            <Footer/>
        </>
    )
}

export default Index