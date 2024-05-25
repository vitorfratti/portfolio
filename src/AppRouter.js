import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/partials/header'
import MenuLateral from './components/partials/menu-lateral'
import Footer from './components/partials/footer'
import HomeIndex from './components/pages/index';
import Single from './components/pages/single/single';

const AppRouter = () => {
    
    const [activeSection, setActiveSection] = useState('home')

    const goToSection = (e) => {
        const href = e.target.closest('a').getAttribute('href').substring(1)
        setActiveSection(href)
        const section = document.querySelector(`section[data-section="${href}"]`)
        let difference

        if(window.innerWidth < 650) {
            difference = 40
        } else {
            difference = 45
        }
    
        if (section) {
            const offsetTop = section.offsetTop - difference
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects([
            {
                id: 1,
                name: 'Ecoa Energias Renováveis',
                slug: 'ecoa-energias-renovaveis',
                description: 'Site institucional + Blog integrado. 100% desenvolvido por mim.',
                imageSrc: '/images/ecoa/ecoa-banner.png',
                videoSrc: '/images/ecoa/ecoa-banner.mp4',
                type: 'Corporativo',
                link: 'https://ecoaenergias.com.br/',
                repositoryLink: '',
                techs: [
                    {
                        name: 'jQuery',
                        iconSrc: '/images/svg/jquery.svg'
                    },
                    {
                        name: 'Sass',
                        iconSrc: '/images/svg/sass.svg'
                    },
                    {
                        name: 'WordPress',
                        iconSrc: '/images/svg/wordpress.svg'
                    }
                ]
            },
            {
                id: 2,
                name: 'Marmello Studio',
                slug: 'marmello-studio',
                description: '🇺🇸 Site institucional + Portfólio de projetos. 100% desenvolvido por mim.',
                imageSrc: '/images/marmello/marmello-banner.png',
                videoSrc: '/images/marmello/marmello-banner.mp4',
                type: 'Corporativo',
                link: 'https://marmellostudio.com/',
                repositoryLink: '',
                techs: [
                    {
                        name: 'jQuery',
                        iconSrc: '/images/svg/jquery.svg'
                    },
                    {
                        name: 'Sass',
                        iconSrc: '/images/svg/sass.svg'
                    },
                    {
                        name: 'WordPress',
                        iconSrc: '/images/svg/wordpress.svg'
                    }
                ]
            },
            {
                id: 3,
                name: 'Szoma',
                slug: 'szoma',
                description: 'Site institucional + Portfólio de projetos. 100% desenvolvido por mim.',
                imageSrc: '/images/szoma/szoma-banner.png',
                videoSrc: '/images/szoma/szoma-banner.mp4',
                type: 'Corporativo',
                link: 'https://szoma.com.br/',
                repositoryLink: '',
                techs: [
                    {
                        name: 'jQuery',
                        iconSrc: '/images/svg/jquery.svg'
                    },
                    {
                        name: 'Sass',
                        iconSrc: '/images/svg/sass.svg'
                    },
                    {
                        name: 'WordPress',
                        iconSrc: '/images/svg/wordpress.svg'
                    }
                ]
            },
            {
                id: 4,
                name: 'Matrix',
                slug: 'matrix',
                description: '🇧🇷 🇪🇸 Site institucional + Catálogo de produtos. 100% desenvolvido por mim.',
                imageSrc: '/images/matrix/matrix-banner.png',
                videoSrc: '/images/matrix/matrix-banner.mp4',
                type: 'Corporativo',
                link: 'https://matrixpolimeros.com/',
                repositoryLink: '',
                techs: [
                    {
                        name: 'jQuery',
                        iconSrc: '/images/svg/jquery.svg'
                    },
                    {
                        name: 'Sass',
                        iconSrc: '/images/svg/sass.svg'
                    },
                    {
                        name: 'WordPress',
                        iconSrc: '/images/svg/wordpress.svg'
                    }
                ]
            },
            {
                id: 5,
                name: 'ControlPAGE',
                slug: 'controlpage',
                description: 'Plataforma interna para franquias da "Cartão de TODOS". Front-end desenvolvido por mim.',
                imageSrc: '/images/controlpage/controlpage-banner.png',
                videoSrc: '/images/controlpage/controlpage-banner.mp4',
                type: 'Pessoal',
                link: 'https://www.controlpagebr.com/',
                repositoryLink: '',
                techs: [
                    {
                        name: 'Django',
                        iconSrc: '/images/svg/django.svg'
                    },
                    {
                        name: 'jQuery',
                        iconSrc: '/images/svg/jquery.svg'
                    },
                    {
                        name: 'Sass',
                        iconSrc: '/images/svg/sass.svg'
                    },
                ]
            },
            {
                id: 6,
                name: 'Order Control',
                slug: 'order-control',
                description: 'Plataforma de controle de pedidos c/ autenticação + dashboard. 100% desenvolvido por mim.',
                imageSrc: '/images/order-control/order-control-banner.png',
                videoSrc: '/images/order-control/order-control-banner.mp4',
                type: 'Pessoal',
                link: '',
                repositoryLink: 'https://github.com/vitorfratti/order-control',
                techs: [
                    {
                        name: 'React',
                        iconSrc: './images/svg/react.svg'
                    },
                    {
                        name: 'Node.js',
                        iconSrc: './images/svg/node.svg'
                    }
                ]
            }
        ])
    }, [])

    return (
        <>
            <Header
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            goToSection={goToSection}/>
            <MenuLateral
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            goToSection={goToSection}/>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <HomeIndex
                        projects={projects}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                        goToSection={goToSection}/>
                    }/>
                    <Route path="/projetos/:slug" element={
                        <Single
                        projects={projects}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                        goToSection={goToSection}/>
                    }/>
                </Routes>
            </Router>
            <Footer/>
        </>
    );
};

export default AppRouter;
