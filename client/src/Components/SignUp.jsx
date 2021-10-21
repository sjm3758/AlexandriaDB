import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Typography, Stack } from "@mui/material";
import UserService from "../Services/UserService";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [link, setLink] = useState("/signup");
  const [userList, setUserList] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConf = (e) => {
    setPasswordConf(e.target.value);
  };

  const getAllUsers = () =>{
    UserService.getAllUsers().then((res)=>[
      setUserList(res.data)
    ])
  }

  // Will need to check if chosen password matches both password fields
  // Will need to search for existing users with the same username
  // Will need to post new users with unique names and matching password fields to database
  const submitNewUser = () => {
    // should check if entered password is the same and if username already exists
    userList.forEach((item)=>{
      if(item.username === username){
        return alert("Username already exists")
      }
      else if (password !== passwordConf) {
        return alert("Error, passwords do not match.");
      } else if (password === passwordConf) {
        UserService.postUsers({
            username: username,
            password: password
        }).then((res)=>{
            console.log(res.data);
        })
      }
    })
    console.log(username);
    console.log(password);
  };

  useEffect(()=>{
    getAllUsers();
  },[])
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100%"
      >
        <Typography variant="h2">SIGN UP</Typography>
        <Stack spacing={2} justifyContent="center" alignItems="center">

        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          onChange={handleUsername}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          onChange={handlePassword}
        />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
          type="password"
          onChange={handlePasswordConf}
        />
        <Link to="/" className="link">
          <Button variant="contained" onClick={submitNewUser}>Sign Up</Button>
        </Link>
        </Stack>
      </Grid>
    </div>
  );
}

export default SignUp;
