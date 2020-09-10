import React, { Component } from "react";

import Header from "./Component/Header";
import Register from "./Component/Register";
import Main from "./Component/Main";
import Login from "./Component/Login";
import Rank from "./Component/Rank";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Main",
      id: "",
      pw: "",
    };
  }

  // * this.state.page 값에 따라 보여주는 Component 설정
  showComponent = (page) => {
    if (page === "Main") {
      return <Main onSubmit={this.subHeader} />;
    } else if (page === "Register") {
      return <Register />;
    } else if (page === "Login") {
      return <Login onSubmit={this.subHeader} />;
    } else if (page === "Rank") {
      return <Rank />;
    }
  };

  // * Page route, Login Status 받음
  subHeader = (locPage, lgStatus) => {
    this.setState({
      page: locPage,
      lgStatus: lgStatus,
    });
  };

  render() {
    return (
      <>
        <header className="App-header">
          <Header onSubmit={this.subHeader} />
        </header>

        <body>{this.showComponent(this.state.page)}</body>
      </>
    );
  }
}

export default App;
