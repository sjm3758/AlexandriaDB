import React from "react";
import { Grid, Stack, Typography, Button, Box } from "@mui/material";
import UserService from "../Services/UserService";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningIcon from '@mui/icons-material/Warning';

function UserDisplay(props) {
  //Need to have functions that allow Admin to Delete and Suspend users.
  const deleteUser = (username) => {
    UserService.deleteUsers(username).then((res) => {
      console.log(res.data);
      props.getAllUsers();
    });
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      border={1}
      borderRadius={2}
      margin={2}
      width="90%"
      alignItems="center"
    >
      <Stack
        margin={2}
        // border={1}
        direction="row"
        width="90%"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h3">{props.username}</Typography>
          <Typography>Admin Status: {JSON.stringify(props.admin).toUpperCase()}</Typography>
        </Box>
        <Box>
          <Button color="warning"><WarningIcon/>Suspend</Button>
          <Button
            color="error"
            onClick={() => {
              deleteUser(props.username);
            }}
          >
            <DeleteIcon />
            Delete
          </Button>
        </Box>
      </Stack>
      <Stack
        direction="row"
        width="90%"
        mb={2}
        // border={1}
      >
        <Stack alignItems="center" width="50%">
          <Typography variant="subtitle1" borderBottom={1} width="90%" textAlign="center">Books out</Typography>
          {props.booksOut.map((item, i) => {
            return (
              <Typography
                key={i}
                title={item.title}
                isbn={item.isbn}
                variant="body1"
              >
                {item.title}, {item.isbn}
              </Typography>
            );
          })}
        </Stack>
        <Stack alignItems="center" width="50%">
          <Typography variant="subtitle1" borderBottom={1} width="90%" textAlign="center">Reserved Books</Typography>
          {props.reservedBooks.map((item, i) => {
            return (
              <Typography
                key={i}
                title={item.title}
                isbn={item.isbn}
                variant="body1"
              >
                {item.title}, {item.isbn}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
    </Grid>
  );
}

export default UserDisplay;
