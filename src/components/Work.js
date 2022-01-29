import React, {useState, useEffect} from 'react';
import 'bootstrap';
import { useToggles } from '../js/useToggles.js';

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

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
                    <Modal show={false}>
                        <Modal.Header>Test Header</Modal.Header>
                        <Modal.Body>Test Body</Modal.Body>
                        <Modal.Footer>Test Footer</Modal.Footer>
                    </Modal>
                    // projectData.projects && projectData.projects.length > 0 && projectData.projects.map((item)=>
                    //     <div className="col-md-4" key={item.key}>
                    //         <div className="work-box">
                    //             <a href={item.titleImage} data-gallery="portfolioGallery" className="portfolio-lightbox">
                    //                 <div className="work-img">
                    //                     <img src={item.titleImage} alt="showcase item" className="img-fluid" />
                    //                 </div>
                    //             </a>
                    //             <div className="work-content">
                    //                 <div className="row">
                    //                     <div className="col-sm-8">
                    //                         <h2 className="w-title">{item.title}</h2>
                    //                         <div className="w-more">
                    //                             <span className="w-ctegory">{item.type}</span> / <span className="w-date"> {item.date}</span>
                    //                         </div>
                    //                     </div>
                    //                     <div className="col-sm-4">
                    //                         <div className="w-like">
                    //                             <button data-toggle="modal" data-target={item.key}> <span className="bi bi-plus-circle" /></button>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //         <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    //             <div className="modal-dialog" role="document">
                    //                 <div className="modal-content">
                    //                     <div className="modal-header">
                    //                         <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    //                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    //                             <span aria-hidden="true">&times;</span>
                    //                         </button>
                    //                     </div>
                    //                     <div className="modal-body">
                    //                         ...
                    //                     </div>
                    //                     <div className="modal-footer">
                    //                         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    //                         <button type="button" className="btn btn-primary">Save changes</button>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </div>
                    // )
                }
                </div>
            </div>
        </section>
    );
}

export default Work;