import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Header = ({ setActiveSection, activeSection, goToSection }) => {

    const verifySection = () => {
        const hash = window.location.hash.substring(1)
        setActiveSection(hash)
    }

    useEffect(() => {
        verifySection()
    }, [])

    return (
        <HeaderContent>
            <div className="container">
                <div className="links">
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
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/vitor-fratti-1b0310288/" target="_blank">
                        <img src="./images/svg/linkedin.svg" alt="linkedin"/>
                    </a>
                    <a href="https://github.com/vitorfratti" target="_blank">
                        <img src="./images/svg/github.svg" alt="github"/>
                    </a>
                    <a href="mailto:vifratti@gmail.com">
                        <img src="./images/svg/gmail.svg" alt="gmail"/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5511998874399">
                        <img src="./images/svg/whatsapp.svg" alt="whatsapp"/>
                    </a>
                </div>
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

        .links {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.25rem;

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
    }
`