import React, { useState ,useEffect} from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast ,ToastContainer} from "react-toastify";
const Login = () => {
  const [email, emailUpdate] = useState("",[]);
  const [password, passwordUpdate] = useState("");

  // useEffect(()=>
  // {
  //   axios.get('http://localhost:4000/users').then((res)=>{
  //     setEmail(res.email)
  //     setPassword(res.password)
  //   })
  // },[])
  
  const handleEmailChange = (e) => {
    emailUpdate(e.target.value);
  };

  const handlePasswordChange = (e) => {
    passwordUpdate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate())
    {

      fetch("http://localhost:4000/users/"+email).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
    }).catch((err)=>{
      toast.error("Login failed due to :"+err.message);
    })
    }
  };
  const validate=()=>
  {
    let result=true;
    if(email==='' ||email===null){
    return false;
    toast("Please Enter Valid EmailID");
    }
    if(password==='' ||password===null){
    return false;
    toast.warning("Enter valid password");
    }
    return result;
  }

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
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label>Password</label>
        <input
          id="password"
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <center>
          <Button  type="submit" className="button">
            <Link to="/userpage" style={{ textDecoration: "none", color: "white" }}>
              LOGIN
            </Link>
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