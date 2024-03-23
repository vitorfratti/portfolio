import React, { useEffect, useState, useParams } from 'react'
import Header from '../../partials/header'

const Single = ({ projects, activeSection, setActiveSection, goToSection }) => {

    useEffect(() => {
        console.log(projects)
    }, [projects])

    return (
        <>
            <Header
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            goToSection={goToSection}/>

            <section className="single">
                <div className="container">
                    <div className="left">

                    </div>
                    <div className="right">
                        <span>
                            <h1></h1>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Single