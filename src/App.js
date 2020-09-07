import React, { Component } from "react";

import Header from "./Component/Header";
import Register from "./Component/Register";

class App extends Component {
  render() {
    return (
      <>
        <header className="App-header">
          <Header />
        </header>

        <body>
          <Register />
        </body>
      </>
    );
  }
}

export default App;
