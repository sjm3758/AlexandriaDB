import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import {  Grid, Typography } from "@mui/material";
import UserService from "../Services/UserService";
import UserDisplay from "./UserDisplay";

function AdminView(props) {
  // Holds all the users
  const [allUsers, setAllUsers] = useState([]);

  // Function to get all users and set them in state
  const getAllUsers = () => {
    UserService.getAllUsers().then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  };

  // Gets all Users on page load
  useEffect(() => {
    getAllUsers();
  }, []);

  // Need to have functions that allow Admin to Delete and Suspend users.

  return (
    <div>
      <NavBar />
      <Grid container direction="column" mt={9} alignItems="center" >
        <Typography variant="h5">Users</Typography>
        {allUsers.map((item, i) => {
          return (
            <UserDisplay
              key={i}
              username={item.username}
              password={item.password}
              booksOut={item.booksOut}
              reservedBooks={item.reservedBooks}
              admin={item.admin}
              getAllUsers={getAllUsers}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default AdminView;
