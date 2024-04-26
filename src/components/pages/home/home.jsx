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
        AOS.init({
            easing: 'ease-out-back',
            duration: 2000,
        })

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
                <div className="content" data-aos="fade-in">
                    <h1>Bem-vindo, meu nome é <span>Vitor Fratti</span></h1>
                    <h4>
                        Desenvolvedor
                        <Typewriter
                            options={{
                                strings: ['Web', 'Front-end'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h4>
                    <div className="buttons">
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
            <img src="/images/bg-dark.jpeg" alt="bg" className="bg"/>
        </HomeContent>
    )
}

export default Home

const HomeContent = styled.section`
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background: #08090a;

    @media (max-width: 500px) {
        height: 90vh;
    }

    img.bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0.3;
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

                @media (max-width: 700px) {
                    font-size: 2.75rem;
                }

                span {
                    background: linear-gradient(to left, #f7f8f8 20%, #f7f8f890 40%, #f7f8f8 60%, #f7f8f8 80%);
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

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                    text-align: center;
                    background: #232326;
                    border: 1px solid #2e2e32;
                    color: #f7f8f8;
                    font-size: 1.125rem;
                    font-weight: 600;
                    padding: 0.75rem 1.25rem;
                    border-radius: 6px;
                    text-decoration: none;
                    transition: all .1s ease;
                    cursor: pointer;

                    &:hover {
                        border: 1px solid #f7f8f875;
                    }

                    svg {
                        width: 1rem;
                        height: 1rem;
                    }

                    &:first-child {
                        background: linear-gradient(270deg, #232326, #2e2e32);
                    }

                    &:last-child {
                        background: linear-gradient(45deg, #232326, #2e2e32);
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