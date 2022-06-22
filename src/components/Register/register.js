import React from 'react';
import Navbar from '../Menu/Navbar';

const Register = () => (
  <div className="d-flex h-100">
    <Navbar />

    <div className="d-flex flex-column align-items-center" id="second-half">
      <div className="d-flex flex-column justify-content-center p-2 reg-title">
        <h2 className="h1 pb-3">Registration Form</h2>
        <span />
      </div>
      <form className="auth_form_reg row needs-validation shadow-lg p-3 mb-5 bg-body rounded border" id="reg_id" noValidate>
        <div className="col-sm-12">
          <label htmlFor="validationCustom01" className="form-label w-100 p-3">
            Full name
            <input type="text" className="form-control" id="validationCustom01" required />
            <div className="invalid-feedback">
              Please provide your full name
            </div>
          </label>
        </div>
        <div className="col-sm-12">
          <label htmlFor="validationCustomUsername" className="form-label w-100 p-3">
            Username
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </label>
        </div>
        <div className="col-sm-12">
          <label htmlFor="validationCustom03" className="form-label w-100 p-3">
            Email
            <input type="email" className="form-control" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please provide a Email Address.
            </div>
          </label>
        </div>
        <div className="col-sm-12">
          <label htmlFor="valid04" className="form-label w-100 p-3">
            Password
            <input type="password" className="form-control" id="valid04" required />
            <div className="invalid-feedback">
              Please provide a password.
            </div>
          </label>
        </div>

        <div className="col-12 mb-2">
          <button className="reg-button" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  </div>

);

export default Register;
