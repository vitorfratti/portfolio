import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({ setActiveSection, activeSection, goToSection }) => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 3000
        })
    }, [])

    const openMenu = () => {
        document.querySelector('.menu-lateral').classList.add('open')
    }

    return (
        <HeaderContent>
            <div className="container">
                <div className="links">
                    <span data-aos="fade-right" data-aos-delay="1500">
                        <a
                        href="#home"
                        className={activeSection == 'home' ? 'selected' : ''}
                        onClick={goToSection}>
                            Home
                        </a>
                    </span>
                    <span data-aos="fade-right" data-aos-delay="1000">
                        <a
                        href="#sobre"
                        className={activeSection == 'sobre' ? 'selected' : ''}
                        onClick={goToSection}>
                            Sobre
                        </a>
                    </span>
                    <span data-aos="fade-right" data-aos-delay="500">
                        <a
                        href="#projetos"
                        className={activeSection == 'projetos' ? 'selected' : ''}
                        onClick={goToSection}>
                            Projetos
                        </a>
                    </span>
                    <span data-aos="fade-right" data-aos-delay="0">
                        <a
                        href="#conhecimentos"
                        className={activeSection == 'conhecimentos' ? 'selected' : ''}
                        onClick={goToSection}>
                            Conhecimentos
                        </a>
                    </span>
                </div>
                <div className="social-media" data-aos="fade-left">
                    <span data-aos="fade-left" data-aos-delay="0">
                        <a href="https://www.linkedin.com/in/vitorfratti/" target="_blank">
                            <img src="/images/svg/linkedin.svg" alt="linkedin"/>
                        </a>
                    </span>
                    <span data-aos="fade-left" data-aos-delay="500">
                        <a href="https://github.com/vitorfratti" target="_blank">
                            <img src="/images/svg/github.svg" alt="github"/>
                        </a>
                    </span>
                    <span data-aos="fade-left" data-aos-delay="1000">
                        <a href="mailto:vifratti@gmail.com">
                            <img src="/images/svg/gmail.svg" alt="gmail"/>
                        </a>
                    </span>
                    <span data-aos="fade-left" data-aos-delay="1500">
                        <a href="https://api.whatsapp.com/send?phone=5511998874399">
                            <img src="/images/svg/whatsapp.svg" alt="whatsapp"/>
                        </a>
                    </span>
                </div>
                <button className="ham" onClick={openMenu} data-aos="fade-in">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </HeaderContent>
    )
}

export default Header

const HeaderContent = styled.header`
    position: fixed;
    z-index: 999;
    width: 100%;
    padding: 1.25rem 0;
    background: #08090a90;
    backdrop-filter: blur(12px);

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 650px) {
            justify-content: flex-end;
        }

        .links {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.25rem;

            @media (max-width: 650px) {
                display: none;
            }

            a {
                position: relative;
                color: #A2A1A7;
                font-size: 1.25rem;
                font-weight: 600;
                text-decoration: none;

                &::before {
                    content: '';
                    width: 0;
                    height: 0;
                    border-radius: 2px;
                    background-color: #A2A1A7;
                    position: absolute;
                    bottom: -.25rem;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: all .3s ease;
                }

                &:hover::before {
                    width: 100%;
                    height: 2px;
                }

                &.selected {
                    color: #FEFEFE;

                    &::before {
                        background-color: #FEFEFE;
                    }
                }
            }
        }

        .social-media {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            @media (max-width: 650px) {
                display: none;
            }

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.5rem;
                transition: all .1s ease;

                img {
                    width: 1.4rem;
                }

                &:hover {
                    transform: translateY(-12%);
                }
            }
        }

        .ham {
            background: none;
            border: none;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 2.5rem;
            height: 100%;
            cursor: pointer;

            &:hover {
                opacity: 0.7;
            }

            @media (min-width: 650px) {
                display: none;
            }

            span {
                width: 100%;
                height: 2px;
                background: #FEFEFE;
            }
        }
    }
`