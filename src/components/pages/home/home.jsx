import styled from 'styled-components'

const Home = ({ setActiveSection, activeSection, goToSection }) => {
    return(
        <HomeContent data-section="home">
            <div className="container">
                <div className="content">
                    <h1>Bem-vindo, meu nome é <span>Vitor Fratti</span></h1>
                    <h3>Desenvolvedor Web | Front-end</h3>
                </div>
                <div className="scroll-guide">
                    <a
                    href="#sobre"
                    onClick={goToSection}>
                        <img src="./images/svg/arrows.svg" alt="arrows"/>
                    </a>
                </div>
            </div>
        </HomeContent>
    )
}

export default Home

const HomeContent = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;

    @media (max-width: 500px) {
        height: 90vh;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0 20%;
            text-align: center;

            @media (max-width: 1000px) {
                padding: 0 10%;
            }

            @media (max-width: 700px) {
                padding: 0;
            }

            h1 {
                color: #FEFEFE;
                font-size: 3.5rem;
                font-weight: 600;

                @media (max-width: 700px) {
                    font-size: 3rem;
                }

                span {
                    background: linear-gradient(to left, #FEFEFE 20%, #FEFEFE80 40%, #FEFEFE80 60%, #FEFEFE 80%);
                    background-size: 200% auto;
                    background-clip: text;
                    -webkit-background-clip: text;
                    text-fill-color: transparent;
                    -webkit-text-fill-color: transparent;
                    animation: textMove 2s linear infinite;
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

            h3 {
                color: #A2A1A7;
                font-size: 2rem;
                font-weight: 500;

                @media (max-width: 700px) {
                    font-size: 1.5rem;
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
                cursor: pointer;
                animation: move 2s infinite;
                transition: all .2s ease;

                img {
                    width: 32px;
                }

                &:hover {
                    background: #1d1e20;
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
    }
`;