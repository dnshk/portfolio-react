import React from 'react';
import ReactDOM from 'react-dom';

function Contact() {
    return (
        <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route">
  <div className="overlay-mf" />
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="contact-mf">
          <div id="contact" className="box-shadow-full">
            <div className="row">
              <div className="col-md-6">
                <div className="title-box-2">
                  <h5 className="title-left">
                    Contact Information
                  </h5>
                </div>
                <div className="more-info">
                  <p className="lead">
                    If you would like to contact me, please use the information below.
                  </p>
                  <ul className="list-ico">
                    {/* <li><span class="bi bi-geo-alt"></span> 329 WASHINGTON ST BOSTON, MA 02108</li> */}
                    <li><span className="bi bi-phone" /> (416) 704-2559</li>
                    <li><span className="bi bi-envelope" /> oleksii.denyshchyk@gmail.com</li>
                    <a href="https://www.linkedin.com/in/dnshk/"><span><i className="bi bi-linkedin" /></span> LinkedIn profile</a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></section>


    );
}

export default Contact;

if (document.getElementById('contact')) {
    ReactDOM.render(<Contact />, document.getElementById('contact'));
}
