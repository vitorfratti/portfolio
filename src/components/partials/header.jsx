import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({ setActiveSection, activeSection, goToSection }) => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 1500
        })
    }, [])

    const verifySection = () => {
        const hash = window.location.hash.substring(1)
        hash ? setActiveSection(hash) : setActiveSection('home')
    }

    useEffect(() => {
        verifySection()
    }, [])

    const openMenu = () => {
        document.querySelector('.menu-lateral').classList.add('open')
    }

    return (
        <HeaderContent>
            <div className="container">
                <div className="links" data-aos="fade-right">
                    <a
                    href="#home"
                    className={activeSection == 'home' ? 'selected' : ''}
                    onClick={goToSection}>
                        Home
                    </a>
                    <a
                    href="#sobre"
                    className={activeSection == 'sobre' ? 'selected' : ''}
                    onClick={goToSection}>
                        Sobre
                    </a>
                    <a
                    href="#projetos"
                    className={activeSection == 'projetos' ? 'selected' : ''}
                    onClick={goToSection}>
                        Projetos
                    </a>
                    <a
                    href="#conhecimentos"
                    className={activeSection == 'conhecimentos' ? 'selected' : ''}
                    onClick={goToSection}>
                        Conhecimentos
                    </a>
                </div>
                <div className="social-media" data-aos="fade-left">
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
                <button className="ham" onClick={openMenu} data-aos="fade-left">
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
    background: #08090a;

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
                    height: 2px;
                    border-radius: 2px;
                    background-color: #A2A1A7;
                    position: absolute;
                    bottom: -.25rem;
                    right: 0;
                    transition: right .4s, width .4s, left .4s;
                }

                &:hover::before {
                    width: 100%;
                    left: 0;
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
                    width: 1.25rem;
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