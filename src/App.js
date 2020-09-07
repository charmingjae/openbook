import React, { Component } from "react";

import Header from "./Component/Header";
import Register from "./Component/Register";
import Main from "./Component/Main";

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
    }
  };

  render() {
    return (
      <>
        <header className="App-header">
          <Header />
        </header>

        <body>{this.showComponent(this.state.page)}</body>
      </>
    );
  }
}

export default App;
