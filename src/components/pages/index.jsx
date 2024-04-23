import React, { useEffect, useState } from 'react'
import Header from '../partials/header'
import MenuLateral from '../partials/menu-lateral'
import Home from './home/home'
import About from './home/about'
import Projects from './home/projects'
import Experiences from './home/experiences'
import Techs from './home/techs'
import Cta from './home/cta'
import Footer from '../partials/footer'

const Index = ({ projects, activeSection, setActiveSection, goToSection }) => {

    return(
        <>
            <Home
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            goToSection={goToSection}/>
            <About/>
            <Projects projects={projects}/>
            <Experiences/>
            <Techs/>
            <Cta/>
        </>
    )
}

export default Index