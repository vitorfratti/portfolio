import styled from 'styled-components'

const Project = ({ name, slug, description, imageSrc, type, link, techs }) => {
    return(
        <ProjectContent>
            <div className="image">
                <img src={imageSrc} alt="bg" className="banner"/>
                <span className={type == 'Corporativo' ? "tag corporativo" : "tag pessoal"}>
                    <div className="type">
                        <p>{type}</p>
                    </div>
                </span>
            </div>
            <div className="texts">
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
            <div className="techs">
                {techs.map((tech, index) => (
                    <img key={tech.name} src={tech.iconSrc} alt={tech.name} title={tech.name}/>
                ))}
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

        img.banner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .tag {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 99;
            width: fit-content;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem 0.5rem;
            border: 1px solid #A2A1A7;
            box-shadow: 0 0 5px #00000050;
            user-select: none;

            &.corporativo {
                background: #1d1e20;

                p {
                    color: #FEFEFE;
                }
            }

            &.pessoal {
                background: #FEFEFE;

                p {
                    color: #1d1e20;
                }
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

    .techs {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 1.25rem;
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