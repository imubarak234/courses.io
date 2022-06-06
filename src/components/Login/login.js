import React from "react";

const Login = () => {

  return (
    <div className="d-flex flex-column align-items-center login">
      <div className="d-flex flex-column justify-content-center m-3">
        <h2 className="h1 p-3">Login Form</h2>
      </div>
      <form className="auth_form row g-3 needs-validation p-3 border" id="login_id" noValidate>
        <div className="col-md-12">
          <label htmlFor="validationCustomUsername" className="form-label w-100 p-3">
            Username
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please Enter a username.
              </div>
            </div>
          </label>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationCustom03" className="form-label w-100 p-3">
            Password
            <input type="password" className="form-control" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please Enter Password.
            </div>
          </label>
        </div>
        <div className="col-12">
          <button className="reg-button" type="submit" onClick={() => valid()}>Submit form</button>
        </div>
      </form>
      <p className="display-6 text-danger" id="warn" />
    </div>
  )
};

export default Login;