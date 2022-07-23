import React from 'react';
import '../css/Login.css';


function Login () {
  return (
    <div className="Login">
      <form className="login-form">
        <div className="login-form-content">
          <h3 className="login-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            New Member <a href="/signup">Register</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;