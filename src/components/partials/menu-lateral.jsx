import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const MenuLateral = ({ setActiveSection, activeSection, goToSection }) => {

    const closeMenu = () => {
        document.querySelector('.menu-lateral').classList.remove('open')
    }

    return (
        <MenuLateralContent className="menu-lateral">
            <div className="top">
                <button className="close-menu" onClick={closeMenu}>
                    <img src="/images/svg/close.svg" alt="close"/>
                </button>
            </div>
            <div className="links">
                <button onClick={closeMenu}>
                    <a
                    href="#home"
                    className={activeSection == 'home' ? 'selected' : ''}
                    onClick={goToSection}>
                        Home
                    </a>
                </button>
                <button onClick={closeMenu}>
                    <a
                    href="#sobre"
                    className={activeSection == 'sobre' ? 'selected' : ''}
                    onClick={goToSection}>
                        Sobre mim
                    </a>
                </button>
                <button onClick={closeMenu}>
                    <a
                    href="#projetos"
                    className={activeSection == 'projetos' ? 'selected' : ''}
                    onClick={goToSection}>
                        Projetos
                    </a>
                </button>
                <button onClick={closeMenu}>
                    <a
                    href="#experiencias"
                    className={activeSection == 'experiencias' ? 'selected' : ''}
                    onClick={goToSection}>
                        Experiências
                    </a>
                </button>
                <button onClick={closeMenu}>
                    <a
                    href="#conhecimentos"
                    className={activeSection == 'conhecimentos' ? 'selected' : ''}
                    onClick={goToSection}>
                        Conhecimentos
                    </a>
                </button>
            </div>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/vitorfratti/" target="_blank">
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
        </MenuLateralContent>
    )
}

export default MenuLateral

const MenuLateralContent = styled.div`
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 9999;
    width: 75%;
    height: 100vh;
    padding: 1.25rem 1.5rem;
    background: linear-gradient(45deg, #08090a, #121212);
    backdrop-filter: blur(40px);
    border-left: 1px solid #2e2e32;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    transition: all .3s ease;

    @media (min-width: 768px) {
        display: none;
    }

    &.open {
        right: 0;
        box-shadow: 0 0 200px #f7f8f825;
    }

    .top {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .close-menu {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            background: none;
            border: none;
            cursor: pointer;
            transition: all .2s ease;

            img {
                width: 2rem;
            }

            &:hover {
                opacity: 0.7;
            }
        }
    }

    .links {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2rem;

        button {
            background: none;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                position: relative;
                color: #d0d6e0;
                font-size: 1.25rem;
                font-weight: 500;
                text-decoration: none;

                &::before {
                    content: '';
                    width: 0;
                    height: 2px;
                    border-radius: 2px;
                    background-color: #d0d6e0;
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
                    color: #f7f8f8;
                    font-weight: 600;

                    &::before {
                        background-color: #f7f8f8;
                    }
                }
            }
        }
    }

    .social-media {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            transition: all .1s ease;

            img {
                width: 1.5rem;
            }

            &:hover {
                transform: translateY(-12%);
            }
        }
    }
`