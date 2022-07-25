import React, { useState } from "react";
import { Link,  } from "react-router-dom";


function Signup() {
//  const navigate =useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createUser =   (e) => {
    console.log("Welcome")
    e.preventDefault()
     fetch(`http://localhost:2022/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
        password,
      }),
    })
    
    .then(res => res.json())
    .then(data => {
      // navigate("/Login.js")
      alert("Successfully registered!")
      console.log("data", data)
    })
  }

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }
  function handleLastName(e) {
    setLastName(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handleUsername(e) {
    setUsername(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }

  return (
    <div className="Login">
    <form className="login-form" onSubmit={ (e) => createUser(e)}>
      <div className="login-form-content">
        <h3 className="login-title">Register</h3>
        <div className="form-group mt-3">
          <label>First Name</label>
          <input
          value = {firstName}
          onChange={(e) => handleFirstName(e)}
            type="text"
            className="form-control mt-1"
            placeholder="enter first name"
            name="firstName"
          />
        </div>
        <div className="form-group mt-3">
          <label>Last Name</label>
          <input
          value = {lastName}
          onChange={(e) => handleLastName(e)}
            type="text"
            className="form-control mt-1"
            placeholder="enter last name"
            name="lastName"
          />
        </div>
        <div className="form-group mt-3">
          <label>Email Address</label>
          <input
          value = {email}
          onChange={(e) => handleEmail(e)}
            type="email"
            className="form-control mt-1"
            placeholder="enter email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
          value = {username}
          onChange={(e) => handleUsername(e)}
            type="text"
            className="form-control mt-1"
            placeholder="enter username"
            name="username"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
           value = {password}
           onChange={(e) => handlePassword(e)}
            type="password"
            className="form-control mt-1"
            placeholder="enter password"
            name="password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="button" className="btn btn-primary" onClick={createUser}>
            Submit
          </button>
        </div>
      </div>
  
    </form>
  </div>
  )
}
  
export default Signup;