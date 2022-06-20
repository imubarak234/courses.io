/* eslint-disable global-require */

import React from 'react';
import Navbar from '../Menu/Navbar';
import './courses.css';

const Courses = () => (
  <div className="d-flex h-100">
    <Navbar />
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow bg-body rounded">
                <img src={require('../images/undraw_Content_team_re_6rlg.png')} alt="" className="img-fluid card-img-top" />
                <div className="card-body">
                  <h4 className="card-title">Book A Class</h4>
                  <p className="card-text">
                    The book a course app is a web application that works like an online school.
                    As a new user you register and gain access to our list of courses.
                    The app allows you to reserve a course depending on the Start dates,
                    delete a course and add a course.
                  </p>
                  <div className="d-flex flex-wrap">
                    <p className="card-text lang">Ruby-on-Rails</p>
                    <p className="card-text lang">React & Redux</p>
                    <p className="card-text lang">html-css-javascript</p>
                  </div>
                  <a href="https://github.com/imubarak234/Book-a-class" target="_blank" rel="noopener noreferrer" className="btn btn-lg project-button">See Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow bg-body rounded">
                <img src={require('../images/undraw_Experience_design_re_ca7l.png')} alt="" className="img-fluid card-img-top" />
                <div className="card-body">
                  <h4 className="card-title">Budget-app</h4>
                  <p className="card-text">
                    The budget app is a fresh and convenient assistant to help keep
                    track of your spending and plan better
                  </p>
                  <div className="d-flex flex-wrap">
                    <p className="card-text lang">Ruby-on-Rails</p>
                    <p className="card-text lang">bootstrap</p>
                    <p className="card-text lang">html-css-javascript</p>
                  </div>
                  <a href="https://safe-thicket-25090.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-lg project-button">See Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow bg-body rounded">
                <img src={require('../images/undraw_Innovative_re_rr5i.png')} alt="" className="img-fluid card-img-top" />
                <div className="card-body">
                  <h4 className="card-title">MazeFlix</h4>
                  <p className="card-text">
                    MazeFlix is an entertainment hub where you can find the latest and
                    your favorite TV shows.
                    You can view the details of the show, like a show or even comment.
                    You can also see other comments which might give you a general idea
                    about what people think about the show.
                  </p>
                  <div className="d-flex flex-wrap">
                    <p className="card-text lang">JavaScript</p>
                    <p className="card-text lang">Webpack</p>
                    <p className="card-text lang">API</p>
                  </div>
                  <a href="https://anselemodims.github.io/MazeFlix/" rel="noopener noreferrer" target="_blank" className="btn btn-lg project-button">See Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default Courses;
