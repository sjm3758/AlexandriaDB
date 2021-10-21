import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

function BookDisplay(props) {
  return (
    <div>
      <Grid container spacing={2}  direction="row" margin={2} width="98%">
        <Grid item >
          <img src={props.image} alt="Book image." />
        </Grid>
        <Grid item xs={8} >
          <Stack spacing={2}>
            <Stack>
              <Typography variant="h2">{props.title}</Typography>
              <Typography variant="subtitle1">By: {props.author}</Typography>
            </Stack>
            <Stack>
              <Typography variant="body2">
                Publishing: {props.publication}
              </Typography>
              <Typography variant="body2">ISBN-13: {props.isbn}</Typography>
              <Typography variant="body2">Pages: {props.pages}</Typography>
              <Typography variant="body2">Status: {props.status}</Typography>
            </Stack>
            <Typography variant="body1">{props.description}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default BookDisplay;
