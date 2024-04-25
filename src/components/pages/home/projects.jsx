import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Project from '../../partials/project'

const Projects = ({ projects }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500)

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 2000
        })
    }, [])

    return(
        <ProjectsContent data-section="projetos">
            <div className="container" data-aos="fade-up">
                <div className="title">
                    <h2>Projetos</h2>
                    <p>Alguns dos projetos que desenvolvi recentemente.</p>
                </div>
                <div className="projects">
                    {isMobile ?
                        <Swiper
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                        }}
                        modules={[Pagination]}
                        spaceBetween={15}
                        slidesPerView={1}
                        breakpoints={{
                            1000: {
                                slidesPerView: 3,
                            },
                            500: {
                                slidesPerView: 2,
                            }
                        }}>
                            {projects.map((project, index) => (
                                <SwiperSlide key={project.id}>
                                    <Project
                                    project={project}
                                    key={project.id}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        :
                        <>
                            {projects.map((project, index) => (
                                    <Project
                                    project={project}
                                    key={project.id}
                                    />
                            ))}
                            <div className="project">
                                <div className="image">
                                    <svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#f7f8f8" fill-rule="evenodd" d="M8.603 2.549A4.251 4.251 0 005.47 8.696a1.076 1.076 0 01-.255 1.312l-3 2.374a.75.75 0 01-.93-1.176l2.701-2.139A5.75 5.75 0 019.47 1.004c.53.02.924.363 1.066.797.137.42.035.902-.306 1.243L8.75 4.523v1.596l1.13 1.13h1.597l1.48-1.479a1.22 1.22 0 011.241-.306c.435.142.778.537.798 1.066a5.75 5.75 0 01-7.978 5.52l-2.102 2.664a.75.75 0 01-1.177-.928l2.333-2.959a1.076 1.076 0 011.297-.265 4.251 4.251 0 006.082-3.165L12.41 8.438c-.199.2-.47.312-.75.312h-1.96c-.282 0-.552-.112-.751-.312L7.56 7.052c-.199-.2-.311-.47-.311-.751V4.34c0-.281.112-.551.311-.75l1.042-1.042z" clip-rule="evenodd"></path></g></svg>
                                </div>
                                <div className="texts">
                                    <h5>Em desenvolvimento</h5>
                                    <p>Aguarde, projeto em desenvolvimento...</p>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <div className="see-repositories">
                    <a href="https://github.com/vitorfratti?tab=repositories" target="_blank">
                        Ver repositórios no GitHub
                        <img src="/images/svg/github.svg" alt="github"/>
                    </a>
                </div>
            </div>
        </ProjectsContent>
    )
}

export default Projects

const ProjectsContent = styled.section`
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 2.5rem 0 5rem 0;

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

        .projects {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            height: calc(fit-content + 2rem) !important;

            &::after {
                content: "";
                width: calc(33% - 0.5rem);
            }

            .project {
                position: relative;
                z-index: 10;
                display: flex;
                flex-direction: column;
                width: calc(33% - 0.5rem);
                height: auto;

                @media (width <= 900px) {
                    width: calc(50% - 0.5rem);
                }

                @media (width <= 500px) {
                    display: none;
                }

                .image {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 12rem;
                    background: linear-gradient(45deg, #23232650, #232326);
                    backdrop-filter: blur(4px);
                    border: 1px solid #2e2e32;
                    box-shadow: 0 0 50px #f7f8f835;
                    transition: all .2s ease;

                    svg {
                        width: 4rem;
                        height: 4rem;
                        animation: building 1.5s infinite ease;
                    }

                    @keyframes building {
                        0% {
                            transform: rotate(0);
                        }
                        50% {
                            transform: rotate(25deg);
                        }
                        100% {
                            transform: rotate(0);
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
            }

            .swiper-pagination {
                z-index: 999;

                .swiper-pagination-bullet {
                    background: #FEFEFE;
                }
            }
        }

        .see-repositories {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                position: relative;
                font-size: 1.125rem;
                font-weight: 600;
                color: #FEFEFE;
                text-decoration: none;

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

                img {
                    width: 1.125rem;
                    height: 1.125rem;
                }
            }
        }
    }
`;