import profilePhoto from '../img/mugshot.jpg'

function About() {
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
                                            <img src={profilePhoto} className="img-fluid rounded b-shadow-a" alt="personal photo"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-7">
                                        <div className="about-info">
                                            <p><span className="title-s">Current Ocupation: </span> <span>Full Stack Web Developer</span></p>
                                            <p><span className="title-s">Current Employment Status: </span> <span>Freelancer</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column-skills">
                                        <div className="skill-mf">
                                            <div className="title-box-2">
                                                <h5 className="title-left">Skills</h5>
                                            </div>
                                            <div className="skills-column">
                                                <div>Adobe Illustrator</div>
                                                <div>Adobe Photoshop</div>
                                                <div>Bootstrap</div>
                                                <div>Cascading Style Sheets </div>
                                                <div>Git</div>
                                                <div>GitHub</div>
                                                <div>HTML5</div>
                                                <div>JavaScript</div>
                                                <div>Jira</div>
                                            </div>
                                            <div className="skills-column">
                                                <div>jQuery</div>
                                                <div>JSON</div>
                                                <div>Apache Cordova </div>
                                                <div>Linux</div>
                                                <div>Apache2</div>
                                                <div>Microsoft Access</div>
                                                <div>Microsoft Excel</div>
                                                <div>Microsoft IIS</div>
                                                <div>Microsoft Office</div>
                                            </div>
                                            <div className="skills-column">
                                                <div>Microsoft Windows</div>
                                                <div>MySQL</div>
                                                <div>Node.js</div>
                                                <div>PHP</div>
                                                <div>PowerPoint</div>
                                                <div>SQL</div>
                                                <div>Vue.js</div>
                                                <div>WordPress</div>
                                                <div>XML</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column-skills" style={{float: 'right'}}>
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                About me
                                                </h5>
                                            </div>
                                            <p className="lead">
                                                Freelance Full Stack Web Developer with two years of experience in development and four years in various IT-related fields. I recently finished my Web Development and Internet Applications program at Fanshawe College (London, ON) with a GPA of 3.9. Highly interested in new partnerships and Web Development projects.
                                            </p>
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