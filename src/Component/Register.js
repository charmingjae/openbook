import React, { Component } from "react";
import "../css/Register.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      password: "",
    };
  }

  // * 회원가입 함수
  doRegister = async (e) => {
    // * e.preventDefault() 지우면 값 사라진다.
    e.preventDefault();
    const res = await axios("http://localhost:4000/add/register", {
      method: "POST",
      data: this.state,
      headers: new Headers(),
    });

    if (!res.data) {
      alert("이미 아이디가 있습니다.");
    } else {
      alert("회원가입 성공!");
    }
  };

  idUpdate(e) {
    this.setState({ userid: e.target.value });
  }

  pwUpdate(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Typography className="shwRegister">레지스터</Typography>
          <form method="POST" onSubmit={this.doRegister}>
            <TextField
              label="아읻이"
              variant="outlined"
              color="primary"
              className="txtID"
              onChange={(e) => this.idUpdate(e)}
            />
            <TextField
              label="팻으어드"
              variant="outlined"
              color="primary"
              className="txtPW"
              type="password"
              onChange={(e) => this.pwUpdate(e)}
            />
            <Button
              className="subLogin"
              variant="contained"
              color="primary"
              type="submit"
            >
              회원가입
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
