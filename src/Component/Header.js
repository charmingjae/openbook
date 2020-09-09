import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import "../css/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Main",
      anchorEl: false,
    };
  }

  componentDidUpdate() {
    console.log("Chk login status : ", sessionStorage.getItem("lgStatus"));
  }

  selectLogin = async () => {
    await this.setState({
      page: "Login",
    });
    this.props.onSubmit(this.state.page);
  };

  testFunction = () => {
    alert("Login successed");
  };

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: false,
    });
  };

  selectLogout = () => {
    sessionStorage.setItem("lgStatus", false);
    sessionStorage.setItem("id", null);
    this.props.onSubmit(this.state.page, sessionStorage.getItem("lgStatus"));
    window.location.reload(true);
  };

  render() {
    const getLogStatus = sessionStorage.getItem("lgStatus");

    console.log("getLogStatus : ", getLogStatus);
    return (
      <div className="root">
        <AppBar className="AppBar" position="static">
          <Toolbar>
            <Typography variant="h6" className="title">
              <a className="aTypo" href="/">
                Openbook
              </a>
            </Typography>

            {getLogStatus === "true" ? (
              <>
                <Button
                  color="inherit"
                  className="btnLogin"
                  onClick={() => this.testFunction()}
                >
                  {sessionStorage.getItem("userid")}
                </Button>
                <IconButton
                  edge="start"
                  className="menuButton"
                  color="inherit"
                  aria-label="menu"
                  onClick={(e) => this.handleClick(e)}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  keepMounted
                  open={this.state.anchorEl}
                  onClose={() => this.handleClose()}
                >
                  <MenuItem onClick={() => this.selectLogout()}>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                color="inherit"
                className="btnLogin"
                onClick={() => this.selectLogin()}
              >
                로그인
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
