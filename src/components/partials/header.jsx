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
                            Sobre mim
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
                    <span data-aos="fade-right" data-aos-delay="500">
                        <a
                        href="#experiencias"
                        className={activeSection == 'experiencias' ? 'selected' : ''}
                        onClick={goToSection}>
                            Experiências
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
                        <a href="https://wa.me/5511998874399">
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
    padding: 0.75rem 0;
    background: #08090a00;
    backdrop-filter: blur(5px);

    @media (max-width: 650px) {
        background: #08090a;
        padding: 1.5rem 0;
    }

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
                z-index: 10;
                color: #d0d6e0;
                font-size: 1.125rem;
                font-weight: 500;
                text-decoration: none;

                &::before {
                    content: '';
                    width: 0;
                    height: 1px;
                    border-radius: 2px;
                    background-color: #d0d6e0;
                    position: absolute;
                    bottom: -0.5rem;
                    right: 0;
                    transition: right .4s, width .4s, left .4s;
                }

                &:hover::before {
                    width: 100%;
                    left: 0;
                }

                &.selected {
                    color: #f7f8f8;

                    &:hover {
                        &::before {
                            width: 100%;
                            background: #f7f8f8;
                        }
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
            width: 2.15rem;
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
                background: #f7f8f8;
            }
        }
    }
`