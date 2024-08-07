import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Project = ({ project }) => {
    const [showGif, setShowGif] = useState(false)

    const playGif = () => {
        setShowGif(!showGif)
    }

    return(
        <ProjectContent>
            <div className="image">
                {showGif ?
                    <video src={project.videoSrc} autoPlay muted playsInline></video>
                    : 
                    <img src={project.imageSrc} alt="bg" className="banner"/>
                }
                {project.videoSrc ?  
                    <button className="play-gif" onClick={playGif}>
                        {showGif ?
                            <img src="/images/svg/image.svg" alt="icon"/>
                            : 
                            <img src="/images/svg/play.svg" alt="play"/>
                        }
                    </button>
                    :
                    <></>
                }
            </div>
            <div className="texts">
                <h5>{project.name}</h5>
                <p>{project.description}</p>
            </div>
            <div className="infos">
                <div className="techs">
                    {project.techs.map((tech, index) => (
                        <img key={tech.name} src={tech.iconSrc} alt={tech.name} title={tech.name}/>
                    ))}
                </div>
                <span className={project.type == 'Corporativo' ? "tag corporativo" : "tag pessoal"}>
                    <div className="type">
                        <p>{project.type}</p>
                    </div>
                </span>
            </div>
            <div className="buttons">
                {project.link ?
                    <a href={project.link} target="_blank">Visitar site</a>
                    :
                    <button disabled>Visitar site</button>
                }
                {project.repositoryLink ?
                    <a href={project.repositoryLink} target="_blank">Ver repositório</a>
                    :
                    <button disabled>Ver repositório</button>
                }
            </div>
        </ProjectContent>
    )
}

export default Project

const ProjectContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(33% - 0.5rem);
    height: fit-content;

    @media (width <= 900px) {
        width: calc(50% - 0.5rem);
        margin-bottom: 1.5rem;
    }

    @media (width <= 500px) {
        width: 100%;
        margin-bottom: 3rem;
    }

    @media (width > 900px) {
        &:hover {
            .image {
                height: calc(12rem - 1rem - 38px);
            }

            .buttons {
                a, button {
                    transform: scale(1);
                }
            }
        }
    }

    .image {
        position: relative;
        width: 100%;
        height: 12rem;
        border: 1px solid #2e2e32;
        box-shadow: 0 0 50px #f7f8f815;
        transition: all .2s ease;

        img.banner, video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .play-gif {
            position: absolute;
            z-index: 999999;
            top: 0.5rem;
            left: 0.5rem;
            backdrop-filter: blur(50px);
            border-radius: 50%;
            background: linear-gradient(270deg, #232326, #2e2e32);
            border: 1px solid #2e2e32;
            box-shadow: 0 0 50px #f7f8f825;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.25rem;
            cursor: pointer;
            transition: all .2s ease;

            @media (max-width: 500px) {
                padding: 0.5rem;

                img {
                    width: 1.5rem;
                }
            }

            img {
                width: 1.5rem;
            }

            &:hover {
                background: #1d1e20;
                border: 1px solid #f7f8f875;
            }
        }
    }

    .texts {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.75rem 0;

        h5 {
            font-size: 1.25rem;
            font-weight: 500;
            color: #f7f8f8;
            user-select: none;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #d0d6e0;
            user-select: none;
            line-height: 1.5;
        }
    }

    .infos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        .techs {
            display: flex;
            align-items: center;
            gap: 1rem;

            img {
                width: 1.25rem;
            }
        }

        .tag {
            width: fit-content;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem 0.5rem;
            user-select: none;

            p {
                background: linear-gradient(to left, #f7f8f8 20%, #f7f8f890 40%, #f7f8f895 60%, #f7f8f8 80%);
                background-size: 200% auto;
                background-clip: text;
                -webkit-background-clip: text;
                text-fill-color: transparent;
                -webkit-text-fill-color: transparent;
                animation: textMove 2s linear infinite;
            }

            .type {
                position: relative;
                z-index: 10;

                p {
                    font-size: 1rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }
            }
        }
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 1rem;
        transition: all .2s ease;

        a {
            transform: scale(0);
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 50%;
            background: linear-gradient(270deg, #232326, #2e2e32);
            border: 1px solid #2e2e32;
            color: #f7f8f8;
            font-size: 1rem;
            font-weight: 600;
            padding: 0.5rem;
            text-decoration: none;
            transition: all .2s ease;
            cursor: pointer;

            &:hover {
                border: 1px solid #f7f8f875;
            }

            @media (width <= 900px) {
                transform: scale(1);
            }
        }

        button {
            transform: scale(0);
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            opacity: 0.5;
            width: 50%;
            background: #1d1e20;
            color: #f7f8f8;
            font-size: 1rem;
            font-weight: 600;
            padding: 0.5rem;
            border: 1px solid #1d1e20;
            text-decoration: none;
            transition: all .2s ease;
            cursor: not-allowed;

            @media (width <= 900px) {
                transform: scale(1);
            }
        }
    }
`;