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
                description: 'Mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>.',
                iconSrc: './images/svg/css.svg'
            },
            {
                name: 'JavaScript',
                description: 'Linguagem de programação interpretada estruturada. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
                iconSrc: './images/svg/javascript.svg'
            },
            {
                name: 'PHP',
                description: 'Linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.',
                iconSrc: './images/svg/php.svg'
            },
            {
                name: 'React',
                description: 'Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
                iconSrc: './images/svg/react.svg'
            },
            {
                name: 'Next.js',
                description: 'Estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.',
                iconSrc: './images/svg/next.svg'
            },
            {
                name: 'Vue.js',
                description: 'Framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
                iconSrc: './images/svg/vue.svg'
            },
            {
                name: 'jQuery',
                description: 'Biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.',
                iconSrc: './images/svg/jquery.svg'
            },
            {
                name: 'Sass',
                description: 'Pré-processador CSS que melhora a escrita de estilos com recursos como variáveis e mixins. Ele simplifica a criação de folhas de estilo mais organizadas e reutilizáveis, convertendo-se em CSS durante a compilação e sendo amplamente utilizado para aumentar a eficiência no desenvolvimento web.',
                iconSrc: './images/svg/sass.svg'
            },
            {
                name: 'styled-components',
                description: 'Biblioteca que permite escrever CSS em JS enquanto constrói componentes personalizados em React.',
                iconSrc: './images/svg/styled-components.svg'
            },
            {
                name: 'Tailwind CSS',
                description: 'Estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.',
                iconSrc: './images/svg/tailwind.svg'
            },
            {
                name: 'WordPress',
                description: 'Sistema livre e aberto de gestão de conteúdo para internet, baseado em PHP com banco de dados MySQL, executado em um servidor interpretador, voltado principalmente para a criação de páginas eletrônicas e blogs online.',
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
        </TechsContent>
    )
}

export default Techs

const TechsContent = styled.section`
    position: relative;
    width: 100%;
    background: #08090a;
    padding: 5rem 0;

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
            
            .left {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                width: 50%;
                height: auto;

                .card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: calc(25% - 1rem);
                    padding: 1.75rem 0;
                    background: #1d1e20;
                    border: 1px solid #1d1e20;
                    transition: all .1s ease;

                    img {
                        width: 3.5rem;
                    }

                    &:hover, &.selected {
                        border: 1px solid #FEFEFE;
                    }
                }
            }

            .right {
                width: 50%;

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