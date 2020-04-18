import "./Header.css";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { ReactComponent as MenuSVG } from "../../assets/svg/open-menu.svg";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className="" color="inherit" aria-label="menu">
          <MenuSVG className="header-svg" />
        </IconButton>
        <Typography variant="h6" className="header-name">
          Docker
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
