import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { differenceInMonths, parse } from 'date-fns'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Experiences = () => {

    const diferencaMeses = differenceInMonths(new Date(), parse('2023-08-01', 'yyyy-MM-dd', new Date()))

    return (
        <ExperiencesContent data-section="experiencias">
            <div className="container">
                <div className="title" data-aos="fade-up">
                    <h2>Experiências</h2>
                    <p>Minha trajetória profissional até o momento.</p>
                </div>
                <div className="content" data-aos="fade-up">
                    <div className="line"></div>
                    <div className="items">
                        <div className="item">
                            <div className="left">
                                <h5>
                                    <img src="/images/svg/logo-hangar.svg" alt="hangar"/>
                                    Hangar Digital
                                </h5>
                                <p>ago/2023 - o momento ({diferencaMeses} meses)</p>
                            </div>
                            <div className="dot"></div>
                            <div className="right">
                                <h5>Desenvolvedor web</h5>
                                <p>Promovido a Desenvolvedor Web Júnior, devido à boa performance. Comecei a desenvolver projetos do início ao fim sozinho.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <h5>
                                    <img src="/images/svg/logo-hangar.svg" alt="hangar"/>
                                    Hangar Digital
                                </h5>
                                <p>abr/2023 - jul/2023 (4 meses)</p>
                            </div>
                            <div className="dot"></div>
                            <div className="right">
                                <h5>Estagiário de desenvolvimento web</h5>
                                <p>Comecei com ajustes mais simples de front-end, explorando a estrutura dos projetos. Gradualmente, fui ganhando mais conhecimento técnico e responsabilidade.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ExperiencesContent>
    )
}

export default Experiences

const ExperiencesContent = styled.section`
    position: relative;
    z-index: 10;
    width: 100%;
    height: fit-content;
    padding: 3.5rem 0 2.5rem 0;

    @media (max-width: 500px) {
        padding: 2.5rem 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: 100%;

        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            text-align: center;
            
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
        }

        .content {
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 4rem;
            min-height: 20rem;
            padding: 1.5rem 0;

            @media (max-width: 767px) {
                flex-direction: row;
                gap: 0;
                min-height: fit-content;
            }

            .line {
                position: absolute;
                top: 0;
                left: 45%;
                transform: translateX(-50%);
                width: 1px;
                height: 100%;
                background: #d0d6e0;

                @media (max-width: 1000px) {
                    height: 100%;
                }

                @media (max-width: 767px) {
                    position: absolute;
                    min-height: 100%;
                    left: 0;
                    transform: translateX(0);
                }
            }

            .items {
                display: flex;
                flex-direction: column;
                gap: 3rem;

                .item {
                    display: flex;
                    justify-content: center;
                    gap: 3rem;
                    width: 100%;
                    filter: brightness(60%);

                    &:first-child {
                        filter: brightness(100%);

                        .dot {
                            box-shadow: 0 0 20px #f7f8f8;
                        }
                    }

                    @media (max-width: 767px) {
                        flex-wrap: wrap;
                        gap: 1.5rem;
                    }

                    .dot {
                        width: 1rem;
                        height: 1rem;
                        border-radius: 50%;
                        background: #f7f8f8;
                        border: 2px solid #08090a;
                        outline: 2px solid #f7f8f8;
                        transform: translateY(4px);

                        @media (max-width: 767px) {
                            position: absolute;
                            left: -0.45rem;
                            transform: translateY(4px) translateX(0);
                        }
                    }

                    .left {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        gap: 0.5rem;
                        width: 40%;
                        text-align: right;

                        @media (max-width: 767px) {
                            text-align: left;
                            align-items: flex-start;
                            padding-left: 2.5rem;
                            width: 100%;
                        }

                        h5 {
                            display: flex;
                            align-items: center;
                            gap: 0.75rem;
                            font-size: 1.5rem;
                            font-weight: 600;
                            color: #f7f8f8;

                            @media (max-width: 767px) {
                                font-size: 1.25rem;
                            }

                            img {
                                width: 1.5rem;
                            }
                        }

                        p {
                            font-size: 1.125rem;
                            line-height: 1.6;
                            font-weight: 400;
                            color: #d0d6e0;

                            @media (max-width: 767px) {
                                font-size: 1rem;
                            }
                        }
                    }

                    .right {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                        width: 50%;
                        text-align: left;

                        @media (max-width: 767px) {
                            padding-left: 2.5rem;
                            width: 100%;
                        }

                        h5 {
                            font-size: 1.5rem;
                            font-weight: 600;
                            color: #f7f8f8;

                            @media (max-width: 767px) {
                                font-size: 1.25rem;
                            }
                        }

                        p {
                            font-size: 1.125rem;
                            line-height: 1.6;
                            font-weight: 400;
                            color: #d0d6e0;

                            @media (max-width: 767px) {
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
        }

    }
`