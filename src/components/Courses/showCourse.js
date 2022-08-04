import React from 'react';
import Navbar from '../Menu/Navbar';
import './courses.css';

const ShowCourse = () => (
  <div className="d-flex h-100">
    <Navbar />

    <div className="d-flex justify-content-between" id="second-half">
      <div className="h-100 w-75 d-flex justify-content-center align-content-center">
        <img src="./images/undraw_Static_website_re_x70h-removebg-preview.png" alt="" className="img-fluid" />
      </div>
      <div className=" h-100 w-25 me-5">
        <h2 className="h2 p-2 mb-2">Title of Course</h2>
        <span className="d-flex w-100 justify-content-between bg-secondary text-white">
          <p className="p-2 mb-2">Category</p>
          <p className="p-2 mb-2">Category</p>
        </span>

        <span className="d-flex w-100 justify-content-between">
          <p className="p-2 mb-2 ">Price</p>
          <p className="p-2 mb-2 ">Price</p>
        </span>

        <span className="d-flex w-100 justify-content-between bg-secondary text-white">
          <p className="p-2 mb-2">Duration</p>
          <p className="p-2 mb-2">Duration</p>
        </span>

        <span className="d-flex w-100 justify-content-between">
          <p className="p-2 mb-2">Description:</p>
          <p className="p-2 mb-2">Description Description Description Description Description Description</p>
        </span>

        <button type="button" className="btn btn-outline-success">
          <i className="bi bi-card-checklist px-2" />
          Reserve Course
          <i className="bi bi-arrow-right-circle px-2" />
        </button>
      </div>
    </div>
  </div>
);

export default ShowCourse;
