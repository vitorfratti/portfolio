import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CtaProject = () => {
    return (
        <CtaProjectContainer>
            <div className="container">
                <div className="texts">
                    <h2>Quer começar seu projeto?</h2>
                    <p>Deixe-me ajudar a transformar sua visão em realidade. Entre em contato para discutir como podemos fazer seu próximo projeto acontecer.</p>
                </div>
                <div className="button">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5511998874399">Entre em contato</a>
                </div>
            </div>
            <img src="/images/dark-abstract.jpg" alt="dark-abstract" className="abstract"/>
        </CtaProjectContainer>
    )
}

export default CtaProject

const CtaProjectContainer = styled.section `
    position: relative;
    padding: 4rem 0;
    border-top: 1px solid #A2A1A720;
    border-bottom: 1px solid #A2A1A720;

    img.abstract {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0.3;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6rem;

        @media (width <= 900px) {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        .texts {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            h2 {
                font-size: 2.25rem;
                font-weight: 600;
                color: #FEFEFE;

                @media (width <= 900px) {
                    text-align: center;
                }
            }

            p {
                font-size: 1.25rem;
                font-weight: 500;
                color: #A2A1A7;

                @media (width <= 900px) {
                    text-align: center;
                }
            }
        }

        .button {
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: linear-gradient(to left, #1d1e20 20%, #FEFEFE25 40%, #1d1e20 60%, #1d1e20 80%);
                background-size: 300% auto;
                animation: shine 6s linear infinite;
                border: 1px solid #1d1e2075;
                text-decoration: none;
                width: fit-content;
                white-space: nowrap;
                padding: 1rem 1.5rem;
                font-size: 1.25rem;
                font-weight: 600;
                color: #FEFEFE;
                transition: all .1s ease;

                @keyframes shine {
                    from {
                        background-position: 300% center;
                    }
                    to {
                        background-position: 0% center;
                    }
                }

                &:hover {
                    border: 1px solid #FEFEFE;
                }
            }
        }
    }
`