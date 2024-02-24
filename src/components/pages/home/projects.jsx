import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
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
            duration: 2500
        })
    }, [])

    return(
        <ProjectsContent data-section="projetos">
            <div className="container" data-aos="fade-up">
                <div className="title">
                    <h2>Projetos</h2>
                    <p>Alguns dos projetos onde são aplicados meus conhecimentos.</p>
                </div>
                <div className="projects">
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
                                video={project.video}
                                type={project.type}
                                link={project.link}
                                techs={project.techs}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="link">
                    <a href="https://github.com/vitorfratti?tab=repositories" target="_blank">
                        Ver repositórios do GitHub
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
    background: #08090a;
    padding: 5rem 0 2.5rem 0;

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
                position: relative;
                font-size: 1.25rem;
                font-weight: 600;
                color: #FEFEFE;
                text-decoration: none;

                &::before {
                    content: '';
                    width: 0;
                    height: 2px;
                    border-radius: 2px;
                    background-color: #FEFEFE;
                    position: absolute;
                    bottom: -.25rem;
                    right: 0;
                    transition: right .4s, width .4s, left .4s;
                }

                &:hover::before {
                    width: 100%;
                    left: 0;
                }
            }
        }
    }
`;