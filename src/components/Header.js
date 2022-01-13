import React, { useEffect, useState } from 'react';
import {onscroll, select} from '../js/main.js'

function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [activeLink, setActive] = useState(false);

    useEffect(() => {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
              setScrolling(true);
            } else {
              setScrolling(false);
            }
        }
        window.addEventListener('load', headerScrolled);
        onscroll(document, headerScrolled);

        let navbarlinks = select('#navbar .scrollto', true);
        const navbarlinksActive = () => {
          let position = window.scrollY + 100
          navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
              navbarlink.classList.add('active')
            } else {
              navbarlink.classList.remove('active')
            }
          })
        }
        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);
    });
    return (
        <header id="header" className={scrolling ?  'header-scrolled fixed-top' : 'fixed-top'}>
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo">
                    <a href="index.html">
                        Oleksii Denyshchyk
                    </a>
                </h1>
                <nav id="navbar" className='navbar'>
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto " href="#work">Work</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;