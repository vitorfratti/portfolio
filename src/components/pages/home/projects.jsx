import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Project from '../../partials/project'

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects([
            {
                id: 1,
                name: 'Ecoa Energias Renováveis',
                slug: 'ecoa-energias-renovaveis',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                imageSrc: './images/ecoa-banner.png',
                type: 'Corporativo',
                link: 'https://ecoaenergias.com.br/',
                techs: [
                    {
                        name: 'jQuery',
                        iconSrc: './images/svg/jquery.svg'
                    },
                    {
                        name: 'Sass',
                        iconSrc: './images/svg/sass.svg'
                    },
                    {
                        name: 'WordPress',
                        iconSrc: './images/svg/wordpress.svg'
                    }
                ]
            },
            {
                id: 2,
                name: 'Marmello Studio',
                slug: 'marmello-studio',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                imageSrc: './images/marmello-banner.png',
                type: 'Corporativo',
                link: 'https://marmellostudio.com/',
                techs: [
                    {
                        name: 'jQuery',
                        iconSrc: './images/svg/jquery.svg'
                    },
                    {
                        name: 'Sass',
                        iconSrc: './images/svg/sass.svg'
                    },
                    {
                        name: 'WordPress',
                        iconSrc: './images/svg/wordpress.svg'
                    }
                ]
            },
            {
                id: 3,
                name: 'ControlPAGE',
                slug: 'controlpage',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                imageSrc: './images/controlpage-banner.png',
                type: 'Pessoal',
                link: 'https://www.controlpagebr.com/',
                techs: [
                    {
                        name: 'Django',
                        iconSrc: './images/svg/django.svg'
                    },
                    {
                        name: 'jQuery',
                        iconSrc: './images/svg/jquery.svg'
                    },
                    {
                        name: 'Sass',
                        iconSrc: './images/svg/sass.svg'
                    },
                ]
            }
        ])
    }, [])

    return(
        <ProjectsContent data-section="projetos">
            <div className="container">
                <div className="title">
                    <h2>Projetos</h2>
                    <p>Alguns dos projetos onde são aplicados meus conhecimentos.</p>
                </div>
                <div className="projects">
                    {projects.map((project, index) => (
                        <Project
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        imageSrc={project.imageSrc}
                        type={project.type}
                        link={project.link}
                        techs={project.techs}/>
                    ))}
                </div>
                <div className="link">
                    <a href="https://github.com/vitorfratti?tab=repositories" target="_blank">
                        Ver repositórios do GitHub
                    </a>
                </div>
            </div>
        </ProjectsContent>
    )
}

export default Projects

const ProjectsContent = styled.section`
    position: relative;
    width: 100%;
    background: #08090a;
    padding: 5rem 0 2.5rem 0;

    .container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: 100%;

        .title {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            h2 {
                font-size: 2.5rem;
                font-weight: 600;
                color: #FEFEFE;
            }

            p {
                font-size: 1.25rem;
                font-weight: 500;
                color: #A2A1A7;
            }
        }

        .projects {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
        }

        .link {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1.5rem;

            a {
                position: relative;
                font-size: 1.25rem;
                font-weight: 600;
                color: #3c4adb;
                text-decoration: none;

                &::before {
                    content: '';
                    width: 0;
                    height: 2px;
                    border-radius: 2px;
                    background-color: #3c4adb;
                    position: absolute;
                    bottom: -.25rem;
                    right: 0;
                    transition: right .4s, width .4s, left .4s;
                }

                &:hover::before {
                    width: 100%;
                    left: 0;
                }
            }
        }
    }
`;