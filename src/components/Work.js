import React, { useState, useEffect } from 'react';
import { useToggles } from '../js/useToggles.js';
import 'bootstrap';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function Work() {
    const [updateData, setUpdateData] = useState('');
    const [projectData, setProjectData] = useState([]);
    const getData = () => {
        fetch('config.json',
            {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(responseData) {
                setProjectData(responseData);
                setUpdateData('updated');
            });
    }

    useEffect(() => {
        getData();
    }, [updateData]);

    const { toggles, handleToggles } = useToggles({
        isHarvadaModalOpen: false,
        isEveryDropModalOpen: false,
        isSportHubModalOpen: false,
        isFanCheckModalOpen: false
    });
    useEffect(() => {
        new Swiper('.portfolio-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            }
        });
    });

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
                {
                    projectData.projects && projectData.projects.length > 0 && projectData.projects.map((item)=>
                        <div className="col-md-4" key={item.key}>
                            <div className="work-box">
                                <div className="work-img">
                                    <img src={`${process.env.PUBLIC_URL}` + item.titleImage} alt="showcase item" className="img-fluid" />
                                </div>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h2 className="w-title">{item.title}</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">{item.type}</span> / <span className="w-date"> {item.date}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="w-like">
                                                <a className="project-expand" onClick={() => handleToggles(item.toggle, true)}> <span className="bi bi-plus-circle" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal show={ eval("toggles." + item.toggle) } size="lg">
                                <Modal.Header>{item.title}</Modal.Header>
                                <Modal.Body>
                                    <section id="portfolio-details" className="portfolio-details">
                                        <div className="container">
                                            <div className="row gy-4">
                                                <div className="col-lg-8">
                                                    <div className="portfolio-details-slider swiper-container">
                                                        <div className="swiper-wrapper align-items-center">
                                                            {
                                                                item.images && item.images.length > 0 && item.images.map((image)=>
                                                                    <div className="swiper-slide" key={image}>
                                                                        <img src={`${process.env.PUBLIC_URL}` + image} alt="project" />
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                        <div className="swiper-pagination"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="portfolio-info">
                                                        <h3>Project information</h3>
                                                        <ul>
                                                          <li><strong>Category</strong>: {item.category}</li>
                                                          <li><strong>Client</strong>: {item.client}</li>
                                                          <li><strong>Project date</strong>: {item.date}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="portfolio-description">
                                                        <h2>Project Details</h2>
                                                        <p>
                                                            {item.details}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Modal.Body>
                                <Modal.Footer><button className="btn btn-danger" onClick={() => handleToggles(item.toggle, false)}>Close</button></Modal.Footer>
                            </Modal>
                        </div>
                    )
                }
                </div>
            </div>
        </section>
    );
}

export default Work;