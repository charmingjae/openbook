import React, { Component } from "react";
import "../css/Register.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Register extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <Typography className="shwRegister">레지스터</Typography>
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
              회원가입
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
