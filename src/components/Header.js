import React, { useEffect, useState } from 'react';
import { onscroll, select } from '../js/main.js';

function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [activeLink, setActiveLink] = useState('#hero');

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
            let position = window.scrollY + 200;
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return;
                let section = select(navbarlink.hash);
                if (!section) return;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    setActiveLink(navbarlink.hash);
                }
            });
        }
        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);
    });
    return (
        <header id="header" className={scrolling ?  'header-scrolled fixed-top' : 'fixed-top'}>
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo">
                    <a href="#hero">
                        Alex Denyshchyk
                    </a>
                </h1>
                <nav id="navbar" className='navbar'>
                    <ul>
                        <li><a className={activeLink === '#hero' ? 'active nav-link scrollto' : 'nav-link scrollto'} href="#hero">Home</a></li>
                        <li><a className={activeLink === '#about' ? 'active nav-link scrollto' : 'nav-link scrollto'} href="#about">About</a></li>
                        <li><a className={activeLink === '#work' ? 'active nav-link scrollto' : 'nav-link scrollto'} href="#work">Work</a></li>
                        <li><a className={activeLink === '#contact' ? 'active nav-link scrollto' : 'nav-link scrollto'} href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;