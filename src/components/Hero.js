import React, {useEffect} from 'react';
import bgImg from '../img/hero-bg.jpg';
import Typed from 'typed.js';
import {select} from '../js/main.js'

function Hero() {
    useEffect(() => {
        const typed = select('.typed');
        if (typed) {
            let typed_strings = typed.getAttribute('data-typed-items');
            typed_strings = typed_strings.split(',');
            new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
            });
        }
    });
    return (
        <div id="hero" className="hero route bg-image" style={{backgroundImage: "url(" + bgImg + ")"}}>
            <div className="overlay-intro"></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <p className="hero-subtitle">
                            <span className="typed" data-typed-items="Oleksii Denyshchyk"></span>
                        </p>
                        <h2 className="hero-title mb-3">
                            Full Stack Web Developer
                        </h2>
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