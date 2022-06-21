/* eslint-disable global-require */
/* eslint-disable max-len */

import React from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../Menu/Navbar';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import messenger from '../images/messenger.svg';
import whatsapp from '../images/whatsapp.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './courses.css';

const Courses = () => (
  <div className="d-flex h-100">
    <Navbar />

    <div id="second-half-courses" className="container">
      <div className="d-flex flex-column justify-content-center m-3 slide-title">
        <h2 className="h1 p-3">Course List</h2>
        <h4>Please take a pick</h4>
        <span />
      </div>
      <Carousel variant="dark">
        <Carousel.Item>
          <div className="slides-inner">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Content_team_re_6rlg.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Book A Class</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Experience_design_re_ca7l.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Budget-app</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Innovative_re_rr5i.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">MazeFlix</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slides-inner">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_mobile_analytics_72sr.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Book A Class</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Mobile_encryption_re_yw3o.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Budget-app</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Online_test_re_kyfx.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">MazeFlix</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slides-inner">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Photo_session_re_c0cp.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Book A Class</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Predictive_analytics_re_wxt8.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Budget-app</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_React_re_g3ui.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">MazeFlix</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slides-inner">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Reminder_re_wxwu.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Book A Class</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Static_website_re_x70h.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Budget-app</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card  bg-body rounded">
                  <div className="card-image">
                    <img src={require('../images/undraw_Team_up_re_wadf.png')} alt="" className="img-fluid card-img-top" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">MazeFlix</h4>
                    <p className="card-text">
                      The book a course app is a web application that works like an online school.
                      As a new user you register and gain access to our list of courses.
                    </p>
                    <div className="d-flex flex-wrap socials">
                      <img src={facebook} alt="facebook-icon" className="img-fluid" />
                      <img src={whatsapp} alt="whatsapp-icon" className="img-fluid" />
                      <img src={messenger} alt="messenger-icon" className="img-fluid" />
                      <img src={twitter} alt="twitter-icon" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>

  </div>
);

export default Courses;
