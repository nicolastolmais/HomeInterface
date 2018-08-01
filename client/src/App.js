import React, { Component } from 'react';
import './App.css';
import RemindersContainer from './reminders/RemindersContainer';
import WeatherContainer from './weather/WeatherContainer';
import TimeContainer from './time/TimeContainer';
import RecipeContainer from './recipe/RecipeContainer';
import { Grid, GridCell } from 'rmwc/Grid';
import './common/styles/ThinTile.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <TimeContainer />
        <RemindersContainer />
        <WeatherContainer />
        <RecipeContainer />
      </Grid>
    )
  }
}

export default App;
