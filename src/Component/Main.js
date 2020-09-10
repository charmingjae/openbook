import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import "../css/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.sate = {
      page: "",
      userid: "",
    };
  }

  // * Go 버튼 클릭 이벤트
  goRank = async () => {
    await this.setState({
      page: "Rank",
    });
    this.props.onSubmit(this.state.page);
  };

  render() {
    return (
      <>
        <div id="mainWrapper">
          <h1 id="mainContent">OPENBOOK</h1>
          <Button
            className="btnGo"
            variant="contained"
            color="primary"
            onClick={() => this.goRank()}
          >
            GO
          </Button>
        </div>
      </>
    );
  }
}

export default Main;
