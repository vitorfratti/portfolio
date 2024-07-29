import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cta = ({ setActiveSection, activeSection, goToSection }) => {

    useEffect(() => {
        AOS.init({
            duration: 650
        })
    }, [])

    return(
        <CtaContent data-section="cta">
            <div className="container">
                <div className="card">
                    <h2>Tranforme o lugar onde seu negócio é lembrado.</h2>
                    <p>Inicie seu projeto e transforme seu site em uma experiência inesquecível.</p>
                    <div className="infos">
                        <a href="https://www.linkedin.com/in/vitorfratti/" target="_blank">
                            <img src="/images/svg/linkedin.svg" alt="linkedin"/>
                        </a>
                        <a href="https://github.com/vitorfratti" target="_blank">
                            <img src="/images/svg/github.svg" alt="github"/>
                        </a>
                        <a href="https://www.instagram.com/fratti.dev/">
                            <img src="/images/svg/instagram.svg" alt="instagram"/>
                        </a>
                        <a href="mailto:vifratti@gmail.com">
                            <img src="/images/svg/gmail.svg" alt="gmail"/>
                        </a>
                    </div>
                </div>
            </div>
            <img src="/images/svg/blur.svg" alt="blur" className="blur"/>
        </CtaContent>
    )
}

export default Cta

const CtaContent = styled.section`
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 2.5rem 0 4rem 0;
    background: #08090a00;

    @media (max-width: 500px) {
        padding: 2.5rem 0;
    }

    img.blur {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0.05;
        animation: open 1s ease;
    }

    .container {
        display: flex;
        justify-content: center;

        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            text-align: center;
            width: 100%;
            background: linear-gradient(45deg, #23232675, #232326);
            backdrop-filter: blur(4px);
            border: 1px solid #2e2e32;
            padding: 4rem 20rem;
            border-radius: 6px;

            @media (width <= 1100px) {
                padding: 4rem;
            }

            @media (width <= 500px) {
                padding: 2rem;
            }

            h2 {
                font-size: 2.5rem;
                font-weight: 600;
                color: #f7f8f8;

                @media (width <= 500px) {
                    font-size: 2rem;
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
                justify-content: center;
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
                    background: linear-gradient(45deg, #232326, #2e2e32);
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
    }
`;