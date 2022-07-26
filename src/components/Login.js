import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/Login.css';


function Login () {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[direct,setDirect] = useState(false)

  const loginUser = async (e) => {
    e.preventDefault()
     fetch(`http://localhost:2022/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    
    .then(res => res.json())
    .then(data => {
      setDirect(true)
      alert("Successful!")
    })
  }
  if (direct) {
    return <Redirect to='/deals'/>;}

  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }

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
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="enter password"
              onChange={(e) => handlePassword(e)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={loginUser}>
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