import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [State, setState] = useState("");
  const [Phone, setPhone] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Name:", Name);
    console.log("Select State:", State);
    console.log("Phone number:", Phone);
    if (/^[0-9]{10}$/.test(Phone)) {
    } else {
      alert("Invalid phone number format!");
    }
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
          label="Name"
          name="Name"
          type="Name"
          value={Name}
          onChange={handleNameChange}
          required
        />
        <label className="lb">Email Address</label>
        <input
          className="inp"
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
        <label className="lb">Password</label>
        <input
          className="inp"
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
        <label className="lb">State</label>
        <input
          className="inp"
          variant="outlined"
          margin="normal"
          fullWidth
          id="state"
          label="Select State"
          name="State"
          type="State"
          value={State}
          onChange={handleStateChange}
          required
        />
        <label className="lb">Phone Number</label>
        <input
          className="inp"
          label="Phone Number"
          type="tel"
          fullWidth
          id="phone"
          name="phone"
          value={Phone}
          onChange={handlePhone}
          pattern="[0-9]{10}"
          required
          variant="outlined"
        />
        <center>
          <Button type="submit" className="but" style={{ color: "white" }}>
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
// import React from 'react'
// import  { useState } from "react";
// import { TextField, Button, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [Name, setName] = useState("");
//   const [State, setState] = useState("");
//   const [Phone, setPhone] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };
//   const handleStateChange = (e) => {
//     setState(e.target.value);
//   };
//   const handlePhone= (e) => {
//     setPhone(e.target.value);
//   };

    
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log("Email:", email);
//       console.log("Password:", password);
//       console.log("Name:", Name);
//       console.log("Select State:", State);
//       console.log("Phone number:",Phone);
//       if (/^[0-9]{10}$/.test(Phone)) {
//       } else {
//         alert('Invalid phone number format!');
//       }
//     };
    
//   return (
//     <Paper
//       elevation={3}
//       style={{ padding: 20, maxWidth: 400, margin: "auto", marginTop: 50 ,backgroundImage:'url("https://wallpapercave.com/dwp1x/wp3672119.jpg")',}}
//     >
//       <div>
//         <center>
//           Register and sign up!
//           <Typography component="h3" variant="h3">
//             EventsHub
//           </Typography>
//         </center>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             id="Name"
//             label="Name"
//             name="Name"
//             type="Name"
//             value={Name}
//             onChange={handleNameChange}
//             required
//             style={{borderRadius:'100px'}}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//             style={{borderRadius:'100px'}}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             id="password"
//             label="Password"
//             name="password"
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//            style={{borderRadius:'100px'}}
//           />
//            <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             id="state"
//             label="Select State"
//             name="State"
//             type="State"
//             value={State}
//             onChange={handleStateChange}
//             required
//             style={{borderRadius:'100px'}}
//           />
//           <TextField
//         label="Phone Number"
//         type="tel"
//         fullWidth
//         id="phone"
//         name="phone"
//         value={Phone}
//         onChange={handlePhone}
//         pattern="[0-9]{10}"
//         required
//         variant='outlined'
//         style={{borderRadius:'100px'}}
//       />
//           <br></br>
//           <br></br>
//           <Button type="submit" fullWidth variant="contained" color="success">
//             Sign Up
//           </Button>
//         </form>
//       </div>
//     </Paper>
//   );
// };
// export default SignUp;