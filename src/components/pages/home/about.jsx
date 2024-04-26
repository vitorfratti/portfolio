import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 2000
        })
    }, [])

    return(
        <AboutContent data-section="sobre">
            <div className="container">
                <div className="content">
                    <div className="texts">
                        <h2 data-aos="fade-up">Sobre mim</h2>
                        <p data-aos="fade-up">
                            Meu nome é Vitor Fratti, tenho 20 anos e atualmente trabalho como Desenvolvedor Web. Trabalho desenvolvendo sites e plataformas com tecnologias modernas e de alta performance.
                        </p>
                        <div className="infos" data-aos="fade-up">
                            <a href="https://www.linkedin.com/in/vitorfratti/" target="_blank">
                                <img src="/images/svg/linkedin.svg" alt="linkedin"/>
                            </a>
                            <a href="https://github.com/vitorfratti" target="_blank">
                                <img src="/images/svg/github.svg" alt="github"/>
                            </a>
                            <a href="mailto:vifratti@gmail.com">
                                <img src="/images/svg/gmail.svg" alt="gmail"/>
                            </a>
                            <a href="https://wa.me/5511998874399">
                                <img src="/images/svg/whatsapp.svg" alt="whatsapp"/>
                            </a>
                        </div>
                    </div>
                    <div className="image" data-aos="fade-up">
                        <div className="box">
                            <img src="/images/about-image.JPG" alt="about"/>
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
    padding: 5rem 0;
    background: #08090a00;

    @media (max-width: 500px) {
        padding: 2.5rem 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        height: 100%;

        .content {
            display: flex;
            justify-content: space-between;
            gap: 2rem;

            @media (width <= 1000px) {
                flex-direction: column;
            }

            .texts {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                h2 {
                    font-size: 2.5rem;
                    font-weight: 600;
                    color: #f7f8f8;

                    @media (width <= 500px) {
                        font-size: 2.25rem;
                    }
                }

                p {
                    font-size: 1.125rem;
                    line-height: 1.6;
                    font-weight: 400;
                    color: #d0d6e0;
                }

                .infos {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-top: 1rem;

                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 1rem;
                        border-radius: 6px;
                        background: linear-gradient(270deg, #232326, #2e2e32);
                        border: 1px solid #2e2e32;
                        transition: all .2s ease;

                        &:hover {
                            border: 1px solid #f7f8f875;
                        }

                        img {
                            width: 2rem;

                            @media (width <= 767px) {
                                width: 1.75rem;
                            }
                        }
                    }
                }
            }

            .image {
                display: flex;
                justify-content: center;
                align-items: center;

                .box {
                    position: relative;
                    width: 32rem;
                    height: 20rem;
                    border-radius: 6px;
                    border: 1px solid #2e2e32;
                    background: #232326;

                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 6px;
                    }
                }
            }
        }
    }
`;