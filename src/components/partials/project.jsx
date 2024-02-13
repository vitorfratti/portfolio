import styled from 'styled-components'

const Project = ({ name, description, imageSrc, type, link, techs }) => {
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
                    <img key={tech.name} src={tech.iconSrc} alt={tech.name}/>
                ))}
            </div>
            <div className="buttons">
                <button>Visitar site</button>
                <button>Ver detalhes</button>
            </div>
        </ProjectContent>
    )
}

export default Project

const ProjectContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 33%;
    height: auto;

    &:hover {
        .image {
            height: calc(12rem - 1rem - 38px);
        }

        .buttons {
            display: flex;
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

            &.corporativo {
                background: #000
            }

            &.pessoal {
                background: #3c4adb;
            }

            .type {
                position: relative;
                z-index: 10;

                p {
                    color: #FEFEFE;
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
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #A2A1A7;
        }
    }

    .techs {
        display: flex;
        justify-content: flex-start;
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

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 50%;
            gap: 0.5rem;
            background: #1d1e20;
            color: #FEFEFE;
            font-size: 1rem;
            font-weight: 600;
            padding: 0.5rem;
            border: 1px solid #1d1e20;
            text-decoration: none;
            transition: all .1s ease;
            cursor: pointer;

            img {
                width: 1.5rem;
            }

            &:hover {
                border: 1px solid #FEFEFE;
            }
        }
    }
`;