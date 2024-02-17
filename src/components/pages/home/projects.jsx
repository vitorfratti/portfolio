import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import Project from '../../partials/project'

const Projects = ({ projects }) => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 2500
        })
    }, [])

    let settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    infinite: true
                }
            }
        ]
    }

    return(
        <ProjectsContent data-section="projetos">
            <div className="container">
                <div className="title" data-aos="fade-up">
                    <h2>Projetos</h2>
                    <p>Alguns dos projetos onde são aplicados meus conhecimentos.</p>
                </div>
                <div className="projects" data-aos="fade-up">
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <Project
                            key={project.id}
                            name={project.name}
                            slug={project.slug}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            type={project.type}
                            link={project.link}
                            techs={project.techs}/>
                        ))}
                    </Slider>
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
    z-index: 10;
    width: 100%;
    background: #08090a;
    padding: 5rem 0 2.5rem 0;

    @media (max-width: 500px) {
        padding: 2.5rem 0;
    }

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

            .slick-slider {
                width: 100%;
                height: auto;

                .slick-list {
                    width: 100%;

                    .slick-track {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        gap: 1rem;
                    }
                }
            }
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
                color: #FEFEFE;
                text-decoration: none;

                &::before {
                    content: '';
                    width: 0;
                    height: 2px;
                    border-radius: 2px;
                    background-color: #FEFEFE;
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