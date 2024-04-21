import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Techs = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 2000
        })
    }, [])

    const [techs, setTechs] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [nums, setNums] = useState(9)

    useEffect(() => {
        setTechs([
            {
                name: 'HTML',
                description: 'Linguagem de marcação utilizada na construção de páginas na Web.',
                iconSrc: './images/svg/html.svg'
            },
            {
                name: 'CSS',
                description: 'Linguagem que estiliza páginas web, controlando o design e a apresentação do conteúdo HTML.',
                iconSrc: './images/svg/css.svg'
            },
            {
                name: 'JavaScript',
                description: 'Linguagem de programação utilizada para tornar as páginas web interativas.',
                iconSrc: './images/svg/javascript.svg'
            },
            {
                name: 'PHP',
                description: 'Linguagem de programação utilizada para criar páginas web dinâmicas, processando dados no servidor para oferecer conteúdo personalizado aos usuários.',
                iconSrc: './images/svg/php.svg'
            },
            {
                name: 'React',
                description: 'Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
                iconSrc: './images/svg/react.svg'
            },
            {
                name: 'Next.js',
                description: 'Framework de React utilizado para construir aplicações web eficientes, com foco em renderização do lado do servidor e simplicidade no desenvolvimento.',
                iconSrc: './images/svg/next.svg'
            },
            {
                name: 'Vue.js',
                description: 'Framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
                iconSrc: './images/svg/vue.svg'
            },
            {
                name: 'jQuery',
                description: 'Biblioteca JavaScript que simplifica a interação com HTML, eventos e requisições AJAX, facilitando o desenvolvimento web.',
                iconSrc: './images/svg/jquery.svg'
            },
            {
                name: 'Sass',
                description: 'Pré-processador CSS que melhora a escrita e simplifica a criação de folhas de estilo mais organizadas e reutilizáveis.',
                iconSrc: './images/svg/sass.svg'
            },
            {
                name: 'styled-components',
                description: 'Biblioteca que permite escrever CSS em JS enquanto constrói componentes personalizados em React.',
                iconSrc: './images/svg/styled-components.svg'
            },
            {
                name: 'Tailwind CSS',
                description: 'Framework que simplifica a estilização web, fornecendo classes predefinidas para facilitar o desenvolvimento rápido sem a necessidade de CSS personalizado.',
                iconSrc: './images/svg/tailwind.svg'
            },
            {
                name: 'WordPress',
                description: 'Plataforma de gerenciamento de conteúdo utilizada para criar sites e blogs, facilitando a publicação e personalização com temas e plugins.',
                iconSrc: './images/svg/wordpress.svg'
            }
        ])

        if(window.innerWidth >= 650 && window.innerWidth <= 900) {
            setNums(6)
        } else if(window.innerWidth < 650) {
            setNums(5)
        }
    }, [])

    return(
        <TechsContent data-section="conhecimentos">
            <div className="container">
                <div className="title" data-aos="fade-up">
                    <h2>Conhecimentos</h2>
                    <p>Algumas das tecnologias que trabalho diariamente.</p>
                </div>
                <div className="techs" data-aos="fade-up">
                    {techs.slice(0, nums).map((tech, index) => (
                        <div className="tech" key={tech.index}>
                            <div className="top">
                                <img src={tech.iconSrc} alt={tech.name}/>
                                <h5>{tech.name}</h5>
                            </div>
                            <div className="bottom">
                                <p>{tech.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {!showMore ?
                <div className="shadow">
                    <button onClick={() => { setShowMore(true); setNums(12) }}>Ver tudo</button>
                </div>
                :
                <></>
            }
            <img src="/images/svg/blur.svg" alt="blur" className="blur"/>
        </TechsContent>
    )
}

export default Techs

const TechsContent = styled.section`
    position: relative;
    z-index: 10;
    width: 100%;
    height: fit-content;
    padding: 2.5rem 0;

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
        opacity: 0.15;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: 100%;

        .title {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            
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

        .techs {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
            z-index: 10;

            .tech {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                width: calc(33% - 0.5rem);
                padding: 1.5rem;
                border-radius: 6px;
                background: #232326;
                backdrop-filter: blur(5px);
                border: 1px solid #2e2e32;
                box-shadow: 0 0 2px #08090a;
                transition: all .1s ease;
                user-select: none;

                &:hover {
                    @media (width > 767px) {
                        background: #23232650;
                        border: 1px solid #f7f8f8;
                    }
                }

                @media (max-width: 900px) {
                    width: calc(50% - 0.5rem);
                }

                @media (max-width: 650px) {
                    width: 100%;
                }

                .top {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;

                    img {
                        width: 1.5rem;
                    }

                    h5 {
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #f7f8f8;
                        user-select: none;
                    }
                }

                .bottom {
                    p {
                        font-size: 1rem;
                        font-weight: 400;
                        color: #d0d6e0;
                        user-select: none;
                        line-height: 1.5;
                    }
                }
            }
        }
    }

    .shadow {
        position: absolute;
        height: 15.5rem;
        bottom: 0px;
        z-index: 50;
        padding-top: 10rem;
        width: 100%;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        background: linear-gradient(to bottom, transparent 0px, #08090a 150px);
        transition: transform 400ms ease 0s, opacity 400ms ease 0s;
        transform: translateY(0%);
        opacity: 1;
        pointer-events: all;

        button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            font-size: 1.125rem;
            font-weight: 600;
            background: none;
            border: none;
            color: #FEFEFE;
            text-decoration: none;
            width: fit-content;
            height: fit-content;
            cursor: pointer;

            &::before {
                content: '';
                width: 0;
                height: 1px;
                border-radius: 2px;
                background-color: #f7f8f8;
                position: absolute;
                bottom: -0.5rem;
                right: 0;
                transition: right .4s, width .4s, left .4s;
            }

            &:hover::before {
                width: 100%;
                left: 0;
            }

            svg {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
`;