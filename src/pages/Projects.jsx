import React from "react";
import { useState, useEffect } from "react";




const Projects = (props) => {

    const [projects, setProjects] = useState(null)

    console.log(`${props.URL}projects`)

    
    useEffect((props) => {
        const getProjectsData = async () => {
            const response = await fetch(`${props.URL}projects`)
            const data = await response.json()
            console.log(data)
            setProjects(data)
        };
        getProjectsData()
    }, [])




    const loaded = () => {
        return (
            <div className="projects-section">
                <h1>Projects</h1>
                {projects.map((project) => {
                    return (
                        <div className="project">
                            <h2>{project.name}</h2>
                            <a href={project.live}  >Live Deployment</a>
                            <a href={project.git}  >Github</a>
                            <img className="project-image" src={project.image} alt={project.name} />
                        </div>
                    )
                })}
            </div>
        )       
    }

    const loading = () => {
        return (
            <h2>
                Loading ...
            </h2>
        )
    }

    return projects ? loaded() : loading()

}

export default Projects;