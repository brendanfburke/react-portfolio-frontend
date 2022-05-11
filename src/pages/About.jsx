import React from "react";
import { useState, useEffect } from "react";

const About = (props) => {

    const [about, setAbout] = useState(null)

    console.log(`${props.URL}about`)

    
    useEffect((props) => {
        const getAboutData = async () => {
            const response = await fetch(`${props.URL}about`)
            const data = await response.json()
            console.log(data)
            setAbout(data)
        };
        getAboutData()
    }, [])



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