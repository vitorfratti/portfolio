import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Experiences = () => {
    return (
        <ExperiencesContent>
            <div className="container">
                <div className="title" data-aos="fade-up">
                    <h2>Experiências</h2>
                    <p>Minha trajetória profissional até o momento.</p>
                </div>
                <div className="content">
                    
                </div>
            </div>
        </ExperiencesContent>
    )
}

export default Experiences

const ExperiencesContent = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    height: fit-content;
    padding: 2.5rem 0;

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
    }
`