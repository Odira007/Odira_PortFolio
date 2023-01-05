import React from 'react';
import Odira from '../../src/images/pro-4-pic.jpg'

const Hero = () => {
    return(
        <div className="hero-container">
            <div className="bio">
                <h3>Hello,</h3>
                <h1>I'm Odira Ikewelugo</h1>
                <p>I am a solution-driven Software Engineer with experience 
                    in Design and Development adept at contributing a 
                    highly collaborative work environment, finding solutions and
                    customer satisfaction
                </p>
                <button>Download Resume</button>
            </div>
            <div className="hero-image">
                <img src={Odira} alt="test" loading="lazy" className="profile-image" />
            </div>
            
        </div>
    )
}
export default Hero