import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {

  const [post,setPost]=useState(
    {
      name:"",
      email:"",
      password:"",
      state:"",
      phone:""
    }
  );
  const handleInput=(e)=>
  {
    setPost({...post,[e.target.name]:e.target.value})
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^[0-9]{10}$/.test(post.phone)) {
    } else {
      alert("Invalid phone number format!");
    }
    axios.post('  http://localhost:4000/users',{post}).then(response=>{console.log(response.data)})
    .catch(err=>{console.log(err)});

   
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="form">
        <br></br>
        <center>
          <Typography
            component="h2"
            variant="h4"
            color="white"
            letterSpacing={6}
          >
            REGISTER !
          </Typography>
        </center>
        <label className="lb">Name</label>
        <input
          className="inp"
          id="Name"
          name="name"
          type="Name"
          value={post.name}
          onChange={handleInput}
          required
        />
        <label className="lb">Email Address</label>
        <input
          className="inp"
          id="email"
          name="email"
          type="email"
          value={post.email}
          onChange={handleInput}
          required
        />
        <label className="lb">Password</label>
        <input
          className="inp"
          id="password"
          name="password"
          type="password"
          value={post.password}
          onChange={handleInput}
          required
        />
        <label className="lb">State</label>
        <input
          className="inp"
          id="state"
          name="state"
          type="State"
          value={post.state}
          onChange={handleInput}
          required
        />
        <label className="lb">Phone Number</label>
        <input
          className="inp"
          type="tel"
          id="phone"
          name="phone"
          value={post.phone}
          onChange={handleInput}
         // pattern="[0-9]{10}"
          required
        />
        <center>
          <Button type="submit" className="but" style={{ color: "white" }}>
             {/* <Link to="/login" style={{ textDecoration: "none", color: "black" }} >
            Sign Up
            </Link> 
             */}
             Sign Up
          </Button>
        </center>
        <br></br>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Already have an account?&emsp;
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            Login
          </Link>
        </Typography>
      </form>
    </div>
  );
};
export default SignUp;