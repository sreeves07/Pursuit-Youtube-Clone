import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div class="column">
            <div class="card" >
                <img src="" alt="Shamar" />
                <div class="container">
                    <h2>Shamar Reeves</h2>
                    <p class="title">Developer</p>
                    <p>A student of the world, Shamar is fluent in several languages including Spanish and Jamaican Patois. He enjoys research and adding to his collection of interesting facts. His favorite moments away from tech and real estate include walks, traveling to different islands, playing basketball, mentoring his younger siblings, and using my love for fashion to style outfits.</p>
                    <p>shamar@dev.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
            </div>

            <div class="card">
                <img src="" alt="JP" />
                <div class="container">
                    <h2>Jahaad Petty</h2>
                    <p class="title">Developer</p>
                    <p>Lorem Ipsum</p>
                    <p>jp@dev.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
            </div>
        </div>
    );
};

export default About;