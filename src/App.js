import React from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import technologies from "./technologies";

import './App.css';

const App = () => {
    const tech = technologies.map(techs => {
        return <Skills 
            key={techs.name}
            logo={techs.logo}
            name={techs.name}
        />
    })
    return(
        <div>
            <Navbar />
            
            <Hero />
            <div className="pros-skills">
            <div className="skills">
                <div className="skill-header">
                    <span>&lt;</span>
                    <span className="head">SKILLS</span>
                    <span>&#47;&gt;</span>
                </div>
                {tech}
            </div>

            <Projects />
            </div>
            <Footer />
            
        </div>
    );
}
export default App