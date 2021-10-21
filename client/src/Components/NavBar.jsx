import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function NavBar(props) {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
          spacing={4}
        >
          <Link to="/home" className="link">
            <IconButton size="large">
              <HomeIcon />
              <Typography variant="caption">Home</Typography>
            </IconButton>
          </Link>
          <Link to="/catalog" className="link">
            <IconButton size="large">
              <ListIcon />
              <Typography variant="caption">Catalog</Typography>
            </IconButton>
          </Link>
          <Link to="/search" className="link">
            <IconButton size="large">
              <SearchIcon />
              <Typography variant="caption">Search</Typography>
            </IconButton>
          </Link>
          <Link to="/mybooks" className="link">
            <IconButton size="large">
              <MenuBookIcon />
              <Typography variant="caption">My Books</Typography>
            </IconButton>
          </Link>
          <Link to="/adminview" className="link">
            <IconButton size="large">
              <AdminPanelSettingsIcon />
              <Typography variant="caption"> Admin</Typography>
            </IconButton>
          </Link>
        </Stack>
        <Link to="/" className="link">
            <IconButton size="large">
              <ExitToAppIcon />
              <Typography variant="caption">Sign Out</Typography>
            </IconButton>
          </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
