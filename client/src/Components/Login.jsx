import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Typography, Stack } from "@mui/material";
import UserService from "../Services/UserService";

function Login() {
  // Need to check if the username entered exists
  // Then need to check if the username matches the password
  // If username doesn't exist, need to prompt user to sign up
  // If password is wrong, need to prompt user the password is wrong

  const [login, setLogin] = useState("/");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const [userExists, setUserExists] = useState(false);

  // Need to make a function that searches for the entered username and password
  // Function will setLogin to "/home" if username exists and password is correct, will remain "/" if username doesn't exist

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const getAllUsers = () => {
    UserService.getAllUsers().then((res) => {
      setUserList(res.data);
      console.log(res.data);
    });
  };

  const verifyUser = (username, password) => {
    userList.forEach((item) => {
      if (item.username === username) {
        setUserExists(true);
        UserService.getUser(username).then((res) => {
          // Checks if user exists/if username and password match
          if (res.data.username === username && res.data.password === password) {
            setLogin("/home");
            console.log(res.data);
            console.log(res.status);
            alert("Success!");
          } else {
            alert("Password is incorrect, please try again.");
          }
        });
      } else {
        alert("Username doesn't exist.");
      }
    });
    
    
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <Grid item xs={4}>
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h1">ALEXANDRIA</Typography>
          <Typography variant="caption">
            By Derek Wong, Sean Mack, Daniel Dickey, and Chadwick Green
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={8}>
        {/* <Typography variant="h2">LOGIN</Typography> */}
        <Stack spacing={2} justifyContent="center" alignItems="center" mb={2}>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            onChange={handleUsername}
          />
          <TextField
            id="standard-basic"
            label="Password"
            type="Password"
            variant="standard"
            onChange={handlePassword}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Link to={login} className="link" >
            <Button
              variant="contained"
              onClick={() => verifyUser(username, password)}
            >
              
              Log In
            </Button>
          </Link>
          <Link to="/signup" className="link">
            <Button variant="contained"> Sign Up</Button>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Login;
