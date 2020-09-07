import React, { Component } from "react";
import "../css/Login.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Main",
    };
  }

  selectRegister = async () => {
    await this.setState({
      page: "Register",
    });
    this.props.onSubmit(this.state.page);
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <Typography className="shwLogin">로그인</Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="아읻이"
              variant="outlined"
              color="primary"
              className="txtID"
            />
            <TextField
              label="팻으어드"
              variant="outlined"
              color="primary"
              className="txtPW"
              type="password"
            />
            <Button className="subLogin" variant="contained" color="primary">
              로그인
            </Button>
            <br />
            <br />
            <button className="aLogin" onClick={() => this.selectRegister()}>
              혹시 회원이 아니신가요?
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
