import React from "react";
import { useState, useEffect } from "react";

const About = (props) => {

    const [about, setAbout] = useState(null)


    const backend = props.URL

    
    useEffect((props) => {
        const getAboutData = async () => {
            const response = await fetch(`${backend}about`)
            const data = await response.json()
            console.log(data)
            setAbout(data)
        };
        getAboutData()
    }, [backend])



    const loaded = () => {
        return (
            <div className="about-section">
                <h1>{about.name}</h1>
                <h3>Email me: {about.email}</h3>
                <p>{about.bio}</p>
            </div>
        )
    }

    const loading = () => {
        return (
            <h2>Loading</h2>
        )
    }

    return about ? loaded() : loading()
}

export default About;