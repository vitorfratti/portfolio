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
            duration: 650
        })
    }, [])

    return(
        <ProjectsContent data-section="projetos">
            <div className="container">
                <div className="title">
                    <h2 data-aos="fade-up">Projetos</h2>
                    <p data-aos="fade-up">Alguns dos projetos que desenvolvi recentemente.</p>
                </div>
                <div className="projects" data-aos="fade-up">
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