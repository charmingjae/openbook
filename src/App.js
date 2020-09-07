import React, { Component } from "react";

import Header from "./Component/Header";
import Register from "./Component/Register";
import Main from "./Component/Main";
import Login from "./Component/Login";

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
      return <Main />;
    } else if (page === "Register") {
      return <Register />;
    } else if (page === "Login") {
      return <Login onSubmit={this.subHeader} />;
    }
  };

  // * Page route, Login Status 받음
  subHeader = (locPage) => {
    this.setState({
      page: locPage,
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
