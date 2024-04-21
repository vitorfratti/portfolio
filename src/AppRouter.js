import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Index from './components/pages/index';
import Single from './components/pages/single/single';

const AppRouter = () => {
    
    const [activeSection, setActiveSection] = useState('home')

    const goToSection = (e) => {
        const href = e.target.closest('a').getAttribute('href').substring(1)
        setActiveSection(href)
        const section = document.querySelector(`section[data-section="${href}"]`)
    
        if (section) {
            const offsetTop = section.offsetTop - 40
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
                gallery: [
                    {
                        src: '/images/ecoa/ecoa-1.png'
                    },
                    {
                        src: '/images/ecoa/ecoa-2.png'
                    },
                    {
                        src: '/images/ecoa/ecoa-3.png'
                    },
                    {
                        src: '/images/ecoa/ecoa-4.png'
                    }
                ],
                type: 'Corporativo',
                link: 'https://ecoaenergias.com.br/',
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
                description: 'Site institucional + Portfólio de projetos. 100% desenvolvido por mim.',
                imageSrc: '/images/marmello/marmello-banner.png',
                videoSrc: '/images/marmello/marmello-banner.mp4',
                gallery: [
                    {
                        src: '/images/marmello/marmello-1.png'
                    },
                    {
                        src: '/images/marmello/marmello-2.png'
                    },
                    {
                        src: '/images/marmello/marmello-3.png'
                    },
                    {
                        src: '/images/marmello/marmello-4.png'
                    },
                    {
                        src: '/images/marmello/marmello-5.png'
                    }
                ],
                type: 'Corporativo',
                link: 'https://marmellostudio.com/',
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
                name: 'ControlPAGE',
                slug: 'controlpage',
                description: 'Plataforma interna para franquias da empresa "Cartão de TODOS". Front-end desenvolvido por mim.',
                imageSrc: '/images/controlpage/controlpage-banner.png',
                videoSrc: '/images/controlpage/controlpage-banner.mp4',
                gallery: [
                    {
                        src: '/images/ecoa/ecoa-1.png'
                    },
                    {
                        src: '/images/ecoa/ecoa-2.png'
                    },
                    {
                        src: '/images/ecoa/ecoa-3.png'
                    },
                    {
                        src: '/images/ecoa/ecoa-4.png'
                    }
                ],
                type: 'Pessoal',
                link: 'https://www.controlpagebr.com/',
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
            }
        ])
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <Index
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
    );
};

export default AppRouter;
