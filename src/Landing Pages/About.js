import React from 'react';
import "./About.css"


const About = () => {
    return (
        <div>
            <div className="about_section" style={{textAlign: "center"}}>
                <h1>The Creators</h1>
                <p>Currently, We aew technical fellows with Pursuit's full-stack software engineering fellowship. Planning to utilize my skills from the fellowship into creating beautiful and accessible web-spaces and applications for users to explore.</p>
            </div>
            <h2 style={{textAlign: "center"}}>Our Team</h2>

            <div className="column">
            <div className="card" >
                <div className="container">
                    <h2>Shamar Reeves</h2>
                    <p className="title">Developer</p>
                    <p>A student of the world, Shamar is fluent in several languages including Spanish and Jamaican Patois. He enjoys research and adding to his collection of interesting facts. His favorite moments away from tech and real estate include walks, traveling to different islands, playing basketball, mentoring his younger siblings, and using my love for fashion to style outfits.</p>
                    <p>shamar@dev.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
            </div>
            <div className="card">
                <div className="container">
                    <h2>Jahaad Petty</h2>
                    <p className="title">Developer</p>
                    <p></p>
                    <p>jp@dev.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default About;