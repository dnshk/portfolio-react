import React from 'react';

function Work() {
    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">
                                Portfolio
                            </h3>
                            <p className="subtitle-a">
                                My freelance, personal, and college projects are shown here.
                            </p>
                            <div className="line-mf" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="work-box">
                            <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                <div className="work-img">
                                    <img src="assets/img/work-1.jpg" alt="" className="img-fluid" />
                                </div>
                            </a>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">SportHub Website</h2>
                                        <div className="w-more">
                                            <span className="w-ctegory">Website</span> / <span className="w-date"> Jan - Apr, 2021</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="w-like">
                                            <a href="portfolio-details-1.html"> <span className="bi bi-plus-circle" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-box">
                            <a href="assets/img/Devtools/dev-tools-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                <div className="work-img">
                                    <img src="assets/img/Devtools/dev-tools-1.jpg" alt="" className="img-fluid" />
                                </div>
                            </a>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">DevTools Website</h2>
                                        <div className="w-more">
                                            <span className="w-ctegory">Website</span> / <span className="w-date">May, 2021</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="w-like">
                                            <a href="portfolio-details-2.html"> <span className="bi bi-plus-circle" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-box">
                            <a href="assets/img/WP-Designs/wp-designs-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                <div className="work-img">
                                    <img src="assets/img/WP-Designs/wp-designs-1.jpg" alt="" className="img-fluid" />
                                </div>
                            </a>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">WordPress Designs</h2>
                                        <div className="w-more">
                                            <span className="w-ctegory">Web Design</span> / <span className="w-date">May. 2021</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="w-like">
                                            <a href="portfolio-details-3.html"> <span className="bi bi-plus-circle" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="work-box">
                            <a href="assets/img/work-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                <div className="work-img">
                                    <img src="assets/img/work-2.jpg" alt="" className="img-fluid" />
                                </div>
                            </a>
                            <div className="work-content">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 className="w-title">Fan Check App Website</h2>
                                        <div className="w-more">
                                            <span className="w-ctegory">Web Design</span> / <span className="w-date"> Aug, 2020</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="w-like">
                                            <a href="portfolio-details-4.html"> <span className="bi bi-plus-circle" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;