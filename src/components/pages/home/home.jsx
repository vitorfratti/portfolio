import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Typewriter from 'typewriter-effect'

const Home = ({ setActiveSection, activeSection, goToSection }) => {

    const [typedText, setTypedText] = useState('Des')
    const textToType = 'Desenvolvedor Web | Front-end'
    const caret = '|'

    useEffect(() => {
        const typeText = () => {
            for (let i = 0; i <= textToType.length; i++) {
                setTimeout(() => {
                    setTypedText(textToType.substring(0, i) + caret)
                }, i * 100)
            }
        }

        typeText()
    }, [])

    return(
        <HomeContent data-section="home">
            <div className="container">
                <div className="content">
                    <h1 className="animate__animated animate__animated animate__fadeIn">Bem-vindo, meu nome é <span>Vitor Fratti</span></h1>
                    <h4 className="animate__animated animate__animated animate__fadeIn">
                        Desenvolvedor
                        <Typewriter
                            options={{
                                strings: ['Web', 'Front-end'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h4>
                    <div className="buttons animate__animated animate__animated animate__fadeIn">
                        <a
                        href="#sobre"
                        className={activeSection == 'sobre' ? 'selected' : ''}
                        onClick={goToSection}>
                            Quem sou
                        </a>
                        <a
                        href="#projetos"
                        className={activeSection == 'projetos' ? 'selected' : ''}
                        onClick={goToSection}>
                            Ver projetos
                            <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f7f8f8" stroke-width="1.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#f7f8f8"></path> </g></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="scroll-guide">
                <a
                href="#sobre"
                onClick={goToSection}>
                    <img src="./images/svg/arrows.svg" alt="arrows"/>
                </a>
            </div>
            <img src="/images/bg.jpg" alt="bg" className="bg"/>
        </HomeContent>
    )
}

export default Home

const HomeContent = styled.section`
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background: #08090a00;

    @media (max-width: 500px) {
        height: 90vh;
    }

    img.bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
        filter: brightness(90%) grayscale(100%);
        transform: rotate(180deg);
        animation: show 3s ease;
    }

    @keyframes show {
        0% {
            filter: brightness(0) grayscale(100%);
        }
        100% {
            filter: brightness(90%) grayscale(100%);
        }
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        .content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 3rem 20% 0 20%;
            text-align: center;

            @media (max-width: 1000px) {
                padding: 0 10%;
            }

            @media (max-width: 700px) {
                padding: 0;
            }

            h1 {
                color: #f7f8f8;
                font-size: 3.75rem;
                font-weight: 600;
                line-height: 1.1;
                animation-duration: 1.5s;

                @media (max-width: 700px) {
                    font-size: 2.75rem;
                }

                span {
                    background: linear-gradient(to left, #f7f8f8 20%, #808080 40%, #f7f8f8 60%, #f7f8f8 80%);
                    background-size: 200% auto;
                    background-clip: text;
                    -webkit-background-clip: text;
                    text-fill-color: transparent;
                    -webkit-text-fill-color: transparent;
                    animation: textMove 4s linear infinite;
                }

                @keyframes textMove {
                    from {
                        background-position: 200% center;
                    }
                    to {
                        background-position: 0% center;
                    }
                }
            }

            h4 {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                color: #d0d6e0;
                font-size: 1.75rem;
                font-weight: 400;
                animation-duration: 2.5s;

                @media (max-width: 700px) {
                    font-size: 1.5rem;
                }
            }

            .buttons {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1rem;
                margin-top: 1rem;
                animation-duration: 3.5s;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.25rem;
                    text-align: center;
                    border: 1px solid #2e2e32;
                    backdrop-filter: blur(2px);
                    color: #f7f8f8;
                    font-size: 1.125rem;
                    font-weight: 600;
                    padding: 0.65rem 1.25rem;
                    border-radius: 25px;
                    text-decoration: none;
                    transition: all .1s ease;
                    cursor: pointer;

                    @media (width <= 500px) {
                        padding: 0.7rem 1rem;
                    }

                    &:hover {
                        border: 1px solid #f7f8f875;
                    }

                    svg {
                        width: 1.125rem;
                        height: 1.125rem;
                    }

                    &:first-child {
                        background: linear-gradient(270deg, #232326, #2e2e32);
                    }

                    &:last-child {
                        background: linear-gradient(45deg, #23232699, #2e2e32);
                    }
                }
            }
        }
    }

    .scroll-guide {
        position: absolute;
        bottom: 0.5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            background: none;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            padding: 0.5rem;
            background: #23232600;
            border: 1px solid #2e2e3200;
            cursor: pointer;
            animation: move 2s infinite;
            transition: all .2s ease;

            img {
                width: 32px;
            }

            &:hover {
                background: #232326;
                border: 1px solid #2e2e32;
            }

            @keyframes move {
                0% {
                    transform: translateY(0)
                }
                50% {
                    transform: translateY(-25%)
                }
                100% {
                    transform: translateY(0)
                }
            }
        }
    }
`;