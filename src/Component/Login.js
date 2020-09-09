import React, { Component } from "react";
import "../css/Login.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Main",
      userid: "",
    };
  }

  // * 로그인 함수
  doLogin = async (e) => {
    e.preventDefault();
    const res = await axios("http://localhost:4000/add/login", {
      method: "POST",
      data: this.state,
      headers: new Headers(),
    });

    if (res.data) {
      console.log("Chk suc : ", res.data.suc);
      if (res.data.suc) {
        sessionStorage.setItem("lgStatus", true);
        sessionStorage.setItem("userid", this.state.userid);
        this.props.onSubmit(
          this.state.userid,
          sessionStorage.getItem("lgStatus")
        );
        window.location.reload(true);
      } else {
        alert("아이디와 비밀번호를 확인하세요.");
      }
    }
  };

  // * id 상태 변경 함수
  idUpdate(e) {
    this.setState({ userid: e.target.value });
  }
  // * pw 상태 변경 함수
  pwUpdate(e) {
    this.setState({ password: e.target.value });
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
          <form method="POST" onSubmit={this.doLogin}>
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
