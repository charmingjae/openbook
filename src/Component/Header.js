import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "../css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="root">
        <AppBar className="AppBar" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="title">
              <a className="aTypo" href="/">
                Openbook
              </a>
            </Typography>
            <Button color="inherit" className="btnLogin">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
