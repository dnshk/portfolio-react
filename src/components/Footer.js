import React, {useEffect} from 'react';
import {select, onscroll} from '../js/main.js'

function Footer() {
    useEffect(() => {
        let preloader = select('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.remove()
            });
        }
        let backtotop = select('.back-to-top')
        if (backtotop) {
          const toggleBacktotop = () => {
            if (window.scrollY > 100) {
              backtotop.classList.add('active')
            } else {
              backtotop.classList.remove('active')
            }
          }
          window.addEventListener('load', toggleBacktotop)
          onscroll(document, toggleBacktotop)
        }
    });
    return (
        <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="copyright-box">
                            <p className="copyright">
                                2021 <strong>Oleksii Denyshchyk</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div id="preloader"></div>
        <a href="#hero" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
}

export default Footer;