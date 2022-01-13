import React from 'react';
import bgImg from '../img/hero-bg.jpg';

function Hero() {
    return (
        <div id="hero" className="hero route bg-image" style={{backgroundImage: "url(" + bgImg + ")"}}>
            <div className="overlay-itro"></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h2 className="hero-title mb-3">Full Stack Web Developer</h2>
                        <p className="pt-3">
                            <a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">
                                Learn More
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;