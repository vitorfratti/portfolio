import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = ({ setActiveSection, activeSection, goToSection }) => {

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
                    <p>Tenho 20 anos e sou Desenvolvedor Web & Front-end. Atualmente estou cursando o 3º semestre de Engenharia de Software e atuando como Desenvolvedor Web desde 2023.</p>
                </div>
                <div className="content" data-aos="fade-up">
                    <a href="https://hangar.digital/" target="_blank" className="card">
                        <img src="./images/svg/hangar.svg" alt="hangar"/>
                        <span>
                            <p>Agência de marketing digital em Joinville, Santa Catarina</p>
                            <p>Desenvolvedor Web · abr/2023 - o momento</p>
                        </span>
                    </a>
                    <div className="infos">
                        <div className="cards">
                            <a href="https://www.linkedin.com/in/vitor-fratti-1b0310288/" target="_blank">
                                <img src="/images/svg/linkedin.svg" alt="linkedin"/>
                            </a>
                            <a href="https://github.com/vitorfratti" target="_blank">
                                <img src="/images/svg/github.svg" alt="github"/>
                            </a>
                            <a href="mailto:vifratti@gmail.com">
                                <img src="/images/svg/gmail.svg" alt="gmail"/>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5511998874399">
                                <img src="/images/svg/whatsapp.svg" alt="whatsapp"/>
                            </a>
                        </div>
                        <div className="scroll-buttons">
                            <a
                            href="#projetos"
                            onClick={goToSection}>
                                Projetos
                            </a>
                            <a
                            href="#conhecimentos"
                            onClick={goToSection}>
                                Conhecimentos
                            </a>
                        </div>
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

            @media (max-width: 767px) {
                flex-direction: column;
                gap: 0;
            }

            .card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1.5rem;
                width: 50%;
                height: 20rem;
                background: #1d1e2090;
                backdrop-filter: blur(50px);
                border: 1px solid #1d1e2050;
                text-decoration: none;
                padding: 0.5rem;
                transition: all .1s ease;

                @media (max-width: 767px) {
                    width: 100%;
                    height: auto;
                    padding: 2rem 1rem;
                }

                img {
                    width: 10rem;

                    @media (max-width: 767px) {
                        width: 7rem;
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
                        color: #50F4E8;
                        
                        &:last-child {
                            color: #A2A1A7;
                        }
                    }
                }

                &:hover {
                    border: 1px solid #50F4E8;
                }
            }

            .infos {
                position: relative;
                width: 50%;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                @media (max-width: 767px) {
                    width: 100%;
                }

                .cards {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                    height: 25%;

                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 33%;
                        gap: 0.5rem;
                        background: #1d1e20;
                        border: 1px solid #1d1e20;
                        text-decoration: none;
                        transition: all .1s ease;

                        @media (max-width: 767px) {
                            display: none;
                        }

                        img {
                            width: 1.75rem;
                        }

                        &:hover {
                            border: 1px solid #FEFEFE;
                        }
                    }
                }

                .scroll-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 100%;
                    height: 75%;

                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        width: 100%;
                        height: 50%;
                        gap: 0.25rem;
                        background: #1d1e20;
                        color: #FEFEFE;
                        font-size: 1.5rem;
                        font-weight: 600;
                        border: 1px solid #1d1e20;
                        text-decoration: none;
                        transition: all .1s ease;
                        cursor: pointer;

                        @media (max-width: 767px) {
                            padding: 1.5rem 0;
                        }

                        img {
                            width: 1.5rem;
                        }

                        &:hover {
                            border: 1px solid #FEFEFE;
                        }
                    }
                }
            }
        }
    }
`;