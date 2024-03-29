import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Project = ({ name, slug, description, imageSrc, videoSrc, type, link, techs }) => {
    const [showGif, setShowGif] = useState(false);

    const playGif = () => {
        setShowGif(!showGif)
    }
    

    return(
        <ProjectContent>
            <div className="image">
                {showGif ?
                    <video src={videoSrc} autoPlay muted playsInline></video>
                    : 
                    <img src={imageSrc} alt="bg" className="banner"/>
                }
                <button className="play-gif" onClick={playGif}>
                    {showGif ?
                        <img src="/images/svg/image.svg" alt="icon"/>
                        : 
                        <img src="/images/svg/play.svg" alt="play"/>
                    }
                </button>
            </div>
            <div className="texts">
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
            <div className="infos">
                <div className="techs">
                    {techs.map((tech, index) => (
                        <img key={tech.name} src={tech.iconSrc} alt={tech.name} title={tech.name}/>
                    ))}
                </div>
                <span className={type == 'Corporativo' ? "tag corporativo" : "tag pessoal"}>
                    <div className="type">
                        <p>{type}</p>
                    </div>
                </span>
            </div>
            <div className="buttons">
                <a href={link} target="_blank">Visitar site</a>
                <button disabled>Ver repositório</button>
            </div>
            <a href={link} target="_blank" className="full-link"></a>
        </ProjectContent>
    )
}

export default Project

const ProjectContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    .full-link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        @media (min-width: 800px) {
            display: none;
        }
    }

    @media (min-width: 800px) {
        &:hover {
            .image {
                height: calc(12rem - 1rem - 38px);
            }

            .buttons {
                display: flex;
            }
        }
    }

    .image {
        position: relative;
        width: 100%;
        height: 12rem;
        transition: all .2s ease;

        img.banner, video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        button.play-gif {
            position: absolute;
            z-index: 999999;
            top: 0.5rem;
            left: 0.5rem;
            background: #1d1e2090;
            backdrop-filter: blur(50px);
            border-radius: 50%;
            border: 1px solid #FEFEFE00;
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
                border: 1px solid #FEFEFE75;
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
            color: #FEFEFE;
            user-select: none;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #A2A1A7;
            user-select: none;
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
                background: linear-gradient(to left, #FEFEFE 20%, #FEFEFE90 40%, #FEFEFE95 60%, #FEFEFE 80%);
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
        display: none;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 1rem;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 50%;
            background: #1d1e20;
            color: #FEFEFE;
            font-size: 1rem;
            font-weight: 600;
            padding: 0.5rem;
            border: 1px solid #1d1e20;
            text-decoration: none;
            transition: all .1s ease;
            cursor: pointer;

            &:hover {
                border: 1px solid #FEFEFE;
            }
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            opacity: 0.5;
            width: 50%;
            background: #1d1e20;
            color: #FEFEFE;
            font-size: 1rem;
            font-weight: 600;
            padding: 0.5rem;
            border: 1px solid #1d1e20;
            text-decoration: none;
            transition: all .1s ease;
            cursor: not-allowed;
        }
    }
`;