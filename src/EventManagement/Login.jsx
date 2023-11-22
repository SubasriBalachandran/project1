import React, { useState } from "react";

import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
    className="login"   >
      <Paper
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          maxWidth: 500,
          margin: "auto",
          marginTop: 130,
          backgroundColor: "#7439db",
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYiRjZ_iuOepnNoqhFs4gXogvjwrHKTh4kiw&usqp=CAU")',
        }}
      >
        <div style={{ paddding: "5", borderRadius: "10" }}>
          <center>
            {" "}
            <Typography component="h3" variant="h3">
              USER LOGIN
            </Typography>
            <p>Please login to continue</p>
          </center>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <br></br>
            <br></br>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button variant="contained" style={{ backgroundColor: "black" }}>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  LOGIN
                </Link>
              </Button>
            </Box>
            <br></br>
            <br></br>
            <Typography>
              Don't have an account?&emsp;
              <Link to="/signup">Register</Link>
            </Typography>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default Login;