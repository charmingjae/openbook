import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "../css/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.stae = {
      page: "Main",
    };
  }

  selectLogin = async () => {
    await this.setState({
      page: "Login",
    });
    this.props.onSubmit(this.state.page);
  };

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
              <a className="aTypo" href="/main">
                Openbook
              </a>
            </Typography>

            <Button
              color="inherit"
              className="btnLogin"
              onClick={() => this.selectLogin()}
            >
              로그인
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
