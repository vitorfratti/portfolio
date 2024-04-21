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

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 2000
        })
    }, [])

    return(
        <ProjectsContent data-section="projetos">
            <div className="container">
                <div className="title" data-aos="fade-up">
                    <h2>Projetos</h2>
                    <p>Alguns dos projetos que desenvolvi recentemente.</p>
                </div>
                <div className="projects" data-aos="fade-up">
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
                                name={project.name}
                                slug={project.slug}
                                description={project.description}
                                imageSrc={project.imageSrc}
                                videoSrc={project.videoSrc}
                                type={project.type}
                                link={project.link}
                                techs={project.techs}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="link">
                    <Link to={'/projetos'}>
                        Ver todos os projetos
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f7f8f8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#f7f8f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </Link>
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
            height: 22rem;

            @media (max-width: 1000px) {
                height: 24rem;
            }

            .swiper-pagination {
                z-index: 999;

                .swiper-pagination-bullet {
                    background: #FEFEFE;
                }
            }
        }

        .link {
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

                svg {
                    width: 1.25rem;
                    height: 1.25rem;
                }
            }
        }
    }
`;