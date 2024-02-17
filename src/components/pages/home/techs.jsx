import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Techs = () => {

    const [techs, setTechs] = useState([])
    const [activeTech, setActiveTech] = useState([])

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

        setActiveTech([
            {
                name: 'HTML',
                description: 'Linguagem de marcação utilizada na construção de páginas na Web.',
                iconSrc: './images/svg/html.svg'
            }
        ])
    }, [])

    const hoverTech = (tech) => {
        setActiveTech([tech])
    }

    return(
        <TechsContent data-section="conhecimentos">
            <div className="container">
                <div className="title">
                    <h2>Conhecimentos</h2>
                    <p>Algumas das linguagens que trabalho diariamente.</p>
                </div>
                <div className="techs">
                    <div className="left">
                        {techs.map((tech, index) => (
                            <div
                            className={tech.name == activeTech[0].name ? 'card selected' : 'card'}
                            key={tech.name}
                            onMouseEnter={() => hoverTech(tech)}>
                                <img src={tech.iconSrc} alt={tech.name}/>
                            </div>
                        ))}
                    </div>
                    <div className="right">
                        {activeTech.map((activeTech, index) => (
                            <span key={activeTech.name}>
                                <h3>{activeTech.name}</h3>
                                <p>{activeTech.description}</p>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <img src="/images/svg/blur.svg" alt="blur" className="blur"/>
        </TechsContent>
    )
}

export default Techs

const TechsContent = styled.section`
    position: relative;
    z-index: 10;
    width: 100%;
    background: #08090a;
    padding: 5rem 0;

    @media (max-width: 500px) {
        padding: 2.5rem 0 5rem 0;
    }

    img.blur {
        position: absolute;
        top: 0;
        right: 0;
        transform: rotate(180deg);
        opacity: 0.2;
        z-index: -1;
        max-height: 100%;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: 100%;

        .title {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            
            h2 {
                font-size: 2.5rem;
                font-weight: 600;
                color: #FEFEFE;
            }

            p {
                font-size: 1.25rem;
                font-weight: 500;
                color: #A2A1A7;
            }
        }

        .techs {
            display: flex;
            justify-content: space-between;
            gap: 1rem;

            @media (max-width: 1000px) {
                flex-direction: column;
                gap: 2rem;
            }
            
            .left {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                width: 50%;
                height: auto;

                @media (max-width: 1000px) {
                    width: 100%;
                    justify-content: space-between;
                }

                @media (max-width: 500px) {
                    gap: 0.5rem;
                }

                .card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: calc(25% - 1rem);
                    padding: 1.75rem 0;
                    background: #1d1e20;
                    border: 1px solid #1d1e20;
                    transition: all .1s ease;

                    @media (max-width: 500px) {
                        width: calc(25% - 0.5rem);
                        padding: 1.25rem 0;
                    }

                    img {
                        width: 3.5rem;

                        @media (max-width: 500px) {
                            width: 3rem;
                        }
                    }

                    &:hover, &.selected {
                        border: 1px solid #FEFEFE;
                    }
                }
            }

            .right {
                width: 50%;

                @media (max-width: 1000px) {
                    width: 100%;
                }

                span {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;

                    h3 {
                        font-size: 1.75rem;
                        font-weight: 600;
                        color: #FEFEFE;
                    }

                    p {
                        font-size: 1.25rem;
                        font-weight: 500;
                        color: #A2A1A7;
                    }
                }
            }
        }
    }
`;