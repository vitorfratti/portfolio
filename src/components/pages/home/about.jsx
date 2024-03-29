import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = ({ setActiveSection, activeSection, goToSection }) => {

    const [activeOption, setActiveOption] = useState('experiencia')

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 2500
        })
    }, [])

    return(
        <AboutContent data-section="sobre">
            <div className="container">
                <div className="title" data-aos="fade-up">
                    <h2>Sobre mim</h2>
                    <p>Meu nome é Vitor Fratti, tenho 20 anos e atuo como Desenvolvedor Web. Trabalho focado no desenvolvimento de interfaces de sites e plataformas com tecnologias modernas e de alta performance.</p>
                </div>
                <div className="content" data-aos="fade-up">
                    <div className="infos">
                        <div className="options-buttons">
                            <button
                            onClick={() => setActiveOption('experiencia')}
                            className={activeOption == 'experiencia' ? 'selected' : ''}>
                                Experiência Profissional
                            </button>
                            <button onClick={() => setActiveOption('formacao')}
                            className={activeOption == 'formacao' ? 'selected' : ''}>
                                Formação Acadêmica
                            </button>
                            <a
                            href="#projetos"
                            onClick={goToSection}>
                                Projetos
                            </a>
                        </div>
                    </div>
                    <div className="content-options">
                        <a href="https://hangar.digital/"
                        target="_blank"
                        className={activeOption == 'experiencia' ? 'card experiencia' : 'none'}>
                            <img src="./images/svg/hangar.svg" alt="hangar" className="hangar"/>
                            <span>
                                <p>Agência de marketing digital em Joinville, Santa Catarina</p>
                                <p>Desenvolvedor Web · abr/2023 - o momento</p>
                            </span>
                        </a>
                        <a href="https://www.catolicasc.org.br/"
                        target="_blank"
                        className={activeOption == 'formacao' ? 'card formacao' : 'none'}>
                            <img src="./images/svg/catolica.svg" alt="catolica" className="catolica"/>
                            <span>
                                <p>Centro Universitário - Católica de Santa Catarina em Joinville</p>
                                <p>Engenharia de Software - 3° semestre</p>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </AboutContent>
    )
}

export default About

const AboutContent = styled.section`
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 5rem 0 2.5rem 0;

    @media (max-width: 500px) {
        padding: 2.5rem 0;
    }

    .container {
        display: flex;
        flex-direction: column;
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

        .content {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            margin-top: 1.5rem;

            @media (max-width: 900px) {
                flex-direction: column;
                gap: 1.5rem;
            }

            .infos {
                position: relative;
                width: 50%;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                @media (max-width: 900px) {
                    width: 100%;
                }

                .options-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 100%;
                    height: 100%;

                    button, a {
                        position: relative;
                        z-index: 5;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        width: 100%;
                        height: 50%;
                        gap: 0.75rem;
                        background: #1d1e20;
                        color: #FEFEFE;
                        font-size: 1.5rem;
                        font-weight: 600;
                        border: 1px solid #1d1e20;
                        text-decoration: none;
                        opacity: 0.6;
                        transition: all .1s ease;
                        cursor: pointer;

                        @media (max-width: 900px) {
                            padding: 1.5rem 0;

                            &:last-child {
                                display: none;
                            }
                        }

                        &.selected {
                            opacity: 1;
                            background: linear-gradient(to left, #1d1e20 20%, #FEFEFE25 40%, #1d1e20 60%, #1d1e20 80%);
                            background-size: 300% auto;
                            animation: shine 5s linear infinite;
                            border-left: 4px solid #FEFEFE;
                        }

                        @keyframes shine {
                            from {
                                background-position: 300% center;
                            }
                            to {
                                background-position: 0% center;
                            }
                        }

                        img.icon {
                            width: 1.5rem;
                        }

                        &:hover {
                            opacity: 1;
                        }
                    }
                }
            }

            .content-options {
                position: relative;
                width: 50%;

                @media (max-width: 900px) {
                    width: 100%;
                }

                .card {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 1.5rem;
                    width: 100%;
                    height: 20rem;
                    background: #1d1e20;
                    border: 1px solid #1d1e2075;
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    transition: all .1s ease;

                    @media (max-width: 767px) {
                        width: 100%;
                        height: auto;
                        padding: 2rem 1rem;
                    }

                    &.experiencia {
                        p {
                            color: #50F4E8;
                        }

                        &:hover {
                            border: 1px solid #50F4E8;
                        }
                    }

                    &.formacao {
                        p {
                            color: #ff2d81;
                        }

                        &:hover {
                            border: 1px solid #ff2d81;
                        }
                    }

                    &.o-que-faco {
                        p {
                            color: #FEFEFE;
                        }

                        &:hover {
                            border: 1px solid #FEFEFE;
                        }
                    }

                    img {
                        width: 10rem;

                        @media (max-width: 767px) {
                            width: 8rem;
                        }
                    }

                    span {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 0.25rem;
                        text-align: center;

                        @media (max-width: 767px) {
                            gap: 0.5rem;
                        }

                        p {
                            font-size: 1.25rem;
                            font-weight: 500;
                            
                            &:last-child {
                                color: #A2A1A7;
                            }
                        }
                    }
                }
            }
        }
    }
`;