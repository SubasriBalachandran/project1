import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  const[data,setData]=useState(
    {
      email:"",
      password:""
    }
  );
  const handleInput=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  useEffect(()=>
  {
    axios.get(' http://localhost:4000/users')
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", data.email);
    console.log("Password:", data.password);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <center>
          <Typography
            component="h3"
            variant="h3"
            color="white"
            letterSpacing={3}
            marginTop={2}
          >
            USER LOGIN
          </Typography>
          <p>Please login to continue</p>
        </center>
        <label>Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleInput}
          required
        />
        <label>Password</label>
        <input
          id="password"
          label="Password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleInput}
          required
        />
        <center>
          <Button className="button" type="submit" style={{color:"white"}}>
            LOGIN
            {/* <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              LOGIN
            </Link> */}
          </Button>
        </center>
        <p>Forgot password?</p>
        <Typography paddingLeft={4}>
          Don't have an account?&emsp;
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            Register
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default Login;