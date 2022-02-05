import { useToggles } from '../js/useToggles.js';
import Modal from "react-bootstrap/Modal";
import profilePhoto from '../img/mugshot.jpg';
import secondaryPhoto from '../img/sb-blue-mtn.jpg'

function About() {
    const { toggles, handleToggles } = useToggles({
        isMoreAboutModalOpen: false,
    });

    return (
        <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="row">
                                    <div className="col-sm-6 col-md-5">
                                        <div className="about-img">
                                            <img src={profilePhoto} className="img-fluid rounded b-shadow-a" alt="profile"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-7">
                                        <div className="about-info">
                                            <p><span className="title-s">Current Ocupation: </span> <span>Full Stack Web Developer</span></p>
                                            <p><span className="title-s">Current Employment Status: </span> <span>Freelancer</span></p>
                                            <p><a href="./Alex_Denyshchyk_Resume_2022.pdf" className="resume" id="downloadResume" download>Download Resume</a></p>
                                            <div className="column-skills">
                                                <div className="skill-mf">
                                                    <div className="title-box-2">
                                                        <h5 className="title-left">Skills</h5>
                                                    </div>
                                                    <div className="skills-column">
                                                        <div>HTML5</div>
                                                        <div>CSS/SASS</div>
                                                        <div>JavaScript</div>
                                                        <div>PHP/Laravel</div>
                                                        <div>AngularJS</div>
                                                        <div>ReactJS</div>
                                                        <div>Oracle MySQL/MS SQL</div>
                                                    </div>
                                                    <div className="skills-column">
                                                        <div>Wordpress</div>
                                                        <div>Postman</div>
                                                        <div>AWS</div>
                                                        <div>Git</div>
                                                        <div>Atlassian Jira</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column-skills" style={{float: 'right'}}>
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                About me
                                                </h5>
                                            </div>
                                            <p className="lead">
                                                Freelance Full Stack Web Developer with more than two years of experience in development and four years in various IT-related fields. I recently finished my Web Development and Internet Applications program at Fanshawe College (London, ON) with a GPA of 3.9. Highly interested in new partnerships and web development projects. <span id="aboutMore" className="about-more" onClick={() => handleToggles("isMoreAboutModalOpen", true)}>Find out more about me.</span>
                                            </p>
                                            <Modal show={ toggles.isMoreAboutModalOpen } size="lg">
                                                <Modal.Header>
                                                    <h3>Other Than Web Development</h3>
                                                    <i className="bi bi-x-lg modal-close" onClick={() => handleToggles("isMoreAboutModalOpen", false)}></i>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="container">
                                                    <div className="row gy-4">
                                                        <div className="col-lg-4">
                                                            <img src={secondaryPhoto} className="img-fluid rounded b-shadow-a" alt="my interests"/>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <p className="about-more-desc">My interests are not limited to Web Development and I am a certified snowboard instructor and Canadian Ski Patrol volunteer. I am convinced that there is always need for growth and my hobbies include sustainable travelling and trail running. Also, I am able to speak four languages and learning one on the top at the moment.</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer><button className="btn btn-danger" onClick={() => handleToggles("isMoreAboutModalOpen", false)}>Close</button></Modal.Footer>
                                            </Modal>
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

export default About;