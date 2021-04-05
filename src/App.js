import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { styles } from "./css-common"

import CoronaList from "./components/tutorials-list.component";

import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography className={classes.name} variant="h6">
              Ligadata
            </Typography>
          </Toolbar>
        </AppBar>

          <Switch>
            <Route exact path={["/", "/paagination"]} component={CoronaList} />
          </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);