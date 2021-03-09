import React, { Component } from "react";
import "../css/Rank.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rootRank">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className="paperRank">xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="paperRank">xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="paperRank">xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Rank;
